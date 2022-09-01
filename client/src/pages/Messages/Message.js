import React, {useState} from "react";
import { useQuery } from '@apollo/client';
import Contacts from '../../components/Contacts.js'
import { QUERY_USER_MESSAGES, QUERY_USER } from '../../utils/queries';

// TODO: David R. create layout and functionality of message center inbox

function Message() {
    const { loading, data } = useQuery(QUERY_USER_MESSAGES);
    const messages = data?.userMessages

    const { loading2, data2 } = useQuery(QUERY_USER);
    const user = data2?.user

    return (
        <div>
            <h1>Test</h1>
      <button> new message </button>

      <Contacts
      user={user}
      messages={messages}
      />
        </div>
    )
};

export default Message;