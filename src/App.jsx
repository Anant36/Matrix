import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './layouts/Navbar.jsx';
import Dashboard from './layouts/Dashboard.jsx';
import EmployeeForm from './emp/EmployeeForm.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

export default function App() {
  let location = useLocation();

  return (
    <>
      {location.pathname !== "/dashboard" && <Navbar />}

      <Routes>
       <Route path="/dashboard" element={<Dashboard/>}>
        <Route path='employeeForm' element={<EmployeeForm/>}></Route>        
        </Route>

      </Routes>
    </>
  );
}
