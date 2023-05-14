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


import OMHome from '../pages/OMdashboard/OMHome'
import Schedule from '../pages/schedule/Schedule'
import EditInstructor from '../pages/schedule/scheduleEdit/EditInstructor'
import EditTimeSlot from '../pages/schedule/scheduleEdit/EditTimeSlot'
import ScheduleTable from '../pages/schedule/ScheduleTable'
import InstructorConfirmOM from '../pages/schedule/InstructorConfirmOM'
import BestInstructors from '../pages/schedule/InstructorChart/BestInstructors'


import StandardPackages from '../pages/Membership/StandardPackages'
import EditStandard from '../pages/Membership/EditStandard'
import PromoPackages from '../pages/Membership/PromoPackages'
import AddNewPromo from '../pages/Membership/AddNewPromo'
import PromoApproval from '../pages/Membership/PromoApproval'
import MMdashboard from '../pages/Membership/MMdashboard'


// import PaymentMethodsandPaymentType from '../pages/Payment/PaymentMethodsandPaymentType'
// import SaveCard from '../pages/Payment/SaveCard'
// import Verification from '../pages/Payment/Verification'
// import GetToken from '../pages/Payment/GetToken'
// import PaymentHomepage from '../pages/Payment/PaymentHomepage'
// import FinancialReport from '../pages/Payment/FinancialReport'



// import Login from '../pages/Users/Login'
// import Registation from '../pages/Users/Registation'
// import Dashboard from '../pages/Users/Dashboard'




import PaymentGateway from '../pages/Payment/PaymentGateway'
import Verification from '../pages/Payment/Verification'
import GetToken from '../pages/Payment/GetToken'
import PaymentHomepage from '../pages/Payment/PaymentHomepage'
import FinancialReportupload from '../pages/Payment/FinancialReportupload'
import FinancialReportRetrieve from '../pages/Payment/FinancialReportRetrieve'
import Edit from '../pages/Payment/Edit'
import FinancialReportGenerate from '../pages/Payment/FinancialReportGenerate'

// import ServiceFeedbackform from '../pages/CustomerAffairs/ServiceFeedbackform'
// import InstructorFeedbackform from '../pages/CustomerAffairs/InstructorFeedbackform'
// import FeedbackApproval from '../pages/CustomerAffairs/FeedbackApproval'
// import FeedbackOptions from '../pages/CustomerAffairs/FeedbackOptions'
// import AboutUs from '../pages/CustomerAffairs/AboutUs'
// import ContactUs from '../pages/CustomerAffairs/ContactUs'


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

import SupplementOrders from '../pages/Supplier/SupplementOrders'
import RecivedOrder from '../pages/Supplier/RecivedOrder'


import EmployeeForm from '../pages/employeeMgt/EmployeeForm'
import EmployeeTable from '../pages/employeeMgt/EmployeeTable'
import EmployeeLeave from '../pages/employeeMgt/EmployeeLeave'
import EmployeeFormEdit from '../pages/employeeMgt/EmployeeFormEdit'
import EmployeeSalaryForm from '../pages/employeeMgt/EmployeeSalaryForm'
import EmployeeSalaryFormEdit from '../pages/employeeMgt/EmployeeSalaryFormEdit'


const Router = () => {
    return (
        <Routes>


            {/* Home */}
            <Route path="/" element={<Navigate to='/index' />} />

            {/* Employee Management pages routing */}
            <Route path="/employeeDashboard" element={<EmployeeTable />} />
            <Route path="/employeeRegister" element={<EmployeeForm />} />
            <Route path="/employeeUpdate/:id" element={<EmployeeFormEdit />} />
            <Route path="/employeeLeave" element={<EmployeeLeave />} />
            <Route path="/employeeSalary/:id" element={<EmployeeSalaryForm />} />
            <Route path="/employeeSalaryUpdate/:id" element={<EmployeeSalaryFormEdit />} />


            {/* package */}
            <Route path="/standardpackages" element={<StandardPackages />} />
            <Route path="/editstandard" element={<EditStandard />} />
            <Route path="/promopackages" element={<PromoPackages />} />
            <Route path="/newpromo" element={<AddNewPromo />} />
            <Route path="/promoapproval" element={<PromoApproval />} />
            <Route path="/mmdashboard" element={<MMdashboard />} />

            <Route path="/promoapproval" element={<PromoApproval />} />

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


            {/* operation manager homepage */}
            <Route path="/home" element={<OMHome />} />

            {/* Schedule pages routing */}
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/changetimeslot/:id" element={<EditTimeSlot />} />
            <Route path="/changeinstrutor" element={<EditInstructor />} />
            <Route path="/trainings" element={<ScheduleTable />} />
            <Route path="/confirmation" element={<InstructorConfirmOM />} />
            <Route path="/bestinstructors" element={<BestInstructors />} />


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
          

            {/*payment*/}
            <Route path="/PaymentGateway" element={<PaymentGateway />} />
            <Route path="/Verification" element={<Verification />} />
            <Route path="/GetToken" element={<GetToken />} />
            <Route path="/PaymentHomepage" element={<PaymentHomepage />} />
            <Route path="/FinancialReportupload" element={<FinancialReportupload />} />
            <Route path="/FinancialReportRetrieve" element={<FinancialReportRetrieve />} />
            <Route path="/Edit/:id" element={<Edit/>}/>
            <Route path="/FinancialReportGenerate" element={<FinancialReportGenerate/>}/>

            {/* Supplier */}

            <Route path="/SupplierOrders" element={<SupplementOrders />} />
            <Route path="/SupplierOrderlist" element={<RecivedOrder />} />



        </Routes>
    )
}

export default Router;