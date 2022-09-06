import React from 'react'


export default function SearchCards(props) {

    return (
        <div>
            Name: {props.pet.name}
            Age: {props.pet.age}
            Size: {props.pet.size}
        </div>
    )
};
