import React from 'react'

export default function Signup() {
  return (
    <div>
            <h2 class="signupH2">SIGN-UP</h2>

<p>What Arf you waiting for?</p>

<div class="divider-custom">
            <div class="divider-custom-line"></div>
            <div class="divider-custom-icon"><i class="fas fa-paw fa-beat"></i></div>
            <div class="divider-custom-line"></div>
        </div>


<form class="form signup-form">
  <div class="form-group">
    <label for="fn-signup">First Name:</label>
    <input class="form-input" type="text" id="fn-signup" />
  </div>
  <div class="form-group">
    <label for="ln-signup">Last Name:</label>
    <input class="form-input" type="text" id="ln-signup" />
  </div>
  <div class="form-group">
    <label for="dob-signup">Date of Birth:</label>
    <input class="form-input" type="text" id="dob-signup" value="YYYY-MM-DD" />
  </div>
  <div class="form-group">
    <label for="zip-signup">Zip Code:</label>
    <input class="form-input" type="text" id="zip-signup" />
  </div>
  <div class="form-group">
    <label for="email-signup">Email:</label>
    <input class="form-input" type="text" id="email-signup" />
  </div>
  <div class="form-group">
    <label for="username-signup">Username:</label>
    <input class="form-input" type="text" id="username-signup" />
  </div>
  <div class="form-group">
    <label for="password-signup">Password:</label>
    <input class="form-input" type="password" id="password-signup" />
  </div>
  <div class="form-group">
    <button id="signup-submit" class="btn btn-primary" type="submit">Sign Up</button>
  </div>
</form>
</div>

  )
}
