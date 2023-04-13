import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'


import OMHome from '../pages/OMdashboard/OMHome'

import Schedule from '../pages/schedule/Schedule'
import EditInstructor from '../pages/schedule/scheduleEdit/EditInstructor'
import EditTimeSlot from '../pages/schedule/scheduleEdit/EditTimeSlot'
import ScheduleTable from '../pages/schedule/ScheduleTable'
import InstructorConfirmOM from '../pages/schedule/InstructorConfirmOM'
import BestInstructors from '../pages/schedule/InstructorChart/BestInstructors'
import TblEmpSummary from '../pages/employeeMgt/TblEmpSummary'
import EmpRegistration from '../pages/employeeMgt/EmpRegistration'
import EmpSalary from '../pages/employeeMgt/EmpSalary'
import EmpSalaryEdit from '../pages/employeeMgt/EmpSalaryEdit'
import DashboardEmployee from '../pages/employeeMgt/DashboardEmployee'
import NavBar from '../pages/employeeMgt/NavBar'
import EmployeeForm from '../pages/employeeMgt/EmployeeForm'
import EmployeeTable from '../pages/employeeMgt/EmployeeTable'
import EmployeeLeave from '../pages/employeeMgt/EmployeeLeave'
import EmployeeSalaryForm from '../pages/employeeMgt/EmployeeSalaryForm'

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to='/index' />} />

            {/* operation manager homepage */}
            <Route path="/home" element={<OMHome />} />

            {/* Schedule pages routing */}
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/changetimeslot/:id" element={<EditTimeSlot />} />
            <Route path="/changeinstrutor" element={<EditInstructor />} />
            <Route path="/trainings" element={<ScheduleTable />} />
            <Route path="/confirmation" element={<InstructorConfirmOM />} />
            <Route path="/bestinstructors" element={<BestInstructors />} />

            {/* Employee Management pages routing */}
            <Route path="/employeeDashboard" element={<EmployeeTable />} />
            <Route path="/employeeRegister" element={<EmployeeForm />} />
            <Route path="/employeeLeave" element={<EmployeeLeave />} />
            <Route path="/employeeSalary" element={<EmployeeSalaryForm />} />
            <Route path="/employeeSum" element={<TblEmpSummary />} />
            {/* <Route path="/employee-leave" element={<EmpLeave />} /> */}

        </Routes>
    )
}

export default Router;