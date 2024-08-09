import React from 'react'
import "../Styles/AddBus.css"
import axios from 'axios';
import { useState } from 'react';

export default function Addbus() {
    let[name,setname]=useState("")
    let[busNumber,setBus_number]=useState("");
    let[numberOfSeats,setNumber_of_seats]=useState("");
    let[from,setFrom_location]=useState("");
    let[to,setTo_location]=useState("");
    let[dateOfDeparture,setDate_of_departure]=useState("");
    let data={name,busNumber,numberOfSeats,from,to,dateOfDeparture};
    let admin=JSON.parse(localStorage.getItem("Admin"))
    console.log(admin);
    console.log(typeof(admin));
    function addbus(e) {
        e.preventDefault()
        axios.post(`http://localhost:8080/api/buses/${admin.id}`,data)
        .then((res)=>{
            alert("Bus Added")
        })
        .catch((err)=>{
            console.log(err);
            alert("Failed to add Bus");
        })
    }
  return (
    <div className='addbus'>
       <form action="">
                <label htmlFor="">
                    Name
                </label>
                <input type="text" required value={name} onChange={(e)=>{setname(e.target.value)}} placeholder="enter name" />
                <label htmlFor="">
                    Bus Number
                </label>
                <input type="text" required value={busNumber} onChange={(e)=>{setBus_number(e.target.value)}} placeholder="enter bus number" />
                <label htmlFor="">
                    Number Of Seats
                </label>
                <input type="text" required value={numberOfSeats} onChange={(e)=>{setNumber_of_seats(e.target.value)}} placeholder="enter number of seats" />
                <label htmlFor="">
                    From Location
                </label>
                <input type="text" required value={from} onChange={(e)=>{setFrom_location(e.target.value)}} placeholder="FROM" />
                <label htmlFor="">
                    To Location
                </label>
                <input type="text" value={to} required onChange={(e)=>{setTo_location(e.target.value)}} placeholder="TO" />
                <label htmlFor="">
                    Date Of Departure
                </label>
                <input type="date" value={dateOfDeparture} required onChange={(e)=>{setDate_of_departure(e.target.value)}} placeholder="enter Date" />
                <button onClick={addbus} id="addbusbutton">Add Bus</button>
            </form>
    </div>
  )
}
