import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import TaskList from '../components/TaskList'

const Dashboard = () => {
  const navigate =useNavigate()
  const [tasks,setTasks]=useState([])

  useEffect(()=>{
    fetchData()
  },[])

const fetchData =async() =>{
  try{

  
  const response = await fetch("http://localhost:3000/tasks")
  const data=response.json();
  setTasks(data);
  }
  catch(error){
    console.log(error)
  }
};
  const handleLogout = () =>{
    localStorage.removeItem('loginData')
    localStorage.removeItem('authData')
    // localStorage.clear()
    navigate('/Login')
  }
  return (
    <div>
      <Navbar title="task management" onLogout={handleLogout} />
      <h1>MY TASK</h1>
      <TaskList />
      <h1>Welcome to dashboard</h1>
    </div>   
  )
}

export default Dashboard
