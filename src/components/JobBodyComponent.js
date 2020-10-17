import React from 'react';
import { Box, Paper, IconButton, Divider, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add'
import JobDetailsContainer from './JobDetailsContainer'
import shortid from 'shortid' 

function BodyComponent(props) {

    return (
        <>
            <Paper elevation={2} style={{ position: "relative", paddingTop: "10px", paddingBottom: "10px" }}>
                <IconButton color="primary" onClick={props.handleClickOpen} style={{ position: "absolute", right: "10px" }}>
                    <AddIcon />
                </IconButton>

                <Box display="flex" flexDirection="column" style={{ marginLeft: "25px" }}>
                    <Typography variant="h4">{props.title}</Typography>
                    <Divider style={{ marginLeft: "0px", marginRight: "25px" }} variant="middle" />
                    {props.data.map(details => {
                        return (
                        <JobDetailsContainer 
                            key={shortid.generate()} 
                            details={details} 
                            handleSubmit={props.handleSubmit}
                            handleDelete={props.handleDelete}
                            showRemove={props.showRemove}
                            updateShowRemove={props.updateShowRemove}
                        />
                        )
                    })}
                </Box>
            </Paper>
        </>
    );
}

export default BodyComponent;
