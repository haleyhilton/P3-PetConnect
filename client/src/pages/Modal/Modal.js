import React from 'react'
import { useState } from 'react'
import { getCurrentUrl } from 'swup/lib/helpers';
import './style.css'

export default function Modal(props) {
const [isOpen, setIsOpen] = useState(true);


const handleOpen = event => {
    // toggle vis
    setIsOpen(current => !current)
};



  return (
    <div>        
    <div id="myModal" class="modal" style={{display: isOpen ? 'none' : 'block'}}>

        
        <div class="modal-content">
            <span class="close" onClick={handleOpen}>&times;</span>
            <div class="modal-inner-wrapper">
                <div>{props.name}</div>
                <div class="modal-inner-image"></div>
                <div>{props.description}
                </div>

            </div>

        </div>

    </div>
    </div>
  )
}
