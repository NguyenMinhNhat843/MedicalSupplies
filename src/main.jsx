import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import ForgotPassword from './pages/Auth/ForgotPassword'
import CheckEmail from './pages/Auth/CheckEmail'
import CreateNewPassword from './pages/Auth/CreateNewPassword'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword/>} />
        <Route path='/check-email' element={<CheckEmail/>}/>
        <Route path='/create-new-password' element={<CreateNewPassword/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)