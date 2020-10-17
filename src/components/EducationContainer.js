import React, { useState } from 'react'
import BodyComponent from "./BodyComponent"
import shortid from 'shortid'
import EducationModal from './EducationModal'

function EducationContainer() {
    const [open, setOpen] = useState(false)
    const [showRemove, updateShowRemove] = useState(false)
    const [schoolToAdd, updateSchoolToAdd] = useState({})
    const [schoolData, updateSchoolData] = useState([{
        schoolName: "California State University, Chico",
        degree: "B.S. Business Administration, Option in Finance",
        gpa: "3.6",
        startYear: "2018",
        endYear: "2020",
        details: "- Something here\n- Another thing here",
        id: shortid.generate()
    }])

    const handleClickOpen = () => {
        updateShowRemove(false)
        setOpen(true);
        const tempSchool = {
            schoolName: "",
            degree: "",
            gpa: "",
            startYear: "",
            endYear: "",
            details: "",
            id: shortid.generate()
        }

        updateSchoolToAdd(tempSchool)
    }

    const handleClose = () => {
        setOpen(false);
        updateSchoolToAdd({})
    }

    const handleSubmit = newSchool => {
        const found = schoolData.some(school => school.id === newSchool.id) 

        if (found) {
            let tempData = [...schoolData]
            const index = tempData.findIndex(school => school.id === newSchool.id)
            tempData[index] = newSchool
            updateSchoolData(tempData)
        } else {
            updateSchoolData(prevState => [...prevState, newSchool])
        }
        handleClose()
    }

    const handleDelete = schoolToRemove => {
        let tempData = [...schoolData]
        const index = tempData.findIndex(school => school.id === schoolToRemove.id)
        tempData = tempData.splice(index, 0)
        updateSchoolData(tempData)
        handleClose()

        console.log(`Removed school`)
    }

    const handleChange = e => {
        const { name, value } = e.target
        updateSchoolToAdd(prevState => { 
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
                schoolToAdd={schoolToAdd}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                handleClose={handleClose}
                handleDelete={handleDelete}
                showRemove={showRemove}
            />
            <BodyComponent
                title={"Education"}
                data={schoolData}
                schoolToAdd={schoolToAdd}
                open={open}
                handleClickOpen={handleClickOpen}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                handleClose={handleClose}
                handleDelete={handleDelete}
                showRemove={showRemove}
                updateShowRemove={updateShowRemove}
            />
        </>
    )
}

export default EducationContainer