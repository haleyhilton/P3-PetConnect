import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ONE_USER } from "../../utils/queries";
import "./style.css";
import Button from "react-bootstrap/Button";
import placeholder from "../../images/results.PNG";
import blankPicture from "../../images/blankprofile.PNG"
import DogCard from "./components/DogCard";

export default function ExternalProfile(props) {
  const [isOpen, setIsOpen] = React.useState(true);
  const [dogInfo, setDogInfo] = React.useState("");
  const handleOpen = (event) => {
    // toggle vis
    setIsOpen((current) => !current);
  };


  const { profileId } = useParams();
  /* const profileId = "6319432ff2c754c444d42e71"; */

  const { loading, data } = useQuery(QUERY_ONE_USER, {
    variables: { profileId: profileId },
  });

  const profile = data?.oneUser || {};

  const imgStyle = {
    height: "200px",
    backgroundImage: `url(${profile.profilePicture})`,
    width: "200px",
    "background-position": "center",
    "background-repeat": "no-repeat",
    "background-size": "200px",
  };

  const pets = profile.pet;

  console.log(pets, "yes pets");

  const imageStyle = {
    maxWidth: "200px",
    maxHeight: "200px",
  };

  return (
    <div className="external-profile">
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
            <div class="message">
              <button className='message-btn'>
                <a className="message-text" href={`/chat/${profileId}`}>Message</a></button>
            </div>
          </div>
          <div className="col-3 button-box">
            <div>
            </div>
          </div>
        </div>
        <div class="posts">
        </div>
        <div class="titlewrapper">
          <div>Dogs</div>
        </div>
        <div className="wrapattack">
          <div className="grid-container">
            {pets &&
              pets.map(
                (dog) =>
                (
                  <DogCard dog={dog} />
                )
              )
            }
          </div>
        </div>
      </div>
  );
}
