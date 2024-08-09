import React from 'react'
import Drop_down from './Drop_down'
import "../Styles/AdminNavbar.css"

export default function AdminNavbar() {
  return (
    <div className='adminnavbar'>
     <div className='logo'>
        <h2><i>YATRA</i><sup><i>.in</i></sup></h2> 
        <img  src="https://i.pinimg.com/736x/b2/ab/f9/b2abf95fe8a3319824d8f1f1a1b8a43b.jpg" alt="im" />
     </div>
     <div className="options">
        <Drop_down/>
     </div>
    </div>
  )
}
