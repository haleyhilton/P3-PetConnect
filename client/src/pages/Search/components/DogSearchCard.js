import React, { useState } from 'react'

export default function DogSearchCard(props) {


    return (
        <div>
            Dog: {props.pet.name}
        </div>
    )
}