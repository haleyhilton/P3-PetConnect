import React from 'react'
import placeholder from '../../../images/results.PNG'

export default function SocialCard(props) {
    const [isOpen, setIsOpen] = React.useState(true);

    const handleOpen = async (event) => {
        // toggle vis
        setIsOpen((current) => !current);
    };

    return (
        <div>
            <div key={props.pet._id} className="grid-item" style={{backgroundImage: `url(${props.pet.media[0]? props.pet.media[0].url : placeholder})`}} onClick={handleOpen}></div>
            <div id="myModal" className="modal" style={{ display: isOpen ? "none" : "block" }}>
                <div className="modal-content">
                    <span className="close" onClick={handleOpen}>&times;</span>
                    <div className="modal-inner-wrapper">
                        <div className="modal-inner-image" style={{backgroundImage: `url(${props.pet.media[0] ? props.pet.media[0].url : placeholder})`}}>
                            <a href={'/external-profiles/'+ props.pet.ownerId} className='dog-stats'>My Owner</a>
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
        </div>
    )
}