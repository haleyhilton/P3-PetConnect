import React from 'react'
import './style.css'
import Modal from '../Modal/Modal'



export default function Profile() {

const canine={
    name: 'Ronald',
    description: 'An old macdonald boy',
}


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


<Modal name={canine.name} description={canine.description}/>
                <div class="grid-container">
                    <div class="grid-item">Momo</div>
                    <div class="grid-item">Sokka</div>
                    <div class="grid-item">Katara</div>
                    <div class="grid-item">Aang</div>
                    <div class="grid-item">Toph</div>
                    <div class="grid-item">Zuko</div>
                    <div class="grid-item">Azula</div>
                    <div class="grid-item">Appa</div>
                    <div class="grid-item">Iroh</div>
                </div>
            </div>



        </div>

    )
}
