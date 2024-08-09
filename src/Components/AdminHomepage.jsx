import React from 'react'
import AdminNavbar from './AdminNavbar'
import { Route, Routes } from 'react-router-dom'
import AdminDashBoard from './AdminDashBoard'
import Addbus from './Addbus'
import ViewBus from './ViewBus'
import EditBus from './EditBus'
import BookBus from './BookBus'

export default function AdminHomepage() {
  return (
    <div>
      <AdminNavbar/>
      <Routes>
        <Route path='/' element={<AdminDashBoard/>}/>
        <Route path='/addbus' element={<Addbus/>}/>
        <Route path='/viewbus' element={<ViewBus/>}/>
        <Route path='/editbus/:id' element={<EditBus/>}/>
        <Route path='/bookbus/:id' element={<BookBus/>}/>       
      </Routes>
    </div>
  )
}
