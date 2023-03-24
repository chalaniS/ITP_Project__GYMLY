import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '../pages/Home'

import Schedule from '../pages/schedule/Schedule'
import EditInstructor from '../pages/schedule/scheduleEdit/EditInstructor'
import EditTimeSlot from '../pages/schedule/scheduleEdit/EditTimeSlot'
import ScheduleTable from '../pages/schedule/ScheduleTable'
import InstructorConfirmOM from '../pages/schedule/InstructorConfirmOM'

import Employee from '../pages/employeeMgt/Employee'
import TblEmpSummary from '../pages/employeeMgt/TblEmpSummary'
import EmpRegistration from '../pages/employeeMgt/EmpRegistration'
import EmpUpdate from '../pages/employeeMgt/EmpUpdate'
import EmpLeave from '../pages/employeeMgt/EmpLeave'
import EmpSalary from '../pages/employeeMgt/EmpSalary'
import EmpSalaryEdit from '../pages/employeeMgt/EmpSalaryEdit'

import PaymentMethodsandPaymentType from '../pages/Payment/PaymentMethodsandPaymentType'
import SaveCard from '../pages/Payment/SaveCard'
import Verification from '../pages/Payment/Verification'
import GetToken from '../pages/Payment/GetToken'
import PaymentHomepage from '../pages/Payment/PaymentHomepage'
import FinancialReport from '../pages/Payment/FinancialReport'


import Login from '../pages/Users/Login'
import Registation from '../pages/Users/Registation'
import Dashboard from '../pages/Users/Dashboard'
import ApplyLeave from '../pages/Users/Employees/ApplyLeave'
import BMI from '../pages/Users/BmiTracker'
import Userprofile from '../pages/Users/Userprofile'
import Employeeprofile from '../pages/Users/Employees/Employeeprofile'
import Editprofile from '../pages/Users/Editprofile'

import ServiceFeedbackform from '../pages/CustomerAffairs/ServiceFeedbackform'
import InstructorFeedbackform from '../pages/CustomerAffairs/InstructorFeedbackform'
import FeedbackApproval from '../pages/CustomerAffairs/FeedbackApproval'
import FeedbackOptions from '../pages/CustomerAffairs/FeedbackOptions'
import AboutUs from '../pages/CustomerAffairs/AboutUs'
import ContactUs from '../pages/CustomerAffairs/ContactUs'


const Router = () => {
    return (
        <Routes>

            <Route path="/" element={<Navigate to='/index' />} />

            {/* Home */}
            <Route path="/index" element={<Home />} />
          
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
            <Route path="/promoapproval" element={<PromoApproval />} /> */}

            {/*User Management*/}
            <Route path="/Loging" element={<Login />} />
            <Route path="/Registation" element={<Registation />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/ApplyLeave" element={<ApplyLeave />} />
            <Route path="/BMI" element={<BMI />} />
            <Route path="/Userprofile" element={<Userprofile />} />
            <Route path="/Employeeprofile" element={<Employeeprofile />} />
            <Route path="/setting" element={<Editprofile />} />
            {/*User Management*/}


            {/*Customer Affairs Management*/}
            <Route path="/ServiceFeedbackform" element={<ServiceFeedbackform />} />
            <Route path="/InstructorFeedbackform" element={<InstructorFeedbackform />} />
            <Route path="/FeedbackApproval" element={<FeedbackApproval />} />
            <Route path="/FeedbackOptions" element={<FeedbackOptions />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            {/* <Route path="/SearchInstructor" element={<SearchInstructor />} /> */}


            {/*payment*/}
            <Route path="/PaymentMethodsandPaymentType" element={<PaymentMethodsandPaymentType />} />
            <Route path="/SaveCard" element={<SaveCard />} />
            <Route path="/Verification" element={<Verification />} />
            <Route path="/GetToken" element={<GetToken />} />
            <Route path="/PaymentHomepage" element={<PaymentHomepage />} />
            <Route path="/FinancialReport" element={<FinancialReport />} />



        </Routes>
    )
}

export default Router;