import React from 'react'
import placeholder from "../../../images/results.PNG";

export default function DogCard(props) {
    const [isOpen, setIsOpen] = React.useState(true);
    const handleOpen = (event) => {
        // toggle vis
        setIsOpen((current) => !current);
    };

    return (

    <div>

        <div key={props.dog._id} className="grid-item" style={{ backgroundImage: `url(${props.dog.media[0] ? props.dog.media[0].url : placeholder})` }} onClick={() => {
            handleOpen()
            }}
        ></div>
        <div
            id="myModal"
            className="modal"
            style={{ display: isOpen ? "none" : "block" }}
          >
            <div className="modal-content">
              <span className="close" onClick={handleOpen}>
                &times;
              </span>
              <div className="modal-inner-wrapper">
                <div className="modal-inner-image" style={{ backgroundImage: `url(${props.dog.media[0] ? props.dog.media[0].url : placeholder})` }}>

                </div>
                <p className="dog-stats">Name: {props.dog.name}</p>
                <p className="dog-stats">Age: {props.dog.age}</p>
                <p className="dog-stats">Breed: {props.dog.breed}</p>
                <p className="dog-stats">Sex: {props.dog.sex}</p>
                <p className="dog-stats">Size: {props.dog.size}</p>
                <p className="dog-stats">Color: {props.dog.color}</p>
                <p className="dog-stats">Description: {props.dog.description}</p>
              </div>
            </div>
          </div>
    </div>  

  );
}
