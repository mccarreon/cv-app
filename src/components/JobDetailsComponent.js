import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';

function DetailsComponent(props) {
    return (
        <Grid container spacing={0} alignItems="center">
            <Grid item xs={10}>
                <Typography variant="h6">
                    {props.companyName}
                    <Button onClick={props.handleClickOpen} color="primary" size="small">Edit</Button>
                </Typography>
            </Grid>
            <Grid item>
                <Typography align="right" variant="subtitle2">{props.startYear} - {props.endYear}</Typography>
            </Grid>
            <Grid item xs={10}>
                <Typography variant="subtitle1">{props.jobTitle}</Typography>
            </Grid>
            <Grid item xs={10}>
                <Typography variant="body2" style={{ whiteSpace: "pre" }}>
                    {props.details}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default DetailsComponent