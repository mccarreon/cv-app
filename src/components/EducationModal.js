import React, { useState } from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Divider, 
    FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import shortid from 'shortid'

function EducationModal(props) {
    const [tempSchool, updateTempSchool] = useState(props.schoolToAdd)

    const handleChange = e => {
        const { name, value } = e.target 
        updateTempSchool(prevState => {
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

    return (
        <Dialog open={props.open} onClose={props.handleClose} maxWidth='sm' fullWidth={true}>
        <DialogTitle id="form-dialog-title">Add School</DialogTitle>
        <Divider variant="middle" />
        <DialogContent>
            <TextField
                margin="dense"
                fullWidth={true}
                name="schoolName"
                label="School Name"
                type="text"
                value={tempSchool.schoolName}
                onChange={handleChange}
            />
            <TextField
                margin="dense"
                fullWidth={true}
                name="degree"
                label="Degree"
                type="text"
                value={tempSchool.degree}
                onChange={handleChange}
            />
            <TextField
                style={{width: 50}}
                margin="dense"
                name="gpa"
                label="GPA"
                type="text"
                value={tempSchool.gpa}
                onChange={handleChange}
            /><br />
            <FormControl style={{ minWidth: 120 }}>
                <InputLabel>Start Year</InputLabel>
                <Select
                    name="startYear"
                    value={tempSchool.startYear}
                    onChange={handleChange}
                >
                    {generateYears(0, 100).map(year => {
                        return <MenuItem key={shortid.generate()} value={year}>{year}</MenuItem>
                    })}
                </Select>
            </FormControl>
            <FormControl style={{ minWidth: 120, marginLeft: 10 }}>
                <InputLabel>Grad Year</InputLabel>
                <Select
                    name="endYear"
                    value={tempSchool.endYear}
                    onChange={handleChange}
                >
                    {generateYears(7, 100).map(year => {
                        return <MenuItem key={shortid.generate()} value={year}>{year}</MenuItem>
                    })}
                </Select>
            </FormControl><br /><br />
            <TextField
                multiline
                name="details"
                placeholder="Details"
                helperText="Ex: Club, honors, awards"
                fullWidth={true}
                rows={4}
                value={tempSchool.details}
                onChange={handleChange}
            />
        </DialogContent>
        <DialogActions>
            {props.showRemove && <Button onClick={() => props.handleDelete(tempSchool)} color="secondary">Remove</Button>}
            <Button onClick={() => props.handleSubmit(tempSchool)} color="primary">Submit</Button>
        </DialogActions>
    </Dialog>
    )
}

export default EducationModal 
