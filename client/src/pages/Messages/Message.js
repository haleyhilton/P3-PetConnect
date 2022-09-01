import React, {useState} from "react";
import { useMutation } from '@apollo/client';
import Contacts from '../../components/Contacts.js'

// TODO: David R. create layout and functionality of message center inbox

function Message() {
    return (
        <div>
            <h1>Test</h1>
      <button> new message </button>

      <Contacts />
        </div>
    )
};

export default Message;