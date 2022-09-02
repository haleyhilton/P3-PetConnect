import React from 'react'
import './style.css'

export default function Modal(props) {
  return (
    <div>        
    <div id="myModal" class="modal">

        
        <div class="modal-content">
            <span class="close">&times;</span>
            <div class="modal-inner-wrapper">
                <div>{props.name}</div>
                <div class="modal-inner-image"></div>
                <div>{props.description}
                </div>

            </div>

        </div>

    </div></div>
  )
}
