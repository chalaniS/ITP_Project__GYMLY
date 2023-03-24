import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'


const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to='/index' />} />

        </Routes>
    )
}

export default Router;