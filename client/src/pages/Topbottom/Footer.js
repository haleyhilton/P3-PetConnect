import React from 'react'
import './style.css';


export default function Footer() {
  return (
    <div>

    <footer class="footer text-center">
        <div class="container">
            <div class="row">


                <div class="col-lg-4 mb-5 mb-lg-0">
                    <h4 class="text-uppercase mb-4">Follow us for more!</h4>
                    <a class="btn btn-outline-light btn-social mx-1" href="#!"><i
                            class="fab fa-fw fa-facebook-f"></i></a>
                    <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-twitter"></i></a>
                    <a class="btn btn-outline-light btn-social mx-1" href="#!"><i
                            class="fab fa-fw fa-linkedin-in"></i></a>
                </div>

                <div class="col-lg-4 mb-5 mb-lg-0">
                    <h4 class="text-uppercase mb-4">Contact</h4>
                    <p class="lead mb-0">
                        info@petconnect.com
                        <br />
                        800-867-5309
                    </p>
                </div>

                <div class="col-lg-4">
                    <h4 class="text-uppercase mb-4">About PETCONNECT</h4>
                    <p class="lead mb-0">
                        <a id="contact-info" href="#">FAQ</a> <br/>
                        <a id="contact-info" href="/about">About Petconnect</a> <br/> 
                        <a id="contact-info" href="#">Testimonials</a> <br/>

                    </p>
                </div>
            </div>
        </div>
    </footer>

    <div class="copyright py-4 text-center text-white">
        <div class="container"><small>Copyright &copy; PetConnect 2022</small></div>
    </div>
    </div>
  )
}
