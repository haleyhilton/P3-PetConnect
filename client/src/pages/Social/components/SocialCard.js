import React from 'react'
import placeholder from '../../../images/results.PNG'


export default function SocialCard(props) {
    const [isOpen, setIsOpen] = React.useState(true);


    const handleOpen = async (event) => {
        // toggle vis
        setIsOpen((current) => !current);
    };



    const handleLikeClick = event => {
        // 👇️ toggle isActive state on click
        event.currentTarget.classList.toggle('liked')
    };



    return (
        <div>

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
                        <a href={'/external-profiles/' + props.pet.ownerId} className='dog-stats'>Owner: {props.pet.ownerName}</a>
                        <p className="dog-stats">Name: {props.pet.name}</p>
                        <p className="dog-stats">Age: {props.pet.age}</p>
                        <p className="dog-stats">Breed: {props.pet.breed}</p>
                        <p className="dog-stats">Sex: {props.pet.sex}</p>
                        <p className="dog-stats">Size: {props.pet.size}</p>
                        <p className="dog-stats">Color: {props.pet.color}</p>
                        <p className="dog-stats">Description: {props.pet.description}</p>

                    </div>
                </div>
            </div>
        </div>
    )
}