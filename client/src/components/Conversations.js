import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { flexbox } from '@mui/system';

const styles = {
    header: {
        display: 'flex',
        justifyContent: 'center',
    },
    conversations: {
        display: "flex",
        justifyContent: 'center',
        padding: '25px 0px 50px 0px',
    }
}


function Conversations() {
    
    return (
        <div>
            <h1 style={styles.header}>Messages</h1>

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