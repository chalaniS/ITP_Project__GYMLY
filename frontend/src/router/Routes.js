import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

<<<<<<< HEAD
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


import OMHome from '../pages/OMdashboard/OMHome'
=======
import OMHome from '../pages/OMdashboard/omHome'
>>>>>>> Banuka

import Schedule from '../pages/schedule/Schedule'
import EditInstructor from '../pages/schedule/scheduleEdit/EditInstructor'
import EditTimeSlot from '../pages/schedule/scheduleEdit/EditTimeSlot'
import ScheduleTable from '../pages/schedule/ScheduleTable'
import InstructorConfirmOM from '../pages/schedule/InstructorConfirmOM'
<<<<<<< HEAD
import BestInstructors from '../pages/schedule/InstructorChart/BestInstructors'
=======

<<<<<<< HEAD
import StandardPackages from '../pages/Membership/StandardPackages'
import EditStandard from '../pages/Membership/EditStandard'
import PromoPackages from '../pages/Membership/PromoPackages'
import AddNewPromo from '../pages/Membership/AddNewPromo'
import PromoApproval from '../pages/Membership/PromoApproval'
import MMdashboard from '../pages/Membership/MMdashboard'
=======
import Employee from '../pages/employeeMgt/Employee'
import TblEmpSummary from '../pages/employeeMgt/TblEmpSummary'
import EmpRegistration from '../pages/employeeMgt/EmpRegistration'
import EmpUpdate from '../pages/employeeMgt/EmpUpdate'
import EmpLeave from '../pages/employeeMgt/EmpLeave'
import EmpSalary from '../pages/employeeMgt/EmpSalary'
import EmpSalaryEdit from '../pages/employeeMgt/EmpSalaryEdit'
>>>>>>> main

import PaymentMethodsandPaymentType from '../pages/Payment/PaymentMethodsandPaymentType'
import SaveCard from '../pages/Payment/SaveCard'
import Verification from '../pages/Payment/Verification'
import GetToken from '../pages/Payment/GetToken'
import PaymentHomepage from '../pages/Payment/PaymentHomepage'
import FinancialReport from '../pages/Payment/FinancialReport'


<<<<<<< HEAD
import Login from '../pages/Users/Login'
import Registation from '../pages/Users/Registation'
import Dashboard from '../pages/Users/Dashboard'

import ServiceFeedbackform from '../pages/CustomerAffairs/ServiceFeedbackform'
import InstructorFeedbackform from '../pages/CustomerAffairs/InstructorFeedbackform'
import FeedbackApproval from '../pages/CustomerAffairs/FeedbackApproval'
import FeedbackOptions from '../pages/CustomerAffairs/FeedbackOptions'
import AboutUs from '../pages/CustomerAffairs/AboutUs'
import ContactUs from '../pages/CustomerAffairs/ContactUs'

>>>>>>> Banuka
=======
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


>>>>>>> origin/Sithum_dev

const Router = () => {
    return (
        <Routes>

<<<<<<< HEAD
            {/* Home */}
            <Route path="/" element={<Navigate to='/index' />} />
=======
            {/* Schedule pages routing */}
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/changetimeslot" element={<EditTimeSlot />} />
            <Route path="/changeinstrutor" element={<EditInstructor />} />
            <Route path="/trainings" element={<ScheduleTable />} />
            <Route path="/confirmation" element={<InstructorConfirmOM />} />

            {/* Employee management pages routing */}
            {/* <Route path="/employee" element={<Employee />} /> */}
            <Route path="/employee-summary" element={<TblEmpSummary />} />
            {/* <Route path="/employee-registration" element={<EmpRegistration />} />
            <Route path="/employee-update" element={<EmpUpdate />} /> */}
            <Route path="/employee-leave" element={<EmpLeave />} />
            {/* <Route path="/employee-salary" element={<EmpSalary />} />
            <Route path="/employee-salary-edit" element={<EmpSalaryEdit />} /> */}


            {/* package */}
            {/* <Route path="/standardpackages" element={<StandardPackages />} />
            <Route path="/editstandard" element={<EditStandard />} />
            <Route path="/promopackages" element={<PromoPackages />} />
            <Route path="/newpromo" element={<AddNewPromo />} />
<<<<<<< HEAD
            <Route path="/promoapproval" element={<PromoApproval />} />
            <Route path="/mmdashboard" element={<MMdashboard />} />
=======
            <Route path="/promoapproval" element={<PromoApproval />} /> */}
>>>>>>> main
>>>>>>> Banuka

<<<<<<< HEAD
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


=======
            {/* operation manager homepage */}
            <Route path="/home" element={<OMHome />} />

            {/* Schedule pages routing */}
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/changetimeslot/:id" element={<EditTimeSlot />} />
            <Route path="/changeinstrutor" element={<EditInstructor />} />
            <Route path="/trainings" element={<ScheduleTable />} />
            <Route path="/confirmation" element={<InstructorConfirmOM />} />
            <Route path="/bestinstructors" element={<BestInstructors />} />
>>>>>>> chalani_dev

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