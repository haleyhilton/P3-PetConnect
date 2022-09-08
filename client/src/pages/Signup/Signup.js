import React, { useState } from "react";
import { Link } from 'react-router-dom';
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
      navigate.push("/profile");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <h2 class="signupH2">SIGN-UP</h2>

      <p>What Arf you waiting for?</p>

      <div class="divider-custom">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon">
          <i class="fas fa-paw fa-beat"></i>
        </div>
        <div class="divider-custom-line"></div>
      </div>
      {data ? (
        <p>
          Success! You may now head <Link to="/">back to the homepage.</Link>
        </p>
      ) : (
        <form class="form signup-form" onSubmit={handleFormSubmit}>
          {/* <div class="form-group">
          <label for="fn-signup">First Name:</label>
          <input class="form-input" type="text" id="fn-signup" name='first' value={formState.first} onChange={handleChange} />
        </div>
        <div class="form-group">
          <label for="ln-signup">Last Name:</label>
          <input class="form-input" type="text" id="ln-signup" name='last' value={formState.last} onChange={handleChange} />
        </div>
        <div class="form-group">
          <label for="dob-signup">Date of Birth:</label>
          <input class="form-input" type="text" id="dob-signup" name='dob' value={formState.dob} onChange={handleChange} />
        </div>
        <div class="form-group">
          <label for="zip-signup">Zip Code:</label>
          <input class="form-input" type="text" id="zip-signup" name='zipCode' value={formState.zipCode} onChange={handleChange} />
        </div> */}
          <div class="form-group">
            <label for="username-signup">Username:</label>
            <input
              class="form-input"
              placeholder="Enter username"
              type="text"
              id="username-signup"
              name="username"
              value={formState.username}
              onChange={handleChange}
            />
          </div>
          <div class="form-group">
            <label for="email-signup">Email:</label>
            <input
              class="form-input"
              placeholder="Enter email"
              type="email"
              id="email-signup"
              name="email"
              value={formState.email}
              onChange={handleChange}
            />
          </div>
          <div class="form-group">
            <label for="password-signup">Password:</label>
            <input
              class="form-input"
              placeholder="Enter password"
              type="password"
              id="password-signup"
              name="password"
              value={formState.password}
              onChange={handleChange}
            />
          </div>
          <div class="form-group">
            <button
              id="signup-submit"
              class="btn btn-primary"
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
