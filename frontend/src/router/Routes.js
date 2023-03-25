import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'


import OMHome from '../pages/OMdashboard/OMHome'

import Schedule from '../pages/schedule/Schedule'
import EditInstructor from '../pages/schedule/scheduleEdit/EditInstructor'
import EditTimeSlot from '../pages/schedule/scheduleEdit/EditTimeSlot'
import ScheduleTable from '../pages/schedule/ScheduleTable'
import InstructorConfirmOM from '../pages/schedule/InstructorConfirmOM'
import InstructurChart from '../pages/schedule/InstructorChart/InstructurChart'

import Employee from '../pages/employeeMgt/Employee'
import TblEmpSummary from '../pages/employeeMgt/TblEmpSummary'
import EmpRegistration from '../pages/employeeMgt/EmpRegistration'
import EmpUpdate from '../pages/employeeMgt/EmpUpdate'
import EmpLeave from '../pages/employeeMgt/EmpLeave'
import EmpSalary from '../pages/employeeMgt/EmpSalary'
import EmpSalaryEdit from '../pages/employeeMgt/EmpSalaryEdit'

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to='/index' />} />

            {/* operation manager homepage */}
            <Route path="/home" element={<OMHome />} />

            {/* Schedule pages routing */}
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/changetimeslot" element={<EditTimeSlot />} />
            <Route path="/changeinstrutor" element={<EditInstructor />} />
            <Route path="/trainings" element={<ScheduleTable />} />
            <Route path="/confirmation" element={<InstructorConfirmOM />} />
            <Route path="/instchart" element={<InstructurChart />} />

            {/* Employee Management pages routing */}
            <Route path="/employee-summary" element={<TblEmpSummary />} />
            <Route path="/employee-leave" element={<EmpLeave />} />

        </Routes>
    )
}

export default Router;