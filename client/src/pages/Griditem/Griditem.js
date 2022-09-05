import React from 'react'
import { useState } from 'react';
import './style.css'

export default function PostCard(props) {


// OPEN AND CLOSE
  const [isPostOpen, setIsPostOpen] = useState(false);


  const handlePostOpen = event => {
      // toggle vis
      setIsPostOpen(current => !current)
  };
  

// SET VALUE
  const [name, setName] =useState('')
  
  const [age, setAge] = useState('')

  const [breed, setBreed] = useState('')

  const [description, setDescription] = useState('')





// Submit Post Request

const handleSubmit = (e) => {
    e.preventDefault();
    const gridpost = { name, age, breed, description}

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
      <div id="myModal" class="modal" style={{display: isPostOpen ? 'none' : 'block'}}>
  
          
          <div class="modal-content">
              <span class="close" onClick={handlePostOpen}>&times;</span>
              <form onSubmit={handleSubmit} class="modal-inner-wrapper">
                  
                  
                  <div class="modal-inner-image" >ADD IMAGE HERE</div>
                  <label>Name</label>
                  <input required
                  value={name}
                  onChange={(e)=> setName(e.target.value)}>
                  </input>
                  <label>Age</label>
                  <input required
                  value={age}
                  onChange={(e)=> setAge(e.target.value)}></input>

                  <label>Breed</label>
                  <input required
                  value={breed}
                  onChange={(e)=> setBreed(e.target.value)}></input>

                  <label>Description</label>
                  <textarea
                  required
                  value={description}
                  onChange={(e)=> setDescription(e.target.value)}></textarea>


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
      </div>
    )
}
