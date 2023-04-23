import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'


import OMHome from '../pages/OMdashboard/OMHome'

import Schedule from '../pages/schedule/Schedule'
import EditInstructor from '../pages/schedule/scheduleEdit/EditInstructor'
import EditTimeSlot from '../pages/schedule/scheduleEdit/EditTimeSlot'
import ScheduleTable from '../pages/schedule/ScheduleTable'
import InstructorConfirmOM from '../pages/schedule/InstructorConfirmOM'
import InstructurChart from '../pages/schedule/InstructorChart/InstructurChart'

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

            {/* operation manager homepage */}
            <Route path="/home" element={<OMHome />} />

            {/* Schedule pages routing */}
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/changetimeslot" element={<EditTimeSlot />} />
            <Route path="/changeinstrutor" element={<EditInstructor />} />
            <Route path="/trainings" element={<ScheduleTable />} />
            <Route path="/confirmation" element={<InstructorConfirmOM />} />
            <Route path="/instchart" element={<InstructurChart />} />

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