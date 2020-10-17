import React, { useState } from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Divider, 
    FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import shortid from 'shortid'

function ExperienceModal(props) {
    const [tempJob, updateTempJob] = useState(props.jobToAdd)

    const handleChange = e => {
        const { name, value } = e.target 
        updateTempJob(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }
    
    const generateYears = (yearsIntoFuture, yearsIntoPast) => {
        const currentYear = new Date().getFullYear()
        const maxYear = currentYear + yearsIntoFuture
        const minYear = currentYear - yearsIntoPast
        const displayYears = [] 

        for (let i = maxYear; i >= minYear; i--) { 
            displayYears.push(i)
        }
        return displayYears
    }

    const generateYearsWithPresent = (yearsIntoFuture, yearsIntoPast) => {
        let dropdownData = generateYears(yearsIntoFuture, yearsIntoPast)
        dropdownData.unshift("Present")
        return dropdownData
    }

    return (
        <Dialog open={props.open} onClose={props.handleClose} maxWidth='sm' fullWidth={true}>
        <DialogTitle id="form-dialog-title">Add School</DialogTitle>
        <Divider variant="middle" />
        <DialogContent>
            <TextField
                margin="dense"
                fullWidth={true}
                name="companyName"
                label="Company Name"
                type="text"
                value={tempJob.companyName}
                onChange={handleChange}
            />
            <TextField
                margin="dense"
                fullWidth={true}
                name="jobTitle"
                label="Job Title"
                type="text"
                value={tempJob.jobTitle}
                onChange={handleChange}
            />
            <FormControl style={{ minWidth: 120 }}>
                <InputLabel>Start Year</InputLabel>
                <Select
                    name="startYear"
                    value={tempJob.startYear}
                    onChange={handleChange}
                >
                    {generateYears(0, 100).map(year => {
                        return <MenuItem key={shortid.generate()} value={year}>{year}</MenuItem>
                    })}
                </Select>
            </FormControl>
            <FormControl style={{ minWidth: 120, marginLeft: 10 }}>
                <InputLabel>End Year</InputLabel>
                <Select
                    name="endYear"
                    value={tempJob.endYear}
                    onChange={handleChange}
                >
                    {generateYearsWithPresent(0, 100).map(year => {
                        return <MenuItem key={shortid.generate()} value={year}>{year}</MenuItem>
                    })}
                </Select>
            </FormControl><br /><br />
            <TextField
                multiline
                name="details"
                placeholder="Details"
                helperText="Ex: saved over 1,000 lives by documenting my code"
                fullWidth={true}
                rows={4}
                value={tempJob.details}
                onChange={handleChange}
            />
        </DialogContent>
        <DialogActions>
            {props.showRemove && <Button onClick={() => props.handleDelete(tempJob)} color="secondary">Remove</Button>}
            <Button onClick={() => props.handleSubmit(tempJob)} color="primary">Submit</Button>
        </DialogActions>
    </Dialog>
    )
}

export default ExperienceModal 
