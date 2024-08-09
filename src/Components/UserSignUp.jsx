import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import "../Styles/UserSignUp.css"
import axios from 'axios'

export default function UserSignUp() {
    let [name,setname]=useState("")
    let [email,setemail]=useState("")
    let [phone,setphone]=useState("")
    let [gender,setgender]=useState("")
    let [age,setage]=useState("")
    let [password,setpassword]=useState("")
    let data={name,email,phone,gender,age,password}
    function createAdmin(e){
      e.preventDefault()
      axios.post('http://localhost:8080/api/users',data)
      .then((res)=>{
        alert("Data Added Sucessfully")
        console.log(res);
      })
      .catch((err)=>{
        alert("Invalid Data")
        console.log(err);
      })
    }
  return (
    <div className='usersignup'>
      <form onSubmit={createAdmin} action="">
        <label htmlFor="">Name</label>
        <input type="text" placeholder='Enter the Name'  required value={name} onChange={(e)=>{setname(e.target.value)}}/>
        <label htmlFor="">Email</label>
        <input type="text" placeholder='Enter the Email'  required value={email} onChange={(e)=>{setemail(e.target.value)}}/>
        <label htmlFor="">Phone</label>
        <input type="text" placeholder='Enter the Phone'  required value={phone} onChange={(e)=>{setphone(e.target.value)}}/>
        <label htmlFor="">Gender</label>
        <input type="text" placeholder='Enter the Gender'  required value={gender} onChange={(e)=>{setgender(e.target.value)}}/>
        <label htmlFor="">Age</label>
        <input type="text" placeholder='Enter the Travels_name'  required value={age} onChange={(e)=>{setage(e.target.value)}}/>
        <label htmlFor="">Password</label>
        <input type="text" placeholder='Enter the Password'  required value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
        <button className='btn btn-warning'>Register</button>
      </form>
    </div>
  )
}
