import React from 'react'


export default function SearchCards(props) {
    console.log("Pets within SearchCards: "+ JSON.stringify(props.pets));

    return (
        <div>
            {JSON.stringify(props.pets)}
        </div>
    )
};
