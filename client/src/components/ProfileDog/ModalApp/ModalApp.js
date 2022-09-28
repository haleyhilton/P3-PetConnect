import React, { useRef, useEffect } from 'react'
import Attachments from '../ModalConditionals/Attachments';
import Info from '../ModalConditionals/Info';

export default function index() {

    // const selection = useRef(<Info />)

    // let selectButton = document.querySelector("#option-select")

    // let content;

    // useEffect(() => {

    //     if (selectButton.value === "Information") {

    //         selection = <Info />

    //     }
    //     else if (selectButton.value === "Attachments") {

    //         content = <Attachments />

    //     }

    // })

    // if (selection.textContent === "Information"){

    //     content = <Info/>

    // }
    // else if (selection.textContent === "Attachments"){

    //        content=  <Attachments/>

    // }


    return (

        <div>
            <select id="option-select-profile">
                <option>Information</option>
                <option>Attachments</option>
            </select>

            {/* <div> {selection.current}</div> */}

        </div>
    )
}
