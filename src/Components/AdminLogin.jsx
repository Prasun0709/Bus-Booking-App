import React, { useState } from 'react'
import "../Styles/AdminLogin.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function AdminLogin() {
  let [email,setusername]=useState("")
  let [password,setpassword]=useState("")

  let navigate= useNavigate()

  function verify(e){
    e.preventDefault()
    axios.post(`http://localhost:8080/api/admins/verify-by-email?email=${email}&password=${password}`)
    .then((res)=>{
      navigate('/adminhomepage')
      console.log(res.data.data);
      alert("Login Sucessfully")
      localStorage.setItem("Admin",JSON.stringify(res.data.data))
    })
    .catch((err)=>{
      alert("Login Failed")
    })
  }
  return (
    <div className='adminlogin'>
      <form onSubmit={verify} action="">
        <label htmlFor="">UserName</label>
        <input type="text" value={email} onChange={(e)=>{setusername(e.target.value)}} placeholder='Enter the UserName' required/>
        <label htmlFor="">Password</label>
        <input type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}}  placeholder='Enter the Password' required/>
    
       <button className="btn btn-primary">LOGIN</button>
    
      </form>
      
      <p>Are you a New User? <Link to="/adminsignup">Register Here....</Link> </p>
    </div>
  )
}
