import React from 'react'


export default function SearchCard(props) {
    console.log(props.pet);
    return (
        <div>
            Name: {props.pet.name}
        </div>
    )
};
