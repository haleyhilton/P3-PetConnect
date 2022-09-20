import React from 'react'
import placeholder from '../../../images/results.PNG'
import { Link } from "react-router-dom";
import { useMutation } from '@apollo/client';


export default function SocialCard(props) {
    const [isOpen, setIsOpen] = React.useState(true);
    const [addLike] = useMutation(ADD_LIKE, {
        variables: {
            proileId: Auth.getUser().data._id,
            petId: props.pet._id
        }
    });


    const handleOpen = async (event) => {
        // toggle vis
        setIsOpen((current) => !current);
    };



    const handleLikeClick = (event) => {
        // 👇️ toggle isActive state on click
        addLike();
        event.currentTarget.classList.toggle('liked')
    };



    return (
        <div>
            <div className="top-box"><p className="dog-name">{props.pet.name}</p></div>
            <div key={props.pet._id} className="box" style={{ backgroundImage: `url(${props.pet.media[0] ? props.pet.media[0].url : placeholder})` }} onClick={handleOpen}></div>
            <div className="smallerbox" >
                <button className="button button-like button-move" onClick={handleLikeClick}>
                    <i className="fa fa-heart"></i>

                </button>

                <div><textarea placeholder="Leave Comment" className='comment'></textarea></div>
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
    )
}