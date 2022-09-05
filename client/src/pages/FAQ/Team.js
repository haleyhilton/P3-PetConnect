import React from 'react'
import './style.css'
import man from '../../images/man-placeholder.png'
import woman from '../../images/woman-placeholder.jpg'



export default function Team() {
    return (

<div class="container">
  <div class="row">
    <div class="col-sm">
    <img class="img-fluid" src={man} alt="David Rios" />
    </div>
    <div class="col-sm">
    David Rios
    </div>
    </div>

    <div class="row">
    <div class="col-sm">
    <img class="img-fluid" src={man} alt="David Ryan" />
    </div>
    <div class="col-sm">
    David Ryan
    </div>
    </div>

    <div class="row">
    <div class="col-sm">
    <img class="img-fluid" src={woman} alt="Haley Hilton Zito" />
    </div>
    <div class="col-sm">
    Haley Hilton Zito
    </div>
    </div>
    
    <div class="row">
    <div class="col-sm">
    <img class="img-fluid" src={man} alt="Josh Jankowski" />
    </div>
    <div class="col-sm">
    Josh Jankowski
    </div>
    </div>
    
    <div class="row">
    <div class="col-sm">
    <img class="img-fluid" src={man} alt="Nathan Stein" />
    </div>
    <div class="col-sm">
    Nathan Stein
    </div>
    </div>

    </div>


  
        
    )};