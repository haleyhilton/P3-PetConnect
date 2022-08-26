import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_MATCHUPS } from '../utils/queries';
import { TypeOrFieldNameRegExp } from '@apollo/client/cache/inmemory/helpers';

const Cloudinary = () => {
    const styleImageContainer = {
        position: 'relative',
        width: '300px',
        height: '300px',
        margin: '20px',
    }

    const imageStyle = {
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

    const [images, setImages] = useState([]);
    const [imageToRemove, setImageToRemove] = useState(null);

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
              }
            }
        );
        // open widget
        myWidget.open();
    }

    return (
    <div className="Cloudinary">
        <button id="upload-widget" className="cloudinary-button" onClick={()=> handleOpenWidget()}>
            Upload
        </button>
        <div className="images-preview-container" style={imagePreviewContainer}>
            {/* Show Pictures*/}
            {images.map((image) => (
                <div className="image-preview" style={styleImageContainer}>
                    <img src={image.url} style={imageStyle}/>
                    {imageToRemove != image.public_id && <i className="fa fa-times-circle close-icon" style={closeIcon} onClick={() => handleRemoveImg(image)}></i>}
                </div>
            )
            )}
        </div>
    </div>
    );
}

export default Cloudinary;
