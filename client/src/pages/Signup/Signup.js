import React, { useState } from 'react'
import './style.css'
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';







export default function Signup() {

  const [formState, setFormState] = useState({
    first: '',
    last: '',
    dob:'',
    zipCode: '',
    
    email: '',
    username: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

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
        <div class="divider-custom-icon"><i class="fas fa-paw fa-beat"></i></div>
        <div class="divider-custom-line"></div>
      </div>


      <form class="form signup-form" onSubmit={handleFormSubmit}>
        <div class="form-group">
          <label for="fn-signup">First Name:</label>
          <input class="form-input" type="text" id="fn-signup" value={formState.first} onChange={handleChange} />
        </div>
        <div class="form-group">
          <label for="ln-signup">Last Name:</label>
          <input class="form-input" type="text" id="ln-signup" value={formState.last} onChange={handleChange} />
        </div>
        <div class="form-group">
          <label for="dob-signup">Date of Birth:</label>
          <input class="form-input" type="text" id="dob-signup" value={formState.dob} onChange={handleChange} />
        </div>
        <div class="form-group">
          <label for="zip-signup">Zip Code:</label>
          <input class="form-input" type="text" id="zip-signup" value={formState.zipCode} onChange={handleChange} />
        </div>
        <div class="form-group">
          <label for="email-signup">Email:</label>
          <input class="form-input" type="text" id="email-signup" value={formState.email}
            onChange={handleChange} />
        </div>
        <div class="form-group">
          <label for="username-signup">Username:</label>
          <input class="form-input" type="text" id="username-signup" value={formState.username} onChange={handleChange} />
        </div>
        <div class="form-group">
          <label for="password-signup">Password:</label>
          <input class="form-input" type="password" id="password-signup" value={formState.password}
            onChange={handleChange} />
        </div>
        <div class="form-group">
          <button id="signup-submit" class="btn btn-primary" type="submit">Sign Up</button>
        </div>
      </form>
    </div>

  )
}
