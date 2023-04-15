import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'




import PaymentGateway from '../pages/Payment/PaymentGateway'
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
            <Route path="/PaymentGateway" element={<PaymentGateway />} />
            <Route path="/Verification" element={<Verification />} />
            <Route path="/GetToken" element={<GetToken />} />
            <Route path="/PaymentHomepage" element={<PaymentHomepage />} />
            <Route path="/FinancialReportupload" element={<FinancialReportupload />} />
            <Route path="/FinancialReportRetrieve" element={<FinancialReportRetrieve />} />



        </Routes>
    )
}

export default Router;