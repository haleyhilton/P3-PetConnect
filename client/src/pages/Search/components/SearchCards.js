import React from 'react'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";


export default function SearchCards(props) {

    return (
  <div className="search-card">
        <Grid 
        item
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        md={4}
      >
        <Typography>          
        <h6> Name: {props.pet.name}</h6>
        <h5>Age: {props.pet.age}</h5>
        <h5>Size: {props.pet.size} </h5>
        </Typography>
      </Grid>
      </div>
    )
};
