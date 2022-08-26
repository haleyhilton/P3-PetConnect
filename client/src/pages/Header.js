import React from 'react'

export default function Header() {
  return (
    <div>
        

<nav class="navbar navbar-custom navbar-expand-lg text-uppercase fixed-top" id="mainNav">
    <div class="container">
        <a class="navbar-brand" href="/">PETCONNECT</a>
        <button class="navbar-toggler text-uppercase font-weight-bold text-white rounded" type="button"
            data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive"
            aria-expanded="false" aria-label="Toggle navigation">
            <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="/">Home</a>
                </li>
                <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded"
                        href="/loader">Browse</a></li>
                <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded"
                        href="#contact">Contact</a></li>

                <li class="nav-item mx-0 mx-lg-1"><button id="logout">Logout</button></li>
                <li class="nav-item mx-0 mx-lg-1"> 
                    <div class="dropdown">
                     <button class="dropbtn"><a>
                        <img id="profile-image" src="./media/womanwithdog.PNG" alt="Avatar" class="avatar"/></a></button>
                     <div class="dropdown-content">
                     <a href="/profile">My Profile</a>
                     <a href="#">Settings</a>
                     <a id="logout" href="#">logout</a>
                    </div>
                  </div>
                </li>


                  
                <div class="dropdown">
                    <button class="dropbtn"><a href="/login#login"><img src="https://picsum.photos/200/300?random=1" alt="Avatar" class="avatar"/></a></button>
                    <div class="dropdown-content">
                    <a href="#">My Profile</a>
                    <a href="#">Settings</a>
                    <a href="#">logout</a>
                   </div>
                </div>
                
                <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded"
                        href="/login#login">Login</a></li>
                
            </ul>
        </div>
    </div>
</nav>

<header class="masthead text-white text-center">
    <div class="container d-flex align-items-center flex-column">

        
        
        <h1 class="masthead-heading text-uppercase mb-0">Welcome to PetConnect, !</h1>
        
        <h1 class="masthead-heading text-uppercase mb-0">Welcome to PetConnect</h1>
        

        
        <div class="divider-custom divider-light">
            <div class="divider-custom-line"></div>
            <div class="divider-custom-icon"><i class="fas fa-paw fa-beat"></i></div>
            <div class="divider-custom-line"></div>
        </div>
        
        <p class="masthead-subheading font-weight-light mb-0">Start the search for your new fur-ever friend</p>
        <form role="form">
<div class="input-group rounded">
  <a class="nav-link py-3 px-0 px-lg-3 rounded" href="/loader">Browse Dogs</a>
</div>
        </form>
        </div>
</header>
    </div>
  )
}
