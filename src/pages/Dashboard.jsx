import React from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate =useNavigate()


  const handleLogout = () =>{
    localStorage.removeItem('loginData')
    localStorage.removeItem('authData')
    // localStorage.clear()
    navigate('/Login')
  }
  return (
    <div>
      <Navbar title="task management" onLogout={handleLogout} />
      <h1>Welcome to dashboard</h1>
    </div>
  )
}

export default Dashboard
