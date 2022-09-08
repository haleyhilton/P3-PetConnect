import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";

// import { useQuery } from '@apollo/client';
import { QUERY_ONE_USER } from '../../utils/queries';

export default function Header(props) {

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const { loading, data } = useQuery(QUERY_ONE_USER, {
    variables: { profileId: Auth.getUser().data._id },
  });
   
  const profile = data?.oneUser || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  
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
                Home
              </Link>
              <Link className="nav-link py-3 px-0 px-lg-3 rounded" to="/search">
                Browse
              </Link>
              <Link
                className="nav-link py-3 px-0 px-lg-3 rounded"
                to="/contact"
              >
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
                            src="www.amazon.com"
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
                        <Link to="/chat">
                          <a href="#">Chat</a>
                        </Link>
                        <Link to="/messages">
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

                  {/* <div className="dropdown">
                    <button className="dropbtn">
                      <a href="/login#login">
                        <img
                          src="https://picsum.photos/200/300?random=1"
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
                      <Link to="/chat">
                        <a href="#">Chat</a>
                      </Link>
                      <Link to="/messages">
                        <a href="#">Messages</a>
                      </Link>
                      <Link to="/">
                        <a href="#" onClick={logout}>
                          Logout
                        </a>
                      </Link>
                    </div>
                  </div> */}

                </div>
              ) : (
                <>
                  <Link
                    className="nav-link py-3 px-0 px-lg-3 rounded"
                    to="/login"
                  >
                    Login
                  </Link>
                  <Link
                    className="nav-link py-3 px-0 px-lg-3 rounded"
                    to="/signup"
                  >
                    Signup
                  </Link>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>

      <header className="masthead text-white text-center">
        <div className="container d-flex align-items-center flex-column">
          <h1 className="masthead-heading text-uppercase mb-0">
            {" "}
            {props.headerText}
          </h1>
          <h3 className="masthead-subheading  mb-0"> {props.subHeaderText}</h3>

          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-paw fa-beat"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>
        </div>
      </header>
    </div>
  );
}
