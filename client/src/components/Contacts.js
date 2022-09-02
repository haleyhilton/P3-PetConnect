import React from "react";

// TODO: David R. create components to display individual contacts

function Contacts ({ user, messages }) {
    return (
       <div className="contacts">
        <img src={user.profilePicture} alt="profile picture"/>
        <h3 className="contactName">{user.first_name} {user.last_name}</h3>
        <h5 className="lastMessage">{messages.lastMessage}</h5>
       </div> 
    );
}

export default Contacts;