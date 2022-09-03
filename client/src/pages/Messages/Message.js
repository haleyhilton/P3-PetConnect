import React, {useState} from "react";
import { useQuery } from '@apollo/client';
import Contacts from '../../components/Contacts.js'
import { QUERY_USER_MESSAGES, QUERY_USER } from '../../utils/queries';

// TODO: David R. create layout and functionality of message center inbox

function Message() {
    
    return (
        <div>
            <h1>Test</h1>
      <button> new message </button>

      
        </div>
    )
};

export default Message;