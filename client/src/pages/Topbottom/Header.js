import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import blankPicture from "../../images/blankprofile.PNG"
import { QUERY_ONE_USER } from '../../utils/queries';


export default function Header(props) {

  
  const navigate = useNavigate();
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
    navigate.push(`/`);
  };

 
  return (
    <div>
      <nav
        className="navbar navbar-custom navbar-expand-lg text-uppercase fixed-top"
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand" href="/">
            PETCONNECT
          </a>
          <button
            className="navbar-toggler text-uppercase font-weight-bold text-white rounded"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <Link className="nav-link py-3 px-0 px-lg-3 rounded" to="/">
              <i class="fa-solid fa-house icon"></i><br />
                Home
              </Link>
              <Link className="nav-link py-3 px-0 px-lg-3 rounded" to="/search">
              <i class="fa-solid fa-magnifying-glass icon"></i><br />
                Browse
              </Link>
              <Link className="nav-link py-3 px-0 px-lg-3 rounded" to="/social">
              <i class="fa-solid fa-user-group icon"></i><br />
                Social
              </Link>
              <Link
                className="nav-link py-3 px-0 px-lg-3 rounded"
                to="/contact"
              >
                <i class="fa-regular fa-address-card icon"></i><br />
                Contact
              </Link>
              {Auth.loggedIn() ? (
                <div>
                  <li className="nav-item mx-0 mx-lg-1">
                    <div className="dropdown">
                      <button className="dropbtn">
                        <a>
                          <img
                            id="profile-image"
                            src={Auth.getUser().data.profilePicture ? Auth.getUser().data.profilePicture : blankPicture}
                            alt="Avatar"
                            className="avatar"
                          />
                        </a>
                      </button>
                      <div className="dropdown-content">
                        <Link to={`/profiles/${Auth.getUser().data._id}`}>
                          <a href="#">Profile</a>
                        </Link>
                        <Link to="/settings">
                          <a href="#">Settings</a>
                        </Link>
                        <Link to={`/messages/${Auth.getUser().data._id}`}>
                          <a href="#">Messages</a>
                        </Link>
                        <Link to="/">
                          <a href="#" onClick={logout}>
                            Logout
                          </a>
                        </Link>
                      </div>
                    </div>
                  </li>
                </div>
              ) : (
                <>
                     
                  <Link
                    className="nav-link py-3 px-0 px-lg-3 rounded"
                    to="/login"
                  >
                    <i class="fa-solid fa-right-to-bracket icon"></i><br />
                    Login
                  </Link>
                  <Link
                    className="nav-link py-3 px-0 px-lg-3 rounded"
                    to="/signup"
                  >
                    <i class="fa-solid fa-plus icon"></i><br />
                    Signup
                  </Link>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}


