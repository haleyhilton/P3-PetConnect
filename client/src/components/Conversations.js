import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import IconButton from '@mui/material/IconButton';

const styles = {
    header: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: "#023047",
        padding: "15px 0px 30px 0px",
        color: "white",
    },
    conversations: {
        display: "flex",
        justifyContent: 'center',
        padding: '25px 0px 50px 0px',
    },
    button: {
        position: "relative",
        left: "450px",
        color: "white",
    }
}


function Conversations() {
    
    return (
        <div>
            <header style={styles.header}>
                <h1>Messages</h1>
                <IconButton size="large" style={styles.button}> <MapsUgcIcon fontSize='inherit' /> </IconButton>
            </header>

            <Grid container>
                <Grid item xs={12} style={{ padding: '10px' }}>
                    <TextField id="outlined-basic-email" label="Search" variant="outlined" fullWidth />
                </Grid>
            </Grid>

            <div style={styles.conversations}>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemButton href="/chat">
                            <ListItemAvatar>
                                {/* Add Cloudinary profile pictures url */}
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                                // this will display receiver name for messages
                                primary="David Rios"
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                        </Typography>
                                        {/* Display last message below from database */}
                                        {"this is where we want last message dispayed"}
                                    </React.Fragment>
                                }
                            />
                        </ListItemButton>
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </List>
            </div>
        </div>
    );
};


export default Conversations;