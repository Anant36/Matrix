import React, { useState } from "react";

export default function EmployeeForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    salary: "",
    address: "",
  });

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Employee Data:", formData);
    alert("Employee details submitted successfully!");
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow">
        <h2 className="text-center mb-4">Employee Detail Form</h2>

        <form onSubmit={submitHandler}>
          <div className="row">
            {/* Name */}
            <div className="col-md-6 mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={changeHandler}
                className="form-control"
                placeholder="Enter full name"
                required
              />
            </div>

            {/* Email */}
            <div className="col-md-6 mb-3">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={changeHandler}
                className="form-control"
                placeholder="example@mail.com"
                required
              />
            </div>

            {/* Phone */}
            <div className="col-md-6 mb-3">
              <label className="form-label">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={changeHandler}
                className="form-control"
                placeholder="9876543210"
                required
              />
            </div>

            {/* Department */}
            <div className="col-md-6 mb-3">
              <label className="form-label">Department</label>
              <select
                name="department"
                value={formData.department}
                onChange={changeHandler}
                className="form-select"
                required
              >
                <option value="">Select Department</option>
                <option value="HR">HR</option>
                <option value="Sales">Sales</option>
                <option value="Finance">Finance</option>
                <option value="IT">IT</option>
                <option value="Marketing">Marketing</option>
              </select>
            </div>

            {/* Salary */}
            <div className="col-md-6 mb-3">
              <label className="form-label">Salary</label>
              <input
                type="number"
                name="salary"
                value={formData.salary}
                onChange={changeHandler}
                className="form-control"
                placeholder="Enter salary"
                required
              />
            </div>

            {/* Address */}
            <div className="col-md-12 mb-3">
              <label className="form-label">Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={changeHandler}
                className="form-control"
                rows="3"
                placeholder="Enter full address"
                required
              ></textarea>
            </div>
          </div>

          <button className="btn btn-primary w-100 mt-3">Submit</button>
        </form>
      </div>
    </div>
  );
}
