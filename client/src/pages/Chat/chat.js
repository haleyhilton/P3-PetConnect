import React from 'react';
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
        top: "50px",
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
        left: "67%"
    },
    senderTime: {
        display: "flex",
        justifyContent: "flex-end",
    },
    senderAvatar: {
        position: "relative",
        left: "99%",
        top: "50px",
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
        right: "110px",
    }
  };
// TODO: Write an if statement to display a message on whole page if there are no current messages for this person
function Chat() {
    return (
        <div>
            <h1 style={styles.header}> David Rios
            <IconButton style={styles.button}> <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" sx={{ width: 56, height: 56 }} /> </IconButton>
            </h1>
            <div style={styles.chatBox}> 
              <Grid item xs={9}>
                  <List style={styles.messageArea}>
                      <ListItem key="1">
                          <Grid container>
                              <Grid item xs={12}>
                                  <Avatar style={styles.senderAvatar} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                  <ListItemText style={styles.sender} primary="This is where sender message will go dgjhsfdgjsdfgjsfdgjsfgjsfgjsfghkdghjkdfghjkdhfjdhfjdfghjdfghjdfghjdfghjdfghjdfghjdfgh"></ListItemText>
                              </Grid>
                              <Grid item xs={12}>
                                  <ListItemText  style={styles.senderTime} secondary="This is where time will be displayed - 09:30 pm"></ListItemText>
                              </Grid>
                          </Grid>
                      </ListItem>
                      <ListItem key="2">
                          <Grid container>
                              <Grid item xs={12}>
                                  <Avatar style={styles.receiverAvatar} alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                                  <ListItemText style={styles.receiver} primary="This is where receiver message will go dfhdfhdfhfhdfsdgsasdgasdgasdgasdgasddfgjfgjfdsgjdfgjdfgdgasdgsadg dfhbsfhdsfhsxdf sdgasgdasdfgsdfghsdfg dfbsfsfdghsdfgsdgsdfgsdfgsdg sfrhgsdg"></ListItemText>
                              </Grid>
                              <Grid item xs={12}>
                                  <ListItemText style={styles.receiverTime} secondary="09:31 pm"></ListItemText>
                              </Grid>
                          </Grid>
                      </ListItem>
                      <ListItem key="3">
                          <Grid container>
                              <Grid item xs={12}>
                                  <Avatar style={styles.senderAvatar} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                  <ListItemText  style={styles.sender} primary="Text is wrapping when it is more than bubble! asrgasrfhgadsfhadfhadfhadf"></ListItemText>
                              </Grid>
                              <Grid item xs={12}>
                                  <ListItemText  style={styles.senderTime} align="right" secondary="10:30"></ListItemText>
                              </Grid>
                          </Grid>
                      </ListItem>
                      <ListItem key="">
                          <Grid container>
                              <Grid item xs={12}>
                                  <Avatar style={styles.receiverAvatar} alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                                  <ListItemText style={styles.receiver} primary="This is where receiver message will go dfhdfhdfhfhdfsdgsasdgasdgasdgasdgasddfgjfgjfdsgjdfgjdfgdgasdgsadg dfhbsfhdsfhsxdf sdgasgdasdfgsdfghsdfg dfbsfsfdghsdfgsdgsdfgsdfgsdg sfrhgsdg"></ListItemText>
                              </Grid>
                              <Grid item xs={12}>
                                  <ListItemText style={styles.receiverTime} secondary="09:31 pm"></ListItemText>
                              </Grid>
                          </Grid>
                      </ListItem>
                  </List>
                  <Divider />
                  <Grid container style={{padding: '20px'}}>
                      <Grid item xs={11}>
                          <TextField id="outlined-basic-email" label="Type Message" fullWidth />
                      </Grid>
                      <Grid xs={1} align="right">
                          <Fab color="primary" aria-label="add"><SendIcon /></Fab>
                      </Grid>
                  </Grid>
              </Grid>
              </div>
        </div>
    );
};

export default Chat;