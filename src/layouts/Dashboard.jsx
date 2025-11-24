import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
 
function Dashboard() {
  return (
    <div className='bg-info  border d-flex justify-content-start'>
      <div className="Sidebar w-25 vh-100 position-fixed bg-primary p-3 d-flex flex-column justify-content-between">
        <div className='d-flex flex-column'>
          <NavLink to="/Dashboard" className='btn btn-secondary mb-2'>Dashboard</NavLink>
          <NavLink to="employeeForm" className='btn btn-secondary mb-2'>Employee Detail</NavLink>
          <NavLink to="/Dashboard/Employee_table" className='btn btn-secondary mb-2'>Employee Table</NavLink>
          <NavLink to='/Dashboard/Form' className='btn btn-secondary mb-2'>Form</NavLink>
 
        </div>
        <div className="d-flex flex-column">
          <button className='btn btn-secondary mb-2'> Logout</button>
          <NavLink to="/" className='btn btn-secondary mb-2'>Back to home</NavLink>
        </div>
      </div>
      <div className="main d-flex w-75 bg-danger justify-content-end  " style={{ marginLeft: "25%" , minHeight:"100vh"}}>
        <Outlet />
      </div>
    </div>
  )
}
 
export default Dashboard