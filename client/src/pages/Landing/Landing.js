import React, { useEffect, useState } from 'react'
import beagle from '../../images/beagle.png'
import bulldog from '../../images/bulldog.png'
import poodle from '../../images/poodle.png'
import german from '../../images/german-s.png'
import corgi from '../../images/corgi.png'
import rotty from '../../images/rotty.png'
import frenchy from '../../images/frenchy.png'
import golden from '../../images/golden.png'
import lab from '../../images/lab.png'
import './style.css'
import {createMastText} from '../../utils/helpers'
import Masthead from '../../components/Masthead'


export default function Landing() {
    const [text,setText] = useState();
    
    useEffect(() => {
        const data = createMastText();

        setText(data);

        console.log("*****",data);
    },[]);

    return (
        <div>
            <Masthead {...createMastText()}/>
             
            <section className="page-section search" id="search">
                <div className="container">

                    {/* <h2 className="page-section-heading text-center texwt-uppercase text-secondary mb-0" id="topPage">Top Breeds</h2>

                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-paw fa-beat"></i></div>
                        <div className="divider-custom-line"></div>
                    </div> */}

            
                    <div className="row justify-content-center">
                        <div className="x">
                            <div className="search-item mx-auto"
                                data-toggle="modal"
                                data-target="#{{icon.modal}}">
                                <div
                                    className="search-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="search-item-caption-content text-center text-white">
                                        
                                        <a className="nav-link py-3 px-0 px-lg-3 rounded breed-link" href="/results/all-{{lowerIt icon.name}}-all-all-all"></a></div>
                                </div>
                                <img className="img-fluid" src={corgi} alt="corgi icon" />
                                <img className="img-fluid" src={frenchy} alt="frenchy icon" />
                                <img className="img-fluid" src={poodle} alt="poodle icon" />

                                <img className="img-fluid" src={bulldog} alt="bulldog icon" />
                                <img className="img-fluid" src={german} alt="germans icon" />
                                <img className="img-fluid" src={lab} alt="lab icon" />

                                <img className="img-fluid" src={golden} alt="golden icon" />
                                <img className="img-fluid" src={beagle} alt="beagle icon" />
                                <img className="img-fluid" src={rotty} alt="rotty icon" />





                            </div>
                        </div>
                 
                    </div>
                </div>
            </section>
        </div>

    )
}
