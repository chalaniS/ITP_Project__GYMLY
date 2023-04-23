import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '../pages/Home'

import Login from '../pages/Users/Login'
import Registation from '../pages/Users/Registation'
import Dashboard from '../pages/Users/Dashboard'
import ApplyLeave from '../pages/Users/Employees/ApplyLeave'
import BMI from '../pages/Users/BmiTracker'
import Userprofile from '../pages/Users/Userprofile'
import Employeeprofile from '../pages/Users/Employees/Employeeprofile'
import Editprofile from '../pages/Users/Editprofile'
import ManagerDashboard from '../pages/Users/UserManager/ManagerDashboard'
import ManagmentLogin from '../pages/Users/UserManager/ManagementLoging'

const Router = () => {
    return (
        <Routes>

            <Route path="/" element={<Navigate to='/index' />} />

            {/* Home */}
            <Route path="/index" element={<Home />} />
          
            {/*User Management*/}
            <Route path="/Loging" element={<Login />} />
            <Route path="/Registation" element={<Registation />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/ApplyLeave" element={<ApplyLeave />} />
            <Route path="/BMI" element={<BMI />} />
            <Route path="/Userprofile" element={<Userprofile />} />
            <Route path="/Employeeprofile" element={<Employeeprofile />} />
            <Route path="/setting" element={<Editprofile />} />
            <Route path="/ManagerDashboard" element={<ManagerDashboard />} />
            <Route path="/ManagmentLogin" element={<ManagmentLogin />} />
            {/*User Management*/}



        </Routes>
    )
}

export default Router;