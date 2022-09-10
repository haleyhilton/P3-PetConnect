import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ONE_USER } from "../../utils/queries";
import "./style.css";
import Button from "react-bootstrap/Button";
import placeholder from "../../images/results.PNG";

export default function ExternalProfile(props) {
  // const { profileId } = useParams();
  const profileId = "6319432ff2c754c444d42e71";

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
      <div className="layout">
        <div className="profile-picture" style={imgStyle}></div>
        <div className="profile-info">
          Name: {profile.first_name} {profile.last_name} <br />
          Email: {profile.email} <br />
          Zip Code: {profile.zip_code} <br />
        </div>
      </div>
      <div className="pets">
        {pets &&
          pets.map((dog) => (
            // console.log(dog.media[0].url, "dog picture"),
            <div key={dog._id} className="grid-item">
              <Button
                variant="primary"
                onClick={() => {
                  // setModalShow(true)
                  //   handleOpen()
                  //   setDogInfo(dog._id)
                }}
              >
                {dog.name}: {dog.breed}
                <br />
                <img
                  style={imageStyle}
                  src={dog.media[0] ? dog.media[0].url : placeholder}
                />
              </Button>
            </div>
          ))}
      </div>
    </div>
  );
}
