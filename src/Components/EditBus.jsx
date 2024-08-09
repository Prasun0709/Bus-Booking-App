import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom';
import "../Styles/EditBus.css"

export default function EditBus() {
    let[name,setname]=useState("")
    let[busNumber,setBus_number]=useState("");
    let[numberOfSeats,setNumber_of_seats]=useState("");
    let[from,setFrom_location]=useState("");
    let[to,setTo_location]=useState("");
    let[dateOfDeparture,setDate_of_departure]=useState("");
    

    let params= useParams()
    useEffect(()=>{
        axios.get(`http://localhost:8080/api/buses/${params.id}`)
        .then((res)=>{
            console.log(res.data.data);
            setname(res.data.data.name)
            setBus_number(res.data.data.busNumber)
            setFrom_location(res.data.data.from)
            setTo_location(res.data.data.to)
            setNumber_of_seats(res.data.data.numberOfSeats)
            setDate_of_departure(res.data.data.dateOfDeparture)
        })
    },[params.id])
    let newdata={name,busNumber,numberOfSeats,from,to,dateOfDeparture}
    function editBus(e){
        e.preventDefault()
        axios.put(`http://localhost:8080/api/buses/${params.id}`,newdata)
        .then((res)=>{
            alert("Bus Details Edited Successfully")
        })
        .catch((err)=>{
            alert("Invalid Data Format")
        })
    }
  return (
    <div className='editbus'> 
       <form onSubmit={editBus} action="">
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
                <button className='btn btn-danger' onClick={editBus} >Edit Bus</button>
            </form>
    </div>
  )
}
