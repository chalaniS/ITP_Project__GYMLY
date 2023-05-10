import React from 'react'
import EditInstructor from './scheduleEdit/EditInstructor'
import EditTimeSlot from './scheduleEdit/EditTimeSlot'
import { Container, Row, Col } from 'reactstrap'
import '../../Styles/schedule/schedule.css'
import '../../App.css'

const ScheduleEdit = () => {
    return (
        <>
            <EditInstructor />
            <EditTimeSlot />
        </>
    )
}


export default ScheduleEdit;