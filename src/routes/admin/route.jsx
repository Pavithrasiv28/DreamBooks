import React from 'react'
import AdminDashboardModule from '../../pages/admin/dashboard/dashboard.jsx'
import AdminBookModule from '../../pages/admin/books/books.jsx'
import AdminAuthorModule from '../../pages/admin/authors/authors.jsx'
import AdminEmployeeModule from '../../pages/admin/employee/employee.jsx' 
import AdminLayout from '../../layout/admin_layout/layout.jsx'
import {Route, Routes } from 'react-router-dom'

function AdminRoute() {
  return (
    <>
     <Routes>
        <Route path='dashboard' element={<AdminDashboardModule/>}/>
        <Route path='books' element={<AdminBookModule/>}/>
        <Route path='authors' element={<AdminAuthorModule/>}/>
        <Route path='employees' element={<AdminEmployeeModule/>}/>
     </Routes>
    </>
  )
}

export default AdminRoute