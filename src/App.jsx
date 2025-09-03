import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginPage from './pages/auth/login/login.jsx'
import AdminLayout from './layout/admin_layout/layout.jsx'
import AuthorLayout from './layout/author_layout/layout.jsx'
import AdminRoute from './routes/admin/route.jsx'
import './App.css'

function App() {

  return (
    <>
       <Routes>
         <Route path='/' element={<LoginPage/>}/>
          {/* Admin group */}
           <Route path='/admin/*' element={<AdminLayout/>}>
             <Route path="*" element={<AdminRoute/>}/>
           </Route>
         {/* <Route path='/author/*' element={<AuthorLayout/>}>
           <Route path="*" element/>
         </Route> */}
       </Routes>
    </>
  )
}

export default App