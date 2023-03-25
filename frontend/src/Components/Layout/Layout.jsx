import React from 'react'
import Header from '../Common/Navbar'
import Footer from '../Common/Footer'
import Router from '../../router/Routes'


const Layout = () => {
    return (
        <>
            <Header />
            <Router />
            {/* <Footer /> */}
        </>
    )
}

export default Layout;