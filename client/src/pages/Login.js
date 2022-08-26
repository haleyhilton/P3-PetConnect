import React from 'react'

export default function Login() {
  return (
    <div>
    <div class="splitMenu-container" id="login">

    
      <div class="login-container"> 
    
        <h1 >Login to your account</h1>
       <input id="username-login" type="text" placeholder="Username" name="username" required/>
       <input id="password-login" type="text" placeholder="Password" name="password" required/>
       <button id="login-submit" type="submit">Login</button>
    <div class="fb-login-button" data-width="30" data-size="medium" data-button-type="login_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="true"></div>
    
      </div>

    
      <div class="signUp-container"> 
    
      <h1>New Here?</h1>
      <p>Well then you should join us obviously</p>
      
      <button id="signUpBtn">Sign Up</button>
    
      </div>
    
    </div></div>
  )
}
