import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ONE_PET } from "../../utils/queries";
import placeholder from "../../images/results.PNG";
import PetCloudinary from "../PetCloudinary";
import { Link } from "react-router-dom";
import { style } from "@mui/system";
import { DELETE_ONE_PET } from "../../utils/mutations";
import "./style.css";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const ProfileDog = ({ dogs }) => {
  const [isDeleteOpen, setIsDeleteOpen] = useState(true);
  const [isTest, setTest] = useState(true);

  const [deletePetToUser, { err }] = useMutation(DELETE_ONE_PET);

  const [dogInfo, setDogInfo] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(true);
  const profileId = dogInfo;
  const { loading, data } = useQuery(QUERY_ONE_PET, {
    variables: { profileId: profileId },
  });

  const profile = data?.onePet || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleOpen = (event) => {
    // toggle vis
    setIsOpen((current) => !current);
  };
  const handleDeleteOpen = (event) => {
    setIsDeleteOpen((current) => !current);
  };

  const testOpen = (event) => {
    setTest((current) => !current);
  };

  const deleteFunction = (id) => {
    deletePetToUser({ variables: { id: id } });
    window.location.reload();
  };

  return (
    <div>
      <div class="edit">
        <button onClick={handleDeleteOpen}>Edit</button>
      </div>
      <div class="titlewrapper">
        <div>Dogs</div>
      </div>
      <div className="wrapattack">
        <div className="grid-container">
          {dogs &&
            dogs.map((dog) => (
              <div
                key={dog._id}
                className="grid-item"
                style={{
                  backgroundImage: `url(${
                    dog.media[0] ? dog.media[0].url : placeholder
                  })`,
                }}
                onClick={() => {
                  if (isDeleteOpen === true) {
                    handleOpen();
                    setDogInfo(dog._id);
                  } else {
                    deleteFunction(dog._id);
                  }
                }}
              >
                <div
                  className="deleteButton"
                  style={{ display: isDeleteOpen ? "none" : "block" }}
                >
                  X
                </div>
              </div>
            ))}
        </div>
        <div
          id="myModal"
          className="modal"
          style={{ display: isOpen ? "none" : "block" }}
        >
          <div className="modal-content">
            <span className="close" onClick={handleOpen}>
              &times;
            </span>
            <div className="modal-inner-wrapper">
              <div
                className="modal-inner-image"
                style={{
                  backgroundImage: `url(${
                    profile?.media?.[0] ? profile.media[0].url : placeholder
                  })`,
                }}
              ></div>
              <div className="modal-inner-text">
                <p className="dog-stats">{profile.name}</p>
                <p className="dog-stats">Age: {profile.age}</p>
                <p className="dog-stats">Breed: {profile.breed}</p>
                <p className="dog-stats">Sex: {profile.sex}</p>
                <p className="dog-stats">Size: {profile.size}</p>
                <p className="dog-stats">Color: {profile.color}</p>
                <p className="dog-stats italic">
                  <small>{profile.description}</small>
                </p>
                <button className="upload-btn">
                  <Link className="linktext" to={`/pet-gallery/${profile._id}`}>
                    Upload a Picture
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDog;
