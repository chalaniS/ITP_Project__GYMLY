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

{/*Customer Affairs Management*/}
import InstructorFeedbackform from '../pages/CustomerAffairs/InstructorFeedbackform'
import ServiceFeedbackform from '../pages/CustomerAffairs/ServiceFeedbackform'
import ServiceFeedbackApproval from '../pages/CustomerAffairs/ServiceFeedbackApproval'
import InstructorFeedbackApproval from '../pages/CustomerAffairs/InstructorFeedbackApproval'
import FeedbackOptions from '../pages/CustomerAffairs/FeedbackOptions'
import SearchInstructor from '../pages/CustomerAffairs/SearchInstructor'
import InstructorProfile from '../pages/CustomerAffairs/InstructorProfile'
import AboutUs from '../pages/CustomerAffairs/AboutUs'
import ContactUs from '../pages/CustomerAffairs/ContactUs'
import EditInstructorFeedback from '../pages/CustomerAffairs/EditInstructorFeedback'

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
            
            {/* Customer Affairs pages routing */}
             <Route path="/InstructorFeedbackForm" element={<InstructorFeedbackform />} />
             <Route path="/ServiceFeedbackform" element={<ServiceFeedbackform />} />
              <Route path="/ServiceFeedbackApproval" element={<ServiceFeedbackApproval />} />
              <Route path="/InstructorFeedbackApproval" element={<InstructorFeedbackApproval />} />
              <Route path="/SearchInstructor" element={<SearchInstructor />} />
              <Route path="/FeedbackOptions" element={<FeedbackOptions />} />
              <Route path="/InstructorProfile" element={<InstructorProfile />} />
              <Route path="/AboutUs" element={<AboutUs/>} />
              <Route path="/ContactUs" element={<ContactUs />} />
              <Route path="/EditInstructorFeedback/:id" element={<EditInstructorFeedback />} />


        </Routes>
    )
}

export default Router;
