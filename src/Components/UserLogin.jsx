import React from 'react'
import "../Styles/UserLogin.css"
import { Link } from 'react-router-dom'
export default function UserLogin() {
  return (
    <div className='loginuser'>
       <form action="">
        <label htmlFor="">UserName</label>
        <input type="text" placeholder='Enter the UserName' required/>
        <label htmlFor="">Password</label>
        <input type="password" placeholder='Enter the Password' required/>
        <button className='btn btn-secondary'>Login</button>
      </form>
      <p>Are you a New User? <Link to="/usersignup">Register Here....</Link> </p>
    </div>
  )
}
