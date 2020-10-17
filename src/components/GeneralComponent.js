import React from 'react';
import { Box, Paper, IconButton, Typography } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit'

function GeneralComponent(props) {
    
    return (
        <Box mt={2} mb={2}>
            <Paper style={{position: "relative"}} elevation={2}>
                <IconButton color="primary" onClick={props.handleClickOpen} style={{position: "absolute", right: "10px"}}>
                    <EditIcon />
                </IconButton>

                <Box display="flex" flexDirection="column" alignItems="center">
                    <Typography variant="h2" gutterBottom>{props.fullName}</Typography>
                    <Box style={{fontSize: '16px'}} mt={-4} display="flex" justifyContent="center">
                        <Typography variant="subtitle1">{props.email}</Typography>
                        <Typography variant="subtitle1" gutterBottom>&nbsp;&nbsp;|&nbsp;&nbsp;</Typography>
                        <Typography variant="subtitle1" gutterBottom>{props.phoneNumber}</Typography>
                        <Typography variant="subtitle1" gutterBottom>&nbsp;&nbsp;|&nbsp;&nbsp;</Typography>
                        <Typography variant="subtitle1" gutterBottom>{props.linkedin}</Typography>
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
}

export default GeneralComponent;
