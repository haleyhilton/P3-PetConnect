import React, { useEffect, useState, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import Auth from "../../../utils/auth";
import { QUERY_ONE_USER } from "../../../utils/queries";
import { EDIT_USER } from "../../../utils/mutations";
import { useQuery, useMutation } from "@apollo/client";
import './editUser.css'
import moment from 'moment'

export default function EditUser() {

  
  const [editUser, { error, datum }] = useMutation(EDIT_USER);
  const [nameInfo, setNameInfo] = useState({
    profileId: Auth.getUser().data._id,
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    zipCode: "",
  });
  const navigate = useNavigate();
  const profileId = Auth.getUser().data._id;
  const { loading, data } = useQuery(QUERY_ONE_USER, {
    variables: { profileId: profileId },
  });

  const profile = data?.oneUser || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  nameInfo.firstName = profile.first_name;
  nameInfo.lastName = profile.last_name;
  nameInfo.dateOfBirth = profile.date_of_birth;
  nameInfo.zipCode = profile.zip_code;
 
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // console.log(nameInfo,"here is name")
    try {
        const { datum } = await editUser({
        variables: { ...nameInfo },
      });
      window.location.reload();
      console.log(datum, "datum")
      // navigate.push(`/settings`);
    } catch (e) {
      console.error(e);
    }
  };

  const date_of_birth = new Date("04/07/1986")

  console.log(nameInfo, "dob")

  return (
    <div>
      <div className="container my-5 edit-info">
        <h1>
          <span>
            <button className="btn btn-secondary" onClick={() => navigate(-1)}>
              {" "}
              <span>&lt;</span> Back{" "}
            </button>{" "}
            Profile Settings
          </span>
        </h1>
        <div className="my-5 edit-info-div">
          <form className="form signup-form form-addition" onSubmit={handleFormSubmit}>
          <h2>Edit Your Information</h2>
            <input
              className="form-input"
              type="text"
              placeholder={`Current First Name: ${profile.first_name}`}
              id="fn-signup"
              name="first_name"
              // value={this.state.name}
              onChange={e => nameInfo.firstName = e.target.value}
            />
            <input
              className="form-input"
              type="text"
              id="fn-signup"
              name="last_name"
              placeholder={`Current Last Name: ${profile.last_name}`}
              // value={this.state.name}
              onChange={e => nameInfo.lastName = e.target.value}
            />
            <input
              className="form-input"
              type="text"
              id="fn-signup"
              name="date_of_birth"
              placeholder={`Current DOB: ${moment(`${profile.date_of_birth}`).format('MMM Do YYYY')}`}
              // value={this.state.name}
              onChange={e => (nameInfo.dateOfBirth) = new Date(e.target.value)}
            />
            <input
              className="form-input"
              type="text"
              id="fn-signup"
              name="zip_code"
              placeholder={`Current Zip Code: ${profile.zip_code}`}
              // value={this.state.name}
              onChange={e => nameInfo.zipCode = parseInt(e.target.value)}
            />
            <button
              id="signup-submit"
              className="btn btn-primary"
              type="submit"
              style={{ cursor: "pointer" }}
            >
              Update
            </button>
          </form>
          {/* <div>First Name: {profile.first_name}</div>
          <div>Last Name: {profile.last_name}</div> */}
        </div>
      </div>
    </div>
  );
}
