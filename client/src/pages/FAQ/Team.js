import React, { useEffect, useState } from 'react'
import './style.css'
import drios from '../../images/drios.jpg'
import dryan from '../../images/dryan.jpg'
import haley from '../../images/hzito.jpg'
import josh from '../../images/jjankowski.jpg'
import nathan from '../../images/nstein.jpeg'
import {createMastText} from '../../utils/helpers'
import Masthead from '../../components/Masthead'



export default function Team() {
  const [text,setText] = useState();
    
    useEffect(() => {
        const data = createMastText();

        setText(data);

        console.log("*****",data);
    },[]);

    return (
    <div>
      <Masthead {...createMastText()}/> 
    <div className='container mx-auto mt-5 col-md-10 mt-100'>

      <div className="row justify-content-center pb-5">
        <div className="card team-card col-md-3 mt-100">
            <div className="card-content">
                <div className="card-bod p-0">
                <div className="profile"> <img src={drios} /> </div>

                    <div className="card-name mt-4"> David Rios<br /> <small>Chat Champion</small> </div>
                    <div className="card-sub">
                        <p> <small className="text-muted"> I expected nothing less than perfect for the team of experts. They are the best team ever! </small> </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="card team-card col-md-3 mt-100">
            <div className="card-content">
                <div className="card-bod p-0">
                <div className="profile"> <img src={dryan} /> </div>
                    <div className="card-name mt-4"> David Ryan<br /> <small>Backend Wizard</small> </div>
                    <div className="card-sub">
                        <p> <small className="text-muted"> I really enjoyed working with them, they are a group of Professionals and they know what they're doing </small> </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="card team-card col-md-3 mt-100">
            <div className="card-content">
                <div className="card-bod p-0">
                <div className="profile"> <img src={haley} /> </div>
                    <div className="card-name mt-4"> Haley Hilton Zito<br /> <small>UX / UI Guy</small> </div>
                    <div className="card-sub">
                        <p> <small className="text-muted"> I like to make things pretty and practical (and most of all, fun!) </small> </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="card team-card col-md-3 mt-100">
            <div className="card-content">
                <div className="card-bod p-0">
                <div className="profile"> <img src={josh} /> </div>
                    <div className="card-name mt-4"> Josh Jankowski<br /> <small>Mutation Master</small> </div>
                    <div className="card-sub">
                        <p> <small className="text-muted"> People are people and dogs are dogs and it is what it is </small> </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="card team-card col-md-3 mt-100">
            <div className="card-content">
                <div className="card-bod p-0">
                <div className="profile"> <img src={nathan} /> </div>
                    <div className="card-name mt-4"> Nathan Stein<br /> <small>Backend badass</small> </div>
                    <div className="card-sub">
                        <p> <small className="text-muted"> I once ate a sandwich at Jersey Mikes and the cashier looked like Patrick</small> </p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
        </div>


   




  
        
    )};