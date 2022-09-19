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
import { ADD_PET_PICTURE } from '../../utils/mutations'
import { getDataFromTree } from "@apollo/client/react/ssr";
import Auth from "../../utils/auth";
import blankPicture from "../../images/blankprofile.PNG"
import Cloudinaryformodal from "../../components/Cloudinaryformodal";
import axios from 'axios';

export default function Profile(props) {
  // OPEN AND CLOSE ADDING A NEW DOG
  const { petId } = useParams();
  const [isPostOpen, setIsPostOpen] = useState(true);
  const [isDeleteOpen, setIsDeleteOpen] = useState(true);
  const [addPhoto, { errorr }] = useMutation(ADD_PET_PICTURE);
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
  const [images, setImages] = useState([]);
  const [imageToRemove, setImageToRemove] = useState(null);
  console.log(petId, "this is pet id")
  const [imageToSave, setImageToSave] = useState({
    petId: petId,
    media: "",
  });
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





  // Cloudinary


  const styleImageContainer = {
    position: 'relative',
    width: '300px',
    height: '300px',
    margin: '20px',
  }

  const imageStyleNew = {
    width: '300px',
    height: '300px',
    objectFit: 'cover',
  }

  const imagePreviewContainer = {
    display: 'flex',
    justifyContent: 'left',
  }

  const closeIcon = {
    position: 'absolute',
    top: '0',
    left: '0',
    fontSize: '20px',
  }



  const handlePhotoSave = async (event) => {
    // event.preventDefault();    
    // On form submit, perform mutation and pass in form data object as arguments
    // It is important that the object fields are match the defined parameters in `ADD_THOUGHT` mutation
    try {
      const { data } = addPhoto({
        variables: { ...imageToSave },
      });

      
    } catch (err) {
      console.error(err);
    }
  };

  function handleRemoveImg(imgObj) {
    setImageToRemove(imgObj.public_id);
    axios.delete(`http://localhost:3001/${imgObj.public_id}`)
      .then(() => {
        setImageToRemove(null);
        setImages((prev) => prev.filter((img) => img.public_id !== imgObj.public_id))
      })
      .catch((e) => console.log(e))

  }

  function handleOpenWidget() {
    let myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: 'dwwkixeof',
        uploadPreset: 'ml_default',
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          setImages((prev) => [...prev, { url: result.info.url, public_id: result.info.public_id }])
          console.log('Done! Here is the image info: ', result.info);
          // Save image
          imageToSave.media = result.info.secure_url
        }
      }
    );
    // open widget
    myWidget.open();
  }

  return (
    <div>

      <div className="hero-image">
        <div className="profile-pic" style={{ backgroundImage: `url(${profile.profilePicture ? profile.profilePicture : blankPicture})` }}>

        </div>
      </div>

      <div className="row custom-row">
        <div className="col-9 details">

          <div className="name">
            {profile.first_name} {profile.last_name}
          </div>


          <div className="buyer-seller">Buyer/Seller</div>


          <div className="about-me-section">
            Hello! I'm {profile.first_name} and I am a dog breeder in {profile.zip_code}

          </div>
          <div>⭐️⭐️⭐️⭐️⭐️</div>
          <br></br>
          <div className="message">
            <button className='message-btn'>
              <a className="message-text" href={`/chat/${profileId}`}>Message</a></button>

          </div>
        </div>
        <div className="col-3 button-box">
          <div>
            <button className="box-btn" onClick={handlePostOpen}>Add New Dog</button>
          </div>
          <div><button className="box-btn">
            <Link className="linktext" to={`/gallery/${Auth.getUser().data._id}`}>
              View Gallery
            </Link></button>
          </div>
        </div>
      </div>

      <div className="posts">

      </div>
      <ProfileDog dogs={dogProfile} />

      <div className="wrapattack">
        {/* Modal for Adding a Dog */}
        <div
          id="myModal"
          className="modal"
          style={{ display: isPostOpen ? "none" : "block" }}
        >
          <div className="modal-content">
            <span className="close" onClick={handlePostOpen}>
              &times;
            </span>

            <form onSubmit={() => { handlePhotoSave(); handleFormSubmit() }} className="modal-inner-wrapper">

              <label>Upload Photo</label>
              <div className="main-component">
                <div>

                  <h2>Preview Image</h2>
                  <div className="images-preview-container" style={imagePreviewContainer}>
                    {/* Show Pictures*/}
                    {images.map((image) => (
                      <div className="image-preview" style={styleImageContainer}>
                        <img src={image.url} style={imageStyleNew} />
                        {imageToRemove != image.public_id && <i className="fa fa-times-circle close-icon" style={closeIcon} onClick={() => handleRemoveImg(image)}></i>}
                      </div>
                    )
                    )}
                  </div>
                  <br />
                  <button id="upload-widget" className="cloudinary-button" onClick={() => handleOpenWidget()}>
                    Upload New Photo
                  </button>
                </div>
              </div>

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
    </div >
  );
}
