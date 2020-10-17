import React, { useState } from 'react';
import JobDetailsComponent from './JobDetailsComponent'
import ExperienceModal from './ExperienceModal';

function DetailsContainer(props) {
    const [open, setOpen] = useState(false)
    const [tempJob, updateTempJob] = useState({...props.details})

    const handleClickOpen = () => {
        props.updateShowRemove(true)
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
        updateTempJob({...props.details})
    }

    const handleChange = e => {
        const { name, value } = e.target
        updateTempJob(prevState => { 
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    return (
        <>
        <ExperienceModal 
                open={open}
                jobToAdd={tempJob}
                handleChange={handleChange}
                handleSubmit={props.handleSubmit}
                handleClose={handleClose}
                handleDelete={props.handleDelete}
                showRemove={props.showRemove}
        />
        <JobDetailsComponent {...props.details} handleClickOpen={handleClickOpen}
        />
        </>
    )
}

export default DetailsContainer