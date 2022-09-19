import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { ADD_PET_PICTURE } from '../../utils/mutations'
// import "./style.css";

const PetCloudinary = (pros) => {
    const { petId } = useParams();
    const [images, setImages] = useState([]);
    const [imageToRemove, setImageToRemove] = useState(null);
    console.log(petId, "this is pet id")
    const [imageToSave, setImageToSave] = useState({
        petId: petId,
        media: "",
    });

    const styleImageContainer = {
        position: 'relative',
        width: '300px',
        height: '300px',
        margin: '20px',
    }

    const imageStyleNew = {
        width: '300px',
        height: '300px',
        objectFit: 'cover',
    }

    const imagePreviewContainer = {
        display: 'flex',
        justifyContent: 'left',
    }

    const closeIcon = {
        position: 'absolute',
        top: '0',
        left: '0',
        fontSize: '20px',        
    }

    const [addPhoto, { error }] = useMutation(ADD_PET_PICTURE);

    const handlePhotoSave = async (event) => {
        // event.preventDefault();    
        // On form submit, perform mutation and pass in form data object as arguments
        // It is important that the object fields are match the defined parameters in `ADD_THOUGHT` mutation
        try {
          const { data } = addPhoto({
            variables: { ...imageToSave },
          });
    
          window.location.reload();
        } catch (err) {
          console.error(err);
        }
      };

    function handleRemoveImg(imgObj){
        setImageToRemove(imgObj.public_id);
        axios.delete(`http://localhost:3001/${imgObj.public_id}`)
        .then(()=> {
            setImageToRemove(null);
            setImages((prev) => prev.filter( (img) => img.public_id !== imgObj.public_id))
        })
        .catch((e) => console.log(e))

    }

    function handleOpenWidget(){
        let myWidget = window.cloudinary.createUploadWidget(
        {
            cloudName: 'dwwkixeof', 
            uploadPreset: 'ml_default',
        }, 
        (error, result) => { 
              if (!error && result && result.event === "success") { 
                setImages((prev) => [...prev, {url: result.info.url, public_id: result.info.public_id}])
                console.log('Done! Here is the image info: ', result.info); 
                // Save image
                imageToSave.media = result.info.secure_url
              }
            }
        );
        // open widget
        myWidget.open();
    }

    return (



    <div className="main-component">
        <div>

        <h2>Preview Image</h2>
        <div className="images-preview-container" style={imagePreviewContainer}>
            {/* Show Pictures*/}
            {images.map((image) => (
                <div className="image-preview" style={styleImageContainer}>
                    <img src={image.url} style={imageStyleNew}/>
                    {imageToRemove != image.public_id && <i className="fa fa-times-circle close-icon" style={closeIcon} onClick={() => handleRemoveImg(image)}></i>}
                </div>
            )
            )}
        </div>
        <br />
        <button id="upload-widget" className="cloudinary-button" onClick={()=> handleOpenWidget()}>
            Upload New Photo
        </button>
        <button id="submit" className="cloudinary-button" onClick={()=> handlePhotoSave()}>
            Submit
        </button>
        </div>
    </div>
    );
}

export default PetCloudinary;
