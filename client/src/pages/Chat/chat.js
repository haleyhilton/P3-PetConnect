import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@mui/material';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_ONE_USER } from '../../utils/queries';
import { CREATE_USER_MESSAGE } from '../../utils/mutations';
import { useParams } from "react-router-dom";
import AuthService from '../../utils/auth';
import formatDate from '../../utils/date';


const styles = {
    chatBox: {
        display: "flex",
        justifyContent: "center",
        paddingBottom: "75px",
        // border: "solid",
        margin: "0px 0px 25px 0px",
        borderRadius: "10px",
    },
    header: {
        display: "flex",
        justifyContent: "center",
        padding: "15px 0px 50px 0px",
        backgroundColor: "#023047",
        color: "white",
        border: "solid",
    },
    receiver: {
        display: "flex",
        justifyContent: "flex-start",
        border: "solid",
        borderColor: "#d4fffe",
        width: "fit-content",
        padding: "12px",
        borderRadius: "20px",
        backgroundColor: "#d4fffe",
        inlineSize: "300px",
        overflowWrap: "break-word",
        wordBreak: "break-all",
        position: "relative",
        left: "20px",
    },
    receiverTime: {
        display: "flex",
        justifyContent: "flex-start",
    },
    receiverAvatar: {
        position: "relative",
        right: "30px",
        top: "30px",
    },
    sender: {
        display: "flex",
        justifyContent: "flex-start",
        border: "solid",
        borderColor: "#9ae5ff",
        width: "fit-content",
        padding: "12px",
        borderRadius: "20px",
        backgroundColor: "#9ae5ff",
        inlineSize: "305px",
        overflowWrap: "break-word",
        wordBreak: "break-all",
        position: "relative",
        left: "72%"
    },
    senderTime: {
        display: "flex",
        justifyContent: "flex-end",
    },
    senderAvatar: {
        position: "relative",
        left: "99%",
        top: "30px",
    },
    messageArea: {
      height: '70vh',
      overflowY: 'auto',
      border: "solid",
      padding: "20px",
      borderRadius: "4px",
    },
    button: {
        position: "relative",
        top: "45px",
        right: "160px",
    }
  };
// TODO: Write an if statement to display a message on whole page if there are no current messages for this person
function Chat() {

    // Query other user
    const { profileId } = useParams()
  const { loading, data } = useQuery(QUERY_ONE_USER,
    {
      variables: { profileId: profileId },
    }
  );
  
  const [receiverBubble, setReceiverBubble] = useState([]);

  const [ senderBubble, setSenderBubble ] = useState([]);

  const [ nameState, setNameState ] = useState('')
  

  useEffect(() => {
      const chat = data?.oneUser || [];
      console.log(chat)
        console.log("useEffect",chat)
        
        if (data) {

            const id = AuthService.getUser().data._id;

            console.log(id);
            
            const converse = chat.messages;

            console.log("converse", converse)
         
            const receiverMessages = converse.filter(function (converse) {
                return converse.senderId === profileId;
            }).map(function (converse) {
                return converse;
            })

            const senderMessages = converse.filter(function (converse) {
                return converse.senderId === id;
            }).map(function (converse) {
                return converse;
            })
            
            console.log("receiver mess array", receiverMessages, senderMessages)

            // filter out proper messages in conversation
            const filteredResult = receiverMessages.filter(filterMess);
            console.log("@@@@@@@@", filteredResult)
    
            setReceiverBubble(filteredResult);

            setSenderBubble(senderMessages);

            setNameState(`${chat.first_name} ${chat.last_name}`)
            
        }
       
    }, [loading]);


    // Logic to send message to database
    // Need to add from token sender and params receiver
    const [ createMessage, setCreateMessage ] = useState({
        messageText: "",
        senderId: `${AuthService.getUser().data._id}`,
        receiverId: `${profileId}`,
        sentBy: `${AuthService.getUser().data.username}`,
    });

    // Making mutation
    const [ sendMessage, { error }] = useMutation(CREATE_USER_MESSAGE)
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCreateMessage({
          ...createMessage,
          [name]: value,
        });
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
           const messageData = await sendMessage({
            variables: {...createMessage}
           });

           console.log("Message Data", messageData)

           window.location.reload();

        //    setReceiverBubble(...receiverBubble, messageData.data.createMessage.messageText)


        } catch (err) {
            console.error(err)
        }
    }

    // function to filter out only what ids are corresponding to the conversation
    function filterMess(mes) {
        const id = AuthService.getUser().data._id;

        if (mes.receiverId === id) {
            return mes;
        }
    }


// TODO: need to be able to click on a profile message button that automatically opens up chat page with user id in params to start conversation
// TODO: Change date format


    return (
        <div>
            <h1 style={styles.header}> {nameState} {console.log("NAME", nameState)}
            {/* Need to change this to the profile picture rather than the media url */}
            <IconButton style={styles.button}> <Avatar alt={Array.from(nameState)[0]} src="#" sx={{ width: 56, height: 56 }} /> </IconButton>
            </h1>
            <div style={styles.chatBox}> 
              <Grid item xs={9}>
                  <List style={styles.messageArea}>
                    {receiverBubble.map((mess) => {
                        console.log("44444444",mess)
                        return (
                            <ListItem>
                         <Grid container>
                             <Grid item xs={12}>
                                 <Avatar style={styles.receiverAvatar} alt={Array.from(nameState)[0]} src="/static/images/avatar/1.jpg" />
                                 <ListItemText style={styles.receiver} primary={mess.messageText}></ListItemText>
                             </Grid>
                             <Grid item xs={12}>
                                 <ListItemText  style={styles.receiverTime} secondary={mess.lastUpdated}></ListItemText>
                             </Grid>
                         </Grid>
                     </ListItem>
                        )   
                    })}
                    {senderBubble.map((mess2) => {
                        console.log("mess2",mess2)
                        return (
                      <ListItem>
                          <Grid container>
                              <Grid item xs={12}>
                                  <Avatar style={styles.senderAvatar} alt={Array.from(AuthService.getUser().data.username)[0].toUpperCase()} src="/static/images/avatar/3.jpg" />
                                  <ListItemText style={styles.sender} primary={mess2.messageText}></ListItemText>
                              </Grid>
                              <Grid item xs={12}>
                                  <ListItemText style={styles.senderTime} secondary={mess2.lastUpdated}></ListItemText>
                              </Grid>
                          </Grid>
                      </ListItem>
                        )
                    })}
                  </List>
                  <Divider />
                  <Grid container style={{padding: '20px'}}>
                      <Grid item xs={11}>
                          <TextField name="messageText" id="outlined-basic-email" label="Type Message" fullWidth onChange={handleInputChange}/>
                      </Grid>
                      <Grid xs={1} align="right">
                          <Fab color="primary" aria-label="add" onClick={handleFormSubmit}><SendIcon /></Fab>
                      </Grid>
                  </Grid>
              </Grid>
              </div>
        </div>
    );
};

export default Chat;