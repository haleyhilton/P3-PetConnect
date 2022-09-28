import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";
import { useNavigate } from "react-router-dom";
import Auth from "../../utils/auth";

export default function Signup() {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  let navigate = useNavigate();
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name);
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
      navigate(`/edit-user`);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="div-form">
      {/* <h2 className="signupH2">SIGN-UP</h2>

      <p>What Arf you waiting for?</p>

      <div className="divider-custom">
        <div className="divider-custom-line"></div>
        <div className="divider-custom-icon">
          <i className="fas fa-paw fa-beat"></i>
        </div>
        <div className="divider-custom-line"></div>
      </div> */}
      {data ? (
        <p>
          Success! You may now head <Link to="/">back to the homepage.</Link>
        </p>
      ) : (
        <form className="form signup-form form-addition" onSubmit={handleFormSubmit}>
          {/* <div className="form-group"> */}
            {/* <label for="fn-signup">First Name:</label>
            <input
              className="form-input"
              type="text"
              id="fn-signup"
              name="first_name"
              value={formState.first_name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label for="ln-signup">Last Name:</label>
            <input
              className="form-input"
              type="text"
              id="ln-signup"
              name="last"
              value={formState.last_name}
              onChange={handleChange}
            />
          </div> */}
          {/* <div className="form-group">
            <label for="dob-signup">Date of Birth:</label>
            <input
              className="form-input"
              type="text"
              id="dob-signup"
              name="date_of_birth"
              value={formState.date_of_birth}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label for="zip-signup">Zip Code:</label>
            <input
              className="form-input"
              type="text"
              id="zip-signup"
              name="zip_code"
              value={formState.zip_code}
              onChange={handleChange}
            />
          </div> */}
          <div className="form-group">
            <label class="label" for="username-signup">Username:</label>
            <input
              className="form-input"
              placeholder="Enter username"
              type="text"
              id="username-signup"
              name="username"
              value={formState.username}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label class="label" for="email-signup">Email:</label>
            <input
              className="form-input"
              placeholder="Enter email"
              type="email"
              id="email-signup"
              name="email"
              value={formState.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label class="label" for="password-signup">Password:</label>
            <input
              className="form-input"
              placeholder="Enter password"
              type="password"
              id="password-signup"
              name="password"
              value={formState.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <button
              id="signup-submit"
              className="btn btn-primary sign-up-btn"
              type="submit"
              style={{ cursor: "pointer" }}
            >
              Sign Up
            </button>
          </div>
        </form>
      )}

      {error && (
        <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
      )}
    </div>
  );
}
