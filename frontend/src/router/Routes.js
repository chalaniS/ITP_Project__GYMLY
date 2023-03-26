import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'


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


            {/*payment*/}
            <Route path="/PaymentMethodsandPaymentType" element={<PaymentMethodsandPaymentType />} />
            {/* <Route path="/SaveCard" element={<SaveCard />} /> */}
            <Route path="/Verification" element={<Verification />} />
            <Route path="/GetToken" element={<GetToken />} />
            <Route path="/PaymentHomepage" element={<PaymentHomepage />} />
            <Route path="/FinancialReportupload" element={<FinancialReportupload />} />
            <Route path="/FinancialReportRetrieve" element={<FinancialReportRetrieve />} />



        </Routes>
    )
}

export default Router;