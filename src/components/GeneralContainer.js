import React, { useState } from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Divider } from '@material-ui/core'
import GeneralComponent from "./GeneralComponent"

function GeneralContainer() {
    const [fullName, setFullName] = useState("Your Name")
    const [email, setEmail] = useState("email")
    const [phoneNumber, setPhoneNumber] = useState("(xxx)-xxx-xxxx")
    const [linkedin, setLinkedin] = useState("linkedin.com/in/yourlinkedin")
    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleChange = (e, setState) => {
        setState(e.target.value)
    }

    return (
        <>
            <Dialog open={open} onClose={handleClose} maxWidth='sm' fullWidth={true}>
                <DialogTitle id="form-dialog-title">Edit Personal Info</DialogTitle>
                <Divider variant="middle" />
                <DialogContent>
                    <TextField
                        margin="dense"
                        fullWidth={true}
                        id="fullName"
                        label="Full Name"
                        type="text"
                        value={fullName}
                        onChange={e => handleChange(e, setFullName)}
                    />
                    <TextField
                        margin="dense"
                        fullWidth={true}
                        id="email"
                        label="Email"
                        type="email"
                        value={email}
                        onChange={e => handleChange(e, setEmail)}
                    />
                    <TextField
                        margin="dense"
                        fullWidth={true}
                        id="phoneNumber"
                        label="Phone Number"
                        type="tel"
                        value={phoneNumber}
                        onChange={e => handleChange(e, setPhoneNumber)}
                    />
                    <TextField
                        margin="dense"
                        fullWidth={true}
                        id="linkedin"
                        label="Linkedin"
                        type="text"
                        value={linkedin}
                        onChange={e => handleChange(e, setLinkedin)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">Submit</Button>
                </DialogActions>
            </Dialog>
            <GeneralComponent
                fullName={fullName}
                email={email}
                phoneNumber={phoneNumber}
                linkedin={linkedin}
                handleClickOpen={handleClickOpen}
            />

        </>
    )
}

export default GeneralContainer