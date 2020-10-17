import React, { useState } from 'react'
import JobBodyComponent from "./JobBodyComponent"
import shortid from 'shortid'
import ExperienceModal from './ExperienceModal'

function ExperienceContainer() {
    const [open, setOpen] = useState(false)
    const [showRemove, updateShowRemove] = useState(false)
    const [jobToAdd, updateJobToAdd] = useState({})
    const [jobData, updateJobData] = useState([{
        companyName: "Sensiba San Filippo",
        jobTitle: "Full Stack Engineer",
        startYear: "2020",
        endYear: "Present",
        details: "- Something here\n- Another thing here",
        id: shortid.generate()
    }])

    const handleClickOpen = () => {
        updateShowRemove(false)
        setOpen(true);
        const tempJob = {
            companyName: "",
            jobTitle: "",
            startYear: "",
            endYear: "",
            details: "",
            id: shortid.generate()
        }

        updateJobToAdd(tempJob)
    }

    const handleClose = () => {
        setOpen(false)
        updateJobToAdd({})
    }

    const handleSubmit = newJob => {
        const found = jobData.some(job => job.id === newJob.id) 

        if (found) {
            let tempData = [...jobData]
            const index = tempData.findIndex(job => job.id === newJob.id)
            tempData[index] = newJob
            updateJobData(tempData)
        } else {
            updateJobData(prevState => [...prevState, newJob])
        }
        handleClose()
    }

    const handleDelete = jobToRemove => {
        let tempData = [...jobData]
        const index = tempData.findIndex(job => job.id === jobToRemove.id)
        tempData = tempData.splice(index, 0)
        updateJobData(tempData)
        handleClose()

        console.log(`Removed job`)
    }

    const handleChange = e => {
        const { name, value } = e.target
        updateJobToAdd(prevState => { 
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
                jobToAdd={jobToAdd}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                handleClose={handleClose}
                handleDelete={handleDelete}
                showRemove={showRemove}
            />
            <JobBodyComponent
                title={"Experience"}
                data={jobData}
                jobToAdd={jobToAdd}
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

export default ExperienceContainer