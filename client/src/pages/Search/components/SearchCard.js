import React from 'react'
import heart from '../../../images/like.png'



export default function SearchCard(props) {
  console.log(props, "yes props")
    return (

    <div class="col-xl-3 col-md-6 mb-4">
      <div class="card border-0 shadow">
        <img src={props.pet.media[0].url} width="20%" height="300px" class="card-img-top" alt="..."></img>
        {/* <favorite-btn class="petCard-favoriteBtn" pet-name="#" pet-id="#" pet-index="#" search-result=""> */}
        <input type="image" className="heart-like" src={heart} />          
    
    {/* </favorite-btn> */}
        <div class="card-body text-center petCard">
          <h5 class="card-title mb-0">{props.pet.name}</h5>
          <br /> <br />
          
          <div class="card-text">
        <span> {props.pet.age}</span> |
          {/* <i className="fa-solid fa-circle-small"></i>           */}
          <span class="capital"> {props.pet.breed}</span> |
          {/* <i className="fa-solid fa-circle-small"></i>           */}
          <span class="capital"> {props.pet.sex}</span>
          </div>
          <div class="card-text">
          <span>{props.pet.for_sale}</span>
          <br /> <br />
          <div class="card-text text-black-50 card-description">{props.pet.description}</div>


          </div>
        </div>
      </div>        
    </div>  

    );}

                            
                              
                           