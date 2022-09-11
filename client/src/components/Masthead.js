import React from 'react'



export default function Masthead (props) {

    return (
        <header className="masthead text-white text-center">
        <div className="container d-flex align-items-center flex-column">
          <h1 className="masthead-heading text-uppercase mb-0">
            {" "}
            {props.headerText}
          </h1>
          <h3 className="masthead-subheading  mb-0"> {props.subHeaderText}</h3>

          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-paw fa-beat"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>
        </div>
      </header>

    )

}
