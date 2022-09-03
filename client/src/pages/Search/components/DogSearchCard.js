import React, { useState } from 'react'

export default function DogSearchCard(props) {
    console.log("name: "+ props.pet.name);

    return (
        <div>
            Dog: {props.pet.name}
        </div>
    )
}