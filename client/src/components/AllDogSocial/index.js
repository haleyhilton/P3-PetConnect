import React from "react";
import Button from "react-bootstrap/Button";
import { useLazyQuery, useQuery } from "@apollo/client";
import { QUERY_ALL_PET, QUERY_ONE_USER_BY_PET_ID } from "../../utils/queries";
import placeholder from '../../images/results.PNG'
import PetCloudinary from '../PetCloudinary'
import { Link } from 'react-router-dom';

const AllDogSocial = ({ dogs }) => {
  const [dogInfo, setDogInfo] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(true);
  const [currentOwner, setCurrentOwner] = React.useState("");
  const profileId = dogInfo;
  const { loading, data } = useQuery(QUERY_ALL_PET, {
    
  });

  const [userByPet] = useLazyQuery(QUERY_ONE_USER_BY_PET_ID)

  const profile = data?.pet || {};
  if (loading) {
    return <div>Loading...</div>;
  }
  
  

  async function getOwner(pet) {
    /* console.log(pet); */
    const owner = await userByPet({variables: { petId: pet._id }});
    if (owner) {
      return owner;
    }
  }

  const handleOpen = async (dog) => {
    // toggle vis
    setIsOpen((current) => !current);
    /* console.log(dog); */
    const owner = await getOwner(dog);
    if (owner) {
      setCurrentOwner(owner);
      //TODO: oneUserByPetId only gets _id, add name
      console.log(owner.data.oneUserByPetId.name);
    }
  };

return (
  <div className="grid-container">
    {profile &&
      profile.map((dog) => {
        return (
          <div>
          <div key={dog._id} className="grid-item" style={{backgroundImage: `url(${dog.media[0]? dog.media[0].url : placeholder})`}} onClick={() => {
            handleOpen(dog)
            console.log(dog);
          }}></div>
          <div id="myModal" className="modal" style={{ display: isOpen ? "none" : "block" }}>
            <div className="modal-content">
              <span className="close" onClick={handleOpen}>&times;</span>
              <div className="modal-inner-wrapper">
              <div className="modal-inner-image" style={{backgroundImage: `url(${profile?.media?.[0]? profile.media[0].url : placeholder})`}}>
                <p className="dog-stats"> Owner: {}</p>
                <p className="dog-stats">Name: {dog.name}</p>
                <p className="dog-stats">Age: {dog.age}</p>
                <p className="dog-stats">Breed: {dog.breed}</p>
                <p className="dog-stats">Sex: {dog.sex}</p>
                <p className="dog-stats">Size: {dog.size}</p>
                <p className="dog-stats">Color: {dog.color}</p>
                <p className="dog-stats">Description: {dog.description}</p>
              </div>
              </div>
            </div>
          </div>


          </div>
        )
      })      
    }
  </div>
)
};

export default AllDogSocial;
