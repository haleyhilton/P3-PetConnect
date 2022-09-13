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
      console.log(owner);
      window.location.replace(`/external-profiles/${owner.data.oneUserByPetId._id}`);
    }
  }

    return (

    <div className="col-xl-3 col-md-6 mb-4" onClick={linkHandler}>
      <div className="card petCard-border shadow pointer-cursor">
        <img src={typeof props.pet.media === "array" ? props.pet.media[0].url : props.pet.media.url} width="20%" height="300px" className="card-img-top" alt="..."></img>
        {/* <favorite-btn className="petCard-favoriteBtn" pet-name="#" pet-id="#" pet-index="#" search-result=""> */}
        <input type="image" className="heart-like" src={heart} />          
    
    {/* </favorite-btn> */}
        <div className="card-body text-center petCard">
          <h5 className="card-title mb-0">{props.pet.name}</h5>
          <br /> <br />
          
          <div className="card-text">
        <span> {props.pet.age}</span> |
          <span className="capital"> {props.pet.breed}</span> |
          <span className="capital"> {props.pet.sex}</span>
          </div>
          <div className="card-text">
          <span>{props.pet.for_sale}</span>
          <br /> <br />
          <div className="card-text text-black-50 card-description">{props.pet.description}</div>


          </div>
        </div>
      </div>        
    </div>  

  );
}

                            
                              
                           