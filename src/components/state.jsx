import React, { Component } from 'react'
import Card from './Card';
export default class State extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: "",
            salary: "",
            number: "",
            teamname: "",
            designation: "",
            address: "",
            married: "",
            gender: "",
            skill: "",
            profileurl: "",
            employees: []
        };
    }
 
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };
 
    handleSubmit = (e) => {
        e.preventDefault();
 
        const {
            name, age, salary, number, teamname,
            designation, address, married, gender,
            skill, profileurl
        } = this.state;
 
        const newEmployee = {
            name, age, salary, number, teamname,
            designation, address, married, gender,
            skill, profileurl
        };
 
        this.setState((prevState) => ({
            employees: [...prevState.employees, newEmployee],
            name: "",
            age: "",
            salary: "",
            number: "",
            teamname: "",
            designation: "",
            address: "",
            married: "",
            gender: "",
            skill: "",
            profileurl: ""
        }));
    };
 
    render() {
        const {
            name, age, salary, address, skill, profileurl,
            gender, married, number, teamname, designation, employees
        } = this.state;
 
        return (
            <div className='container mt-5'>
                <h2 className='text-center mb-4'>Employee Form</h2>
 
                <form onSubmit={this.handleSubmit} className='card p-4 shadow'>
                    <input type="text" className="form-control mb-3" name="name" placeholder="Name" value={name} onChange={this.handleChange} />
                    <input type="number" className="form-control mb-3" name="age" placeholder="Age" value={age} onChange={this.handleChange} />
                    <input type="number" className="form-control mb-3" name="salary" placeholder="Salary" value={salary} onChange={this.handleChange} />
                    <input type="number" className="form-control mb-3" name="number" placeholder="Number" value={number} onChange={this.handleChange} />
                    <input type="text" className="form-control mb-3" name="teamname" placeholder="Team Name" value={teamname} onChange={this.handleChange} />
                    <input type="text" className="form-control mb-3" name="designation" placeholder="Designation" value={designation} onChange={this.handleChange} />
                    <input type="text" className="form-control mb-3" name="address" placeholder="Address" value={address} onChange={this.handleChange} />
 
                    {/* Married */}
                    <div>
                        <div className="mb-3 form-control w-25">
                            <label className='me-3 fw-bold'>Married:</label>
                            <label className="me-2">
                                <input className="" type="radio" name="married" value="Yes" checked={married === "Yes"} onChange={this.handleChange} /> Yes
                            </label>
                            <label>
                                <input type="radio" name="married" value="No" checked={married === "No"} onChange={this.handleChange} /> No
                            </label>
                        </div>
 
                        {/* Gender */}
                        <div className="mb-3 form-control w-50">
                            <label className='me-3 fw-bold'>Gender:</label>
                            <label className="me-2">
                                <input type="radio" name="gender" value="Male" checked={gender === "Male"} onChange={this.handleChange} /> Male
                            </label>
                            <label className="me-2">
                                <input type="radio" name="gender" value="Female" checked={gender === "Female"} onChange={this.handleChange} /> Female
                            </label>
                            <label>
                                <input type="radio" name="gender" value="Other" checked={gender === "Other"} onChange={this.handleChange} /> Other
                            </label>
                        </div>
                    </div>
 
                    <select name="skill" className="form-select mb-3 w-25" value={skill} onChange={this.handleChange}>
                        <option value="">Select Skill</option>
                        <option>Frontend</option>
                        <option>Backend</option>
                        <option>Software Developer</option>
                    </select>
 
                    <input type="url" className='form-control mb-3 w-50' name='profileurl' placeholder='Profile URL' value={profileurl} onChange={this.handleChange} />
 
                    <button className='btn btn-primary  m-auto d-block py-2 px-4' >Submit</button>
                </form>
 
                <Card employees={employees} />
            </div>
        );
    }
}

