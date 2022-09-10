import React from "react";
import Button from "react-bootstrap/Button";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_PET } from "../../utils/queries";
import placeholder from '../../images/results.PNG'
import PetCloudinary from '../PetCloudinary'
import { Link } from 'react-router-dom';

const AllDogSocial = ({ dogs }) => {
  const [dogInfo, setDogInfo] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(true);
  const profileId = dogInfo;
  const { loading, data } = useQuery(QUERY_ALL_PET, {
    
  });

  console.log(data)

  const profile = data?.pet || {};
console.log(profile)
  if (loading) {
    return <div>Loading...</div>;
  }
  
  const handleOpen = (event) => {
    // toggle vis
    setIsOpen((current) => !current);
  };


console.log(profile, "here is the profile")

  return (
    
    <div className="grid-container">
        
      {profile &&
        profile.map(
          (dog) => (
            
            (
              <div key={dog._id} className="grid-item" style={{backgroundImage: `url(${dog.media[0]? dog.media[0].url : placeholder})`}} onClick={() => {
                // setModalShow(true)
                handleOpen()
                setDogInfo(dog._id)
                }}>
                
              </div>
            )
          )
        )}
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
            <div className="modal-inner-image" ></div>
            <p className="dog-stats"> Owner: {}</p>
              <p className="dog-stats">Name: {profile.name}</p>
              <p className="dog-stats">Age: {profile.age}</p>
              <p className="dog-stats">Breed: {profile.breed}</p>
              <p className="dog-stats">Sex: {profile.sex}</p>
              <p className="dog-stats">Size: {profile.size}</p>
              <p className="dog-stats">Color: {profile.color}</p>
              <p className="dog-stats">Description: {profile.description}</p>

            </div>
          </div>
        </div>
    </div>
  );
};

export default AllDogSocial;
