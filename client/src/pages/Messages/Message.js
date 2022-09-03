import React, {useState} from "react";
import { useQuery } from '@apollo/client';
import Conversations from '../../components/Conversations.js'
import { QUERY_USER_MESSAGES, QUERY_USER } from '../../utils/queries';

function Message() {
    const { loading, data } = useQuery(QUERY_USER_MESSAGES);
    const messages = data?.messages || [];

    return (
  <div>
    {loading ? (
        <div>Loading...</div>
    ) : (
        <Conversations
            conversations={messages}
            />
    )}
      
  </div>
  );
};

export default Message;