import React, {useState} from 'react'
import './style.css'
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';
import {Link} from 'react-router-dom'


export default function Login(props) {


  
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);

    // update state based on form input changes
    const handleChange = (event) => {
      const { name, value } = event.target;

      setFormState({
        ...formState,
        [name]: value,
      });
    };

    // submit form
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      console.log(formState);
      try {
        const { data } = await login({
          variables: { ...formState },
        });

        Auth.login(data.login.token);
      } catch (e) {
        console.error(e);
      }

      // clear form values
      setFormState({
        email: '',
        password: '',
      });
    };







    return (
      <div>
        <div class="splitMenu-container" id="login">


          <div class="login-container">

            <h1 >Login to your account</h1>


            {/* Call the login states */}
            <form onSubmit={handleFormSubmit}>


              <input id="username-login" type="text" placeholder="Username" name="username" required onChange={handleChange} />
              <input id="password-login" type="text" placeholder="Password" name="password" required onChange={handleChange}/>
              <button id="login-submit" type="submit">Login</button>


            </form>


            <div class="fb-login-button" data-width="30" data-size="medium" data-button-type="login_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="true"></div>

          </div>


          <div class="signUp-container">

            <h1>New Here?</h1>
            <p>Well then you should join us obviously</p>

            
            <Link to="/Signup"><button id="signUpBtn" onClick={'/Signup'}>Sign Up</button></Link>

          </div>

        </div></div>
    )
  }

