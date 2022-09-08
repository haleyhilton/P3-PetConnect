import React from 'react'
import './style.css'
import man from '../../images/man-placeholder.png'
import woman from '../../images/woman-placeholder.jpg'



export default function Team() {
    return (

<div className="container">
  <div className="row">
    <div className="col-sm">
    <img className="img-fluid" src={man} alt="David Rios" />
    </div>
    <div className="col-sm">
    David Rios
    </div>
    </div>

    <div className="row">
    <div className="col-sm">
    <img className="img-fluid" src={man} alt="David Ryan" />
    </div>
    <div className="col-sm">
    David Ryan
    </div>
    </div>

    <div className="row">
    <div className="col-sm">
    <img className="img-fluid" src={woman} alt="Haley Hilton Zito" />
    </div>
    <div className="col-sm">
    Haley Hilton Zito
    </div>
    </div>
    
    <div className="row">
    <div className="col-sm">
    <img className="img-fluid" src={man} alt="Josh Jankowski" />
    </div>
    <div className="col-sm">
    Josh Jankowski
    </div>
    </div>
    
    <div className="row">
    <div className="col-sm">
    <img className="img-fluid" src={man} alt="Nathan Stein" />
    </div>
    <div className="col-sm">
    Nathan Stein
    </div>
    </div>

    </div>


  
        
    )};