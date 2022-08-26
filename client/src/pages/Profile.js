import React from 'react'

export default function Profile() {
  return (
    <div>

    <div class="container">

    <h3 id="profile-name">Welcome, !</h3>
     <div class="profile-picture">
        <img id="picture" src="./media/womanwithdog.PNG"/>
     </div>
    
    
     <h3 id="profile-name">Welcome, !</h3>
     <div class="info-container">
      <h2 id="myInfo">My info</h2>
  
     <h6>Email: </h6>
     <h6>Zip Code: </h6>
     <h5 id="rating">Rating: ⭐️⭐️⭐️⭐️⭐️</h5>
     </div>
    

    
    <div class="newPostModal-container">
            <button id="newPostBtn">Add a Dog!</button>
          <div id="newPostModal" class="newPostModal">
             <div class="postModal-content">
                <span class="close">&times;</span>
                <h1 class="dg-header">New Dog Post!</h1>
                <div>
                  
                </div>
             </div>
          </div>
    </div>
    

     <div class="bio">
        <h1 id="bio-header">Bio</h1>
        <div id="bioInput">
          <p>UserBio</p>
        </div>
     </div>
    </div>
    
    

    <div class="userDog-container">
       <h1 class="userDog-title">My friends looking for a home</h1>
     <div class="dogs">
        <img class="dog-profile" src="#"/>
        <img class="dog-profile" src="https://placedog.net/300/300?id=148"/>
        <div class="dog-details">
           <p><strong>Name:</strong> </p> 
           <p><strong>Breed:</strong> </p> 
           <p><strong>Age:</strong> </p> 
           <p><strong>Size:</strong> </p> 
           <p><strong>Sex:</strong> </p> 
           <p><strong>Color:</strong> </p>  
           <p><strong>Description:</strong> </p> 
           <p>For Sale!!</p>
        <img class="dog-profile" src="https://placedog.net/300/300?id=148"/>
        <img class="dog-profile" src="https://placedog.net/300/300?id=14"/> 
        </div>
     </div>
    </div>

    <div>
    </div>
    
    <div id="contactBtn">
    <button>Contact</button>
    </div>
    </div>
  )
}
