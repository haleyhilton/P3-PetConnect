import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_FILE } from "../../utils/mutations";
import { useParams, useNavigate } from "react-router-dom";
import "./style.css";

const FileUploader = (pros) => {
  const { petId } = useParams();
  const [fileToSave, setFileToSave] = useState({
    petId: petId,
    file: "",
  });
  const [files, setFiles] = useState([]);

  const [addFile, { error }] = useMutation(ADD_FILE);

  const handleFileSave = async (event) => {
    // event.preventDefault();
    // On form submit, perform mutation and pass in form data object as arguments
    // It is important that the object fields are match the defined parameters in `ADD_THOUGHT` mutation
    try {
      console.log(fileToSave, "here is my files");
      const { data } = addFile({
        variables: { ...fileToSave },
      });

      //   window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  function handleOpenWidget() {
    let myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dwwkixeof",
        uploadPreset: "ml_default",
        sources: ["local"],
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          setFiles((prev) => [
            ...prev,
            { url: result.info.url, public_id: result.info.public_id },
          ]);
          console.log("Done! Here is the image info: ", result.info);
          // Save image
          fileToSave.file = result.info.secure_url;
          // imageToSave.media = result.info.secure_url
        }
      }
    );
    // open widget
    myWidget.open();
  }
  console.log(fileToSave, "this is my file");
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="row">
        <h1>
          <span>
            <button className="btn btn-secondary" onClick={() => navigate(-1)}>
              {" "}
              <span>&lt;</span> Back{" "}
            </button>{" "}
            Upload Files
          </span>
        </h1>
        <div className="file-component">
        <div className="form-group">
          <button
            id="upload-widget"
            className="cloudinary-button wow-button"
            onClick={() => handleOpenWidget()}
          >
            Upload File
          </button>
        </div>
        <div className="form-group">
          <div className="preview-file">
            <h4>
              Preview Your File Here
            </h4>
            <div>
              
            </div>
          </div>
          <button className="btn btn-primary" onClick={() => handleFileSave()}>
            Confirm File
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default FileUploader;
