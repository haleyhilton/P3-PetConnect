import React, { useEffect, useState } from 'react'
import './style.css'
import {createMastText} from '../../utils/helpers'
import Masthead from '../../components/Masthead'



export default function FAQ() {
        const [text,setText] = useState();
    
        useEffect(() => {
            const data = createMastText();
    
            setText(data);
    
            console.log("*****",data);
        },[]);
    
        return (
            <div>
                <Masthead {...createMastText()}/>
      
                <div className="faq">
                        <h3>WHO</h3><br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.
                        <br /><br />

                        <h3>WHAT:</h3><br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.
                        <br /><br />

                        <h3>WHERE:</h3><br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.

                        <br /><br />

                        <h3>WHY:</h3><br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.
                </div>                 </div>

        )
};