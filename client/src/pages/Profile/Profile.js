import React from 'react'
import './style.css'
import Modal from '../Modal/Modal'
import { useState } from 'react'
import Griditem from '../Griditem/Griditem'

export default function Profile(props) {

    const canine = {
        name: 'Ronalds',
        description: 'An old macdonald boy',
    }
    const [isOpen, setIsOpen] = useState(true);


    const handleOpen = event => {
        // toggle vis
        setIsOpen(current => !current)
    };

    return (
        <div>
            <div class="hero-image">
                <div class="profile-pic">
                </div>
            </div>


            <div class="edit"><button>Edit</button></div>
            <div class="details">

                <div>Name</div>
                <div>Buyer/Seller</div>
                <div>Rating: ⭐️⭐️⭐️⭐️⭐️</div>
                <div class="about-me-section">Hi! I am a dog breeder in the San Diego Area</div>
                <div class="message">
                    <button>Message</button>
                </div>


                <div class="posts">
                    <button>Post</button>

                    Append children here. Visibile if id=id
                </div>
            </div>

            <div class="titlewrapper">
                <div>Posts</div>
            </div>
            <div class="titlewrapper">
                <div>Dogs</div>
            </div>
            <div class="wrapattack">



<Griditem/>







                <div id="myModal" class="modal" style={{ display: isOpen ? 'none' : 'block' }}>
                    <div class="modal-content">
                        <span class="close" onClick={handleOpen}>&times;</span>
                        <div class="modal-inner-wrapper">
                            <div>{canine.name}</div>
                            <div class="modal-inner-image"></div>
                            <div>{canine.description}
                            </div>
                        </div>
                    </div>
                </div>






                <div class="grid-container">
                    <div class="grid-item" onClick={handleOpen}>Momo</div>
                    <div class="grid-item" onClick={handleOpen}>Sokka</div>
                    <div class="grid-item" onClick={handleOpen}>Katara</div>
                    <div class="grid-item" onClick={handleOpen}>Aang</div>
                    <div class="grid-item" onClick={handleOpen}>Toph</div>
                    <div class="grid-item" onClick={handleOpen}>Zuko</div>
                    <div class="grid-item" onClick={handleOpen}>Azula</div>
                    <div class="grid-item" onClick={handleOpen}>Appa</div>
                    <div class="grid-item" onClick={handleOpen}>Iroh</div>
                </div>
            </div>



        </div>

    )
}
