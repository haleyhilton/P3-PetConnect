import React from 'react'
import './style.css'
import Modal from '../Modal/Modal'
import { useState } from 'react'
import Griditem from '../Griditem/Griditem'

export default function Profile(props) {





// This is for the individual dog modal
    const canine = {
        name: 'Ronalds',
        description: 'An old macdonald boy',
    }
    const [isOpen, setIsOpen] = useState(true);


    const handleOpen = event => {
        // toggle vis
        setIsOpen(current => !current)
    };






// This is for the posts

    // OPEN AND CLOSE
    const [isPostOpen, setIsPostOpen] = useState(true);


    const handlePostOpen = event => {
        // toggle vis
        setIsPostOpen(current => !current)
    };


    // SET VALUE
    const [name, setName] = useState('')

    const [age, setAge] = useState('')

    const [breed, setBreed] = useState('')

    const [description, setDescription] = useState('')





    // Submit Post Request

    const handleSubmit = (e) => {
        e.preventDefault();
        const gridpost = { name, age, breed, description }

        // const requestOptions ={
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json'},
        //   body: JSON.stringify({ title: 'Dog Post'})
        // }
        // // write fetch request
        // fetch("filepath", requestOptions)
        // // apppend to bottom, 
        //     `<div class="grid-item" onClick={handleOpen} >${props.name}</div>`

        console.log(gridpost)
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
                    <button onClick={handlePostOpen}>Post</button>

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



                <div id="myModal" class="modal" style={{ display: isPostOpen ? 'none' : 'block' }}>


                    <div class="modal-content">
                        <span class="close" onClick={handlePostOpen}>&times;</span>
                        <form onSubmit={handleSubmit} class="modal-inner-wrapper">


                            <div class="modal-inner-image" >ADD IMAGE HERE</div>
                            <label>Name</label>
                            <input required
                                value={name}
                                onChange={(e) => setName(e.target.value)}>
                            </input>
                            <label>Age</label>
                            <input required
                                value={age}
                                onChange={(e) => setAge(e.target.value)}></input>

                            <label>Breed</label>
                            <input required
                                value={breed}
                                onChange={(e) => setBreed(e.target.value)}></input>

                            <label>Description</label>
                            <textarea
                                required
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}></textarea>


                            <button type='submit'>Submit</button>


                            {name}
                            <br></br>
                            {age}
                            <br></br>
                            {breed}
                            <br></br>
                            {description}

                        </form>

                    </div>

                </div>







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
