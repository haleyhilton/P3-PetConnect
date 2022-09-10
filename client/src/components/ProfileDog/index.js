import React from "react";
import Button from "react-bootstrap/Button";
import { useQuery } from "@apollo/client";
import { QUERY_ONE_PET } from "../../utils/queries";
import placeholder from '../../images/results.PNG'
import PetCloudinary from '../PetCloudinary'
import { Link } from 'react-router-dom';

const ProfileDog = ({ dogs }) => {
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

  if (!dogs.length) {
    return <h3>No Dogs Yet</h3>;
  }

  const imageStyle = {
    maxWidth: "200px",
    maxHeight: "200px",
  };
console.log(profile, "here is the profile")

  return (
    <div className="grid-container">
      {dogs &&
        dogs.map(
          (dog) => (
            // console.log(dog.media[0].url, "dog picture"),
            (
              <div key={dog._id} className="grid-item">
                <Button variant="primary" onClick={() => {
                  // setModalShow(true)
                  handleOpen()
                  setDogInfo(dog._id)
                  }}>
                  {dog.name}: {dog.breed}
                  <br />
                <img style={imageStyle} src={dog.media[0]? dog.media[0].url : placeholder} />
                </Button>
              </div>
            )
          )
        )}
         <div
          id="myModal"
          class="modal"
          style={{ display: isOpen ? "none" : "block" }}
        >
          <div class="modal-content">
            <span class="close" onClick={handleOpen}>
              &times;
            </span>
            <div class="modal-inner-wrapper">
              <p className="dog-stats">Age: {profile.name}</p>
              <p className="dog-stats">Age: {profile.age}</p>
              <p className="dog-stats">Breed: {profile.breed}</p>
              <p className="dog-stats">Sex: {profile.sex}</p>
              <p className="dog-stats">Size: {profile.size}</p>
              <p className="dog-stats">Color: {profile.color}</p>
              <p className="dog-stats">Description: {profile.description}</p>
              <Link className="nav-link py-3 px-0 px-lg-3 rounded" to={`/pet-gallery/${profile._id}`}>
              Click Here to Upload a Picture!
              </Link>
            </div>
          </div>
        </div>
    </div>
  );
};

export default ProfileDog;
