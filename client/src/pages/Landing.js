import React from 'react'
import '../styles/Header.css'

export default function Landing() {
    return (
        <div>
             
            <section class="page-section search" id="search">
                <div class="container">

                    <h2 class="page-section-heading text-center texwt-uppercase text-secondary mb-0" id="topPage">Top Breeds</h2>

                    <div class="divider-custom">
                        <div class="divider-custom-line"></div>
                        <div class="divider-custom-icon"><i class="fas fa-paw fa-beat"></i></div>
                        <div class="divider-custom-line"></div>
                    </div>


                    <div class="row justify-content-center">
                        <div class="col-md-6 col-lg-4 mb-5">
                            <div class="search-item mx-auto"
                                data-toggle="modal"
                                data-target="#modal1">
                                <div
                                    class="search-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div class="search-item-caption-content text-center text-white">
                                        <p id="breed-main">Beagle</p></div>
                                </div>
                                <img class="img-fluid" src="/images/beagle.png" alt="beagle icon" />
                                <img class="img-fluid" src="/images/bulldog.png" alt="bulldog icon" />
                                <img class="img-fluid" src="/images/poodle.png" alt="poodle icon" />
                                

                            </div>
                        </div>

                        <div class="col-md-6 col-lg-4 mb-5">
                            <div class="search-item mx-auto"
                                data-toggle="modal"
                                data-target="#{{icon.modal}}">
                                <div
                                    class="search-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div class="search-item-caption-content text-center text-white">
                                        
                                        <a class="nav-link py-3 px-0 px-lg-3 rounded breed-link" href="/results/all-{{lowerIt icon.name}}-all-all-all"></a></div>
                                </div>
                                <img class="img-fluid" src="/images/german-s.png" alt="germans icon" />
                                <img class="img-fluid" src="/images/corgi.png" alt="corgi icon" />
                                <img class="img-fluid" src="/images/rotty.png" alt="rotty icon" />
                                





                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}
