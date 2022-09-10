import React from 'react'
import { useLazyQuery } from '@apollo/client';
import heart from '../../../images/like.png'
import { QUERY_ONE_USER_BY_PET_ID } from '../../../utils/queries';

export default function SearchCard(props) {
  const [getOwner] = useLazyQuery(QUERY_ONE_USER_BY_PET_ID, { variables: { petId: props.pet._id } });

  //makeshift link to the dog owner's profile page
  async function linkHandler(event) {
    event.preventDefault();
  
    const owner = await getOwner();
    if (owner) {
      window.location.replace(`/external-profiles/${owner.data.oneUserByPetId._id}`);
    }
  }

    return (

    <div class="col-xl-3 col-md-6 mb-4" onClick={linkHandler}>
      <div class="card petCard-border shadow">
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

                            
                              
                           