import React, { useEffect, useState } from "react";
import { useQuery } from '@apollo/client';
import Conversations from '../../components/Conversations.js'
import { QUERY_ONE_USER } from '../../utils/queries';
import { useParams } from "react-router-dom";


// TODO: I will need to add an onclick function to go to page of correct chat maybe user senderId from message as a way to input into chat/:profileId params of chat page 
function Message() {

  const { profileId } = useParams()
  const { loading, data } = useQuery(QUERY_ONE_USER,
    {
      variables: { profileId: profileId },
    }
  );

  const [message, setMessage] = useState([]);
  
  
  useEffect(() => {
    console.log("data", data)
    const messages = data?.oneUser || [];
    console.log("Message.js", messages.messages)

    if (data) {

      const mess = messages.messages;
  
      const map = new Map();
  
      mess.forEach((mes) => {
        map.set(mes.senderId, mes._id)
      });
  
      const arr = Array.from(map).map((x) => x[1]);
  
      console.log(arr);
  
      const filteredObjs = mess.filter((mes) => arr.includes(mes._id));
  
      console.log("))))",filteredObjs);

      setMessage(filteredObjs);
    }

  },[loading]);

  return (

    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (

        <Conversations
          conversations={message}
        />
      )}

    </div>
  );
};

export default Message;