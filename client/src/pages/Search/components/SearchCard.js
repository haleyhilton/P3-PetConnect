import React from 'react'
import { useLazyQuery } from '@apollo/client';
import heart from '../../../images/like.png'
import { QUERY_ONE_USER_BY_PET_ID } from '../../../utils/queries';
import blankPicture from "../../../images/blankprofile.PNG"
import { useParams, useNavigate, Link } from "react-router-dom";
import placeholder from '../../../images/results.PNG'
export default function SearchCard(props) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = React.useState(true);


  const handleOpen = async (event) => {
      // toggle vis
      setIsOpen((current) => !current);
  };



  const handleLikeClick = event => {
      // 👇️ toggle isActive state on click
      event.currentTarget.classList.toggle('liked')
  };
  const [getOwner] = useLazyQuery(QUERY_ONE_USER_BY_PET_ID, { variables: { petId: props.pet._id } });

  //makeshift link to the dog owner's profile page
  async function linkHandler(event) {
    event.preventDefault();
  
    const owner = await getOwner();
    if (owner) {
      console.log(owner);
      // window.location.replace(`/external-profiles/${owner.data.oneUserByPetId._id}`);
      navigate(`/external-profiles/${owner.data.oneUserByPetId._id}`)
    }
  }
  console.log(props, "pet media")
    const newPetMedia = [...props.pet.media]
    return (

    <div className="col-xl-3 col-md-6 mb-4" onClick={handleOpen}>
      <div className="card petCard-border shadow pointer-cursor">
        {/* <img src={typeof props.pet.media === "array" ? props.pet.media[0].url : props.pet.media.url} width="20%" height="300px" className="card-img-top" alt="..."></img> */}
        <img src={newPetMedia[0] ? newPetMedia[0].url : blankPicture} width="20%" height="300px" className="card-img-top" alt="..."></img>
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
      <div id="myModal" className="modal" style={{ display: isOpen ? "none" : "block" }}>
                <div className="modal-content">
                    <span className="close" onClick={handleOpen}>&times;</span>
                    <div className="modal-inner-wrapper">
                        <div className="modal-inner-image" style={{ backgroundImage: `url(${props.pet.media[0] ? props.pet.media[0].url : placeholder})` }}></div>
                        <div className="modal-inner-text">
                        <Link to={'/external-profiles/' + props.pet.ownerId} className='dog-stats owner-stat'>Owner: {props.pet.ownerName}</Link><br/>
                        <p className="dog-stats"> {props.pet.name}</p>
                        <p className="dog-stats">Age: {props.pet.age}</p>
                        <p className="dog-stats">Breed: {props.pet.breed}</p>
                        <p className="dog-stats">Sex: {props.pet.sex}</p>
                        <p className="dog-stats">Size: {props.pet.size}</p>
                        <p className="dog-stats">Color: {props.pet.color}</p>
                        <p className="dog-stats italic"><small> {props.pet.description}</small></p>
                        </div>
                    </div>
                </div>
            </div>        
    </div>  

  );
}

                            
                              
                           