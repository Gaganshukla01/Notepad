import React from 'react'
import Home from './pages/Home'
import { Route,Routes } from 'react-router-dom'
import Login from './pages/Login'
import ResetPassword from './pages/ResetPassword'
import EmailVerify from './pages/EmailVerify'
import Notes from './pages/Notes'
import { ToastContainer} from 'react-toastify';


function App() {
  return (
    <>
    <ToastContainer/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/resetPassword' element={<ResetPassword/>}/>
        <Route path='/emailVerify' element={<EmailVerify/>}/>
        <Route path='/notes' element={<Notes/>}/>
    </Routes>
  
    </>
  )
}

export default App
