import React, { useEffect, useState, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import Auth from "../../../utils/auth";
import { QUERY_ONE_USER } from "../../../utils/queries";
import { EDIT_USER } from "../../../utils/mutations";
import { useQuery, useMutation } from "@apollo/client";
import './editUser.css'

export default function EditUser() {

  
  const [editUser, { error, datum }] = useMutation(EDIT_USER);
  const [nameInfo, setNameInfo] = useState({
    profileId: Auth.getUser().data._id,
    firstName: "Monkey",
    lastName: "Pox",
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

  console.log(nameInfo.firstName)

  return (
    <div>
      <div className="container my-5">
        <h1>
          <span>
            <button className="btn btn-secondary" onClick={() => navigate(-1)}>
              {" "}
              <span>&lt;</span> Back{" "}
            </button>{" "}
            Profile Settings
          </span>
        </h1>
        <div className="my-5 div-form">
          <form className="form signup-form form-addition" onSubmit={handleFormSubmit}>
          <h2>Edit Your Name</h2>
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
            <button
              id="signup-submit"
              className="btn btn-primary"
              type="submit"
              style={{ cursor: "pointer" }}
            >
              Update Name
            </button>
          </form>
          {/* <div>First Name: {profile.first_name}</div>
          <div>Last Name: {profile.last_name}</div> */}
        </div>
      </div>
    </div>
  );
}
