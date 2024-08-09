import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "../Styles/ViewBus.css"
import { useNavigate } from 'react-router-dom'

export default function ViewBus() {
  let [bus, setbus] = useState([])
  let navigate = useNavigate()
  useEffect(() => {
    axios.get(`http://localhost:8080/api/buses`)
      .then((res) => {
        console.log(res);
        setbus(res.data.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

   function removeBus(id,busNumber){
    axios.delete(`http://localhost:8080/api/buses/${id}`)
    .then((res)=>{
      alert(`Bus Number ${busNumber} has been removed from the list`)
    })
    .catch((err)=>{
      alert("Cannot Remove this item")
    })
   }
   function editNavigate(id){
    navigate(`/adminhomepage/editbus/${id}`)
   }
    // window.location.assign("/adminhomepage/viewbus")
  return (
    <div className='ViewBus'>
     {
      bus.map((item)=>{
        return(
          <div className='bus_details'>
            <h4>{item.name}</h4>
            <i>Seats: {item.numberOfSeats}</i>
            <p>From : {item.from}</p>
            <p>To : {item.to}</p>
            <p>Date : {item.dateOfDeparture}</p>
            <span>Bus Number :{item.busNumber}</span>
            <button className='btn btn-warning' onClick={()=>{editNavigate(item.id)}}>Edit</button>
            <button className='btn btn-danger' onClick={()=>{removeBus(item.id,item.busNumber)}}>Delete</button>
          </div>
        )
      })
     }
    </div>
  )
}
