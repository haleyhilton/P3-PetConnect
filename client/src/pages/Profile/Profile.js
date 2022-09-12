import React from "react";
import "./style.css";
import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import ProfileDog from "../../components/ProfileDog";
import Cloudinary from "../../components/Cloudinary";
import { QUERY_ONE_USER } from "../../utils/queries";
import { ADD_PET_TO_USER } from "../../utils/mutations";
import { ADD_PET } from "../../utils/mutations";
import { getDataFromTree } from "@apollo/client/react/ssr";
import Auth from "../../utils/auth";
// import placeholder from "../../images/results.PNG"

export default function Profile(props) {
  // OPEN AND CLOSE ADDING A NEW DOG
  const [isPostOpen, setIsPostOpen] = useState(true);
  const handlePostOpen = (event) => {
    setIsPostOpen((current) => !current);
  };
  // HANDLE FORM STATE
  const [formState, setFormState] = useState({
    name: "",
    age: "",
    breed: "",
    sex: "",
    size: "",
    color: "",
    description: "",
  });

  const [addPetState, setPetState] = useState({
    profileId: "",
    pet: "",
  });
  // ADD NEW PET
  //BEGIN ADDING PET TO USER
  const [addPetToUser, { err }] = useMutation(ADD_PET_TO_USER);
  const [addPet, { error }] = useMutation(ADD_PET);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  let navigate = useNavigate();

  const { profileId } = useParams();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addPet({
        variables: { ...formState },
      });
      console.log(JSON.stringify(data), "THIS IS THE DATA COMING IN")

      addPetState.profileId = profileId
      addPetState.pet = data.addPetInfo._id
      console.log(data.addPetInfo._id, "this is the data")
      console.log(profileId, "profile id")
      const { datum } = await addPetToUser({
        variables: { ...addPetState },
      });

      navigate("/");
    } catch (e) {
      console.error(e);
    }
  };

  //BEGIN QUERY ONE USER

  const { loading, data } = useQuery(QUERY_ONE_USER, {
    variables: { profileId: profileId },
  });
   
  const profile = data?.oneUser || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  const imageStyle = {
    maxWidth: "200px",
    maxHeight: "200px",
  };

  const dogProfile = profile.pet;
console.log(formState, "hi im form")

const textArea = {
  "display": "none"
}

  return (
    <div>
      
      <div className="hero-image">
        <div className="profile-pic" style={{ backgroundImage:`url(${profile.profilePicture})` }}>
          {/* <img style={imageStyle} src={profile.profilePicture} /> */}
        </div>
      </div>

      <div class="edit">
        <button>Edit</button>
      </div>
      <div class="details">
        <div>
        <Link className="nav-link py-3 px-0 px-lg-3 rounded" to={`/gallery/${Auth.getUser().data._id}`}>
        View Gallery
         </Link>
        </div>
        <div>
          Name: {profile.first_name} {profile.last_name}
        </div>
        <div>Birthday: {profile.date_of_birth}</div>
        <div>Zip Code: {profile.zip_code}</div>
        <br />
        <br />
        <div>Buyer/Seller</div>
        <div>Rating: ⭐️⭐️⭐️⭐️⭐️</div>
        <div className="about-me-section">
          Hi! I am a dog breeder in the San Diego Area
        </div>
        <div class="message">
          <button> 
            <a href={`/chat/${profileId}`}>Message</a></button>
         
        </div>
      </div>

      <div class="titlewrapper">
        <div>Posts</div>
      </div>
      <div class="titlewrapper">
        <div>Dogs</div>
      </div>
      <div class="posts">
        <button onClick={handlePostOpen}>Add New Dog!</button>
      </div>
      <div class="wrapattack">
        {/* Modal for Adding a Dog */}
        <div
          id="myModal"
          class="modal"
          style={{ display: isPostOpen ? "none" : "block" }}
        >
          <div class="modal-content">
            <span class="close" onClick={handlePostOpen}>
              &times;
            </span>
            <form onSubmit={handleFormSubmit} class="modal-inner-wrapper">

              <label>Name</label>
              <input
                required
                placeholder="Enter your pet's name"
                type="text"
                name="name"
                value={formState.name}
                onChange={handleInputChange}
              ></input>
              <label>Age</label>
              <input
                required
                placeholder="Enter your pet's age"
                type="text"
                name="age"
                value={formState.age}
                onChange={handleInputChange}
              ></input>

              <label>Breed</label>
              <input
                required
                placeholder="Enter your pet's breed"
                type="text"
                name="breed"
                value={formState.breed}
                onChange={handleInputChange}
              ></input>
              <label>Sex</label>
              <textarea
                required
                placeholder="Enter your pet's sex"
                type="text"
                name="sex"
                value={formState.sex}
                onChange={handleInputChange}
              ></textarea>
              <label>Size</label>
              <textarea
                required
                placeholder="Enter your pet's size"
                type="text"
                name="size"
                value={formState.size}
                onChange={handleInputChange}
              ></textarea>
              <label>Color</label>
              <textarea
                required
                placeholder="Enter your pet's color"
                type="text"
                name="color"
                value={formState.color}
                onChange={handleInputChange}
              ></textarea>

              <label>Description</label>
              <textarea
                required
                placeholder="Description of your pet"
                type="text"
                name="description"
                value={formState.description}
                onChange={handleInputChange}
              ></textarea>
              {/* <Cloudinary dogName={formState.name} /> */}
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>

        <ProfileDog dogs={dogProfile} />
      </div>
    </div>
  );
}
