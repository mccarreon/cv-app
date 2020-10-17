import React, { useState } from 'react';
import DetailsComponent from './DetailsComponent'
import EducationModal from './EducationModal';

function DetailsContainer(props) {
    const [open, setOpen] = useState(false)
    const [tempSchool, updateTempSchool] = useState({...props.details})

    const handleClickOpen = () => {
        props.updateShowRemove(true)
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
        updateTempSchool({...props.details})
    }

    const handleChange = e => {
        const { name, value } = e.target
        updateTempSchool(prevState => { 
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    return (
        <>
            <EducationModal 
                    open={open}
                    schoolToAdd={tempSchool}
                    handleChange={handleChange}
                    handleSubmit={props.handleSubmit}
                    handleClose={handleClose}
                    handleDelete={props.handleDelete}
                    showRemove={props.showRemove}
            />
            <DetailsComponent {...props.details} handleClickOpen={handleClickOpen} />
        </>
    )
}

export default DetailsContainer