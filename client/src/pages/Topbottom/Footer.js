import React from 'react'
import { Link } from 'react-router-dom';
import './style.css';

export default function Footer() {


  return (
    <div>

    <footer className="footer text-center">
        <div className="xyz">
            <div className="row">


                <div className="col-lg-4 contact-info">
                    <h4 className="text-uppercase mb-4">Follow us for more!</h4>
                    <a className="btn btn-outline-light btn-social mx-1" href="#!"><i
                            className="fab fa-fw fa-facebook-f"></i></a>
                    <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-twitter"></i></a>
                    <a className="btn btn-outline-light btn-social mx-1" href="#!"><i
                            className="fab fa-fw fa-linkedin-in"></i></a>
                </div>

                <div className="col-lg-4 mb-5 mb-lg-0">
                    <h4 className="text-uppercase mb-4">Contact</h4>
                    <p className="lead mb-0">
                        info@petconnect.com
                        <br />
                        800-867-5309
                    </p>
                </div>

                <div className="col-lg-4">
                    <h4 className="text-uppercase mb-4">Extras</h4>
                    <p className="lead mb-0">
                        <Link id="contact-info" to="/about">Our Story</Link> <br/>
                        <Link id="contact-info" to="/team">Meet the Team</Link> <br/>
                        <Link id="contact-info" to="/faq">FAQ</Link> <br/> 
                        <Link id="contact-info" to="/blog">Blog</Link> <br/>

                    </p>
                </div>
            </div>
        </div>
    </footer>

    <div className="copyright py-4 text-center text-white">
        <div className="xyz"><small>Copyright &copy; PetConnect 2022</small></div>
    </div>
    </div>
  )
}
