import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'


import OMHome from '../pages/OMdashboard/omHome'


import OMHome from '../pages/OMdashboard/OMHome'




import PaymentMethodsandPaymentType from '../pages/Payment/PaymentMethodsandType'
import SaveCard from '../pages/Payment/SaveCard'
import Verification from '../pages/Payment/Verification'
import GetToken from '../pages/Payment/GetToken'
import PaymentHomepage from '../pages/Payment/PaymentHomepage'
import FinancialReportupload from '../pages/Payment/FinancialReportupload'
import FinancialReportRetrieve from '../pages/Payment/FinancialReportRetrieve'






const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to='/index' />} />

            {/* <Route path="/home" element={<OMHome />} /> */}

            {/* operation manager homepage */}
            <Route path="/home" element={<OMHome />} />


            {/* Schedule pages routing
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/changetimeslot" element={<EditTimeSlot />} />
            <Route path="/changeinstrutor" element={<EditInstructor />} />
            <Route path="/trainings" element={<ScheduleTable />} />
            <Route path="/confirmation" element={<InstructorConfirmOM />} /> */}



            {/* package
            <Route path="/standardpackages" element={<StandardPackages />} />
            <Route path="/editstandard" element={<EditStandard />} />
            <Route path="/promopackages" element={<PromoPackages />} />
            <Route path="/newpromo" element={<AddNewPromo />} />
            <Route path="/promoapproval" element={<PromoApproval />} /> */}

            {/* User Management*/}
            {/* <Route path="/Loging" element={<Login />} />
            <Route path="/Registation" element={<Registation />} />
            <Route path="/Dashboard" element={<Dashboard />} /> */}
            {/*User Management */}


            {/*Customer Affairs Management*/}
            {/* <Route path="/ServiceFeedbackform" element={<ServiceFeedbackform />} />
            <Route path="/InstructorFeedbackform" element={<InstructorFeedbackform />} />
            <Route path="/FeedbackApproval" element={<FeedbackApproval />} />
            <Route path="/FeedbackOptions" element={<FeedbackOptions />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/SearchInstructor" element={<SearchInstructor />} /> */}


            {/*payment*/}
            <Route path="/PaymentMethodsandPaymentType" element={<PaymentMethodsandPaymentType />} />
            <Route path="/SaveCard" element={<SaveCard />} />
            <Route path="/Verification" element={<Verification />} />
            <Route path="/GetToken" element={<GetToken />} />
            <Route path="/PaymentHomepage" element={<PaymentHomepage />} />
            <Route path="/FinancialReportupload" element={<FinancialReportupload />} />
            <Route path="/FinancialReportRetrieve" element={<FinancialReportRetrieve />} />




        </Routes>
    )
}

export default Router;