import React, { useState } from 'react'
import placeholder from '../../../images/results.PNG'
import { Link } from "react-router-dom";
import { useMutation } from '@apollo/client';
import Auth from '../../../utils/auth';
import { ADD_LIKE, REMOVE_LIKE } from '../../../utils/mutations';


export default function SocialCard(props) {
    const [isOpen, setIsOpen] = useState(true);
    const [liked, setLiked] = useState(props.pet.liked? props.pet.liked : false);
    let user = null;
    if (Auth.loggedIn()) {
        user = Auth.getUser().data._id;
    }
    const [addLike] = useMutation(ADD_LIKE, {
        variables: {
            profileId: user,
            petId: props.pet._id
        }
    });

    const [removeLike] = useMutation(REMOVE_LIKE, {
        variables: {
            profileId: user,
            petId: props.pet._id
        }
    });


    const handleOpen = async (event) => {
        // toggle vis
        setIsOpen((current) => !current);
    };



    const handleLikeClick = (event) => {
        // 👇️ toggle isActive state on click
        event.currentTarget.classList.toggle('liked');
        //check if already liked and update accordingly
        if (Auth.loggedIn()) { liked? removeLike() : addLike() };
        setLiked(liked? false : true);
    };

    const doNothing = () => {};


    return (
        <div>
            <div className="social-container2">
            {/* <div className="top-box"><p className="dog-name">{props.pet.name}</p></div> */}
            <div key={props.pet._id} className="box" style={{ backgroundImage: `url(${props.pet.media[0] ? props.pet.media[0].url : placeholder})` }} onClick={handleOpen}></div>
            <div className="smallerbox" >
                <button className={liked? "button button-like button-move liked" : "button button-like button-move"} onClick={(event) => {Auth.loggedIn() ? handleLikeClick(event) : doNothing()}}>
                    <i className="fa fa-heart"></i>

                </button>

                <div><textarea placeholder="Leave Comment" className='comment'></textarea></div>
            </div>
            </div>
            <div id="myModal" className="modal" style={{ display: isOpen ? "none" : "block" }}>
                <div className="modal-content2">
                    <span className="close" onClick={handleOpen}>&times;</span>
                    <div className="modal-inner-wrapper2">
                        <div className="modal-inner-dog2" style={{ backgroundImage: `url(${props.pet.media[0] ? props.pet.media[0].url : placeholder})` }}></div>
                        <div className="modal-inner-text2">
                        <Link to={'/external-profiles/' + props.pet.ownerId} className='dog-stats owner-stat2'>Owner: {props.pet.ownerName}</Link><br/>
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