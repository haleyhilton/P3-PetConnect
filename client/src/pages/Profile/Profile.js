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
import blankPicture from "../../images/blankprofile.PNG"

export default function Profile(props) {
  // OPEN AND CLOSE ADDING A NEW DOG
  const [isPostOpen, setIsPostOpen] = useState(true);
  const [isDeleteOpen, setIsDeleteOpen] = useState(true);
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
  console.log(profileId)
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

      navigate(`/profiles/${profileId}`);
      window.location.reload();
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


  const dogProfile = profile.pet;
  console.log(formState, "hi im form")


  return (
    <div>

      <div className="hero-image">
        <div className="profile-pic" style={{ backgroundImage: `url(${profile.profilePicture ? profile.profilePicture : blankPicture})` }}>

        </div>
      </div>


      <div className="details">

        <div>
          {profile.first_name} {profile.last_name}
        </div>


        <div>Buyer/Seller</div>
        <div>⭐️⭐️⭐️⭐️⭐️</div>

        <div className="about-me-section">
          Hello! I'm {profile.first_name} and I am a dog breeder in {profile.zip_code}

        </div>
        <br></br>
        <div class="message">
          <button> 
            <a href={`/chat/${profileId}`}>Message</a></button>
         
        </div>
      </div>

        <div class="message">
          <button onClick={handlePostOpen}>Add New Dog!</button>
        </div>
        <div>
          <Link className="linktext" to={`/gallery/${Auth.getUser().data._id}`}>
            View Gallery
          </Link>
        </div>
      </div>


      <div class="posts">

      </div>
      <ProfileDog dogs={dogProfile}/>
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
              <button type="submit" onClick={handlePostOpen}>Submit</button>
            </form>
          </div>
        </div>

        
      </div>
    </div>
  );
}
