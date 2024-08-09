import React from 'react'
import { Dropdown } from 'react-bootstrap'

export default function Drop_down() {
  return (
    <div className='dropdown'>
      
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        ACCOUNTS
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/adminhomepage/addbus">Add Bus</Dropdown.Item>
        <Dropdown.Item href="/adminhomepage/viewbus">View Buses List</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Edit Profile</Dropdown.Item>
        <Dropdown.Item href="/">Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
  )
}
