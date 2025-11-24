import React, { Component } from 'react';
 
class Card extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         name: "elon", count: 0, show: true, data: [1, 2, 3, 4],
    //         details: { name: "raj", age: 22 }
    //     }
    // }
    render() {
        const { employees } = this.props;
 
        if (employees.length === 0) {
            return <p className='text-center mt-4 text-muted'>No employee data available yet.</p>;
        }
 
        return (
            <div className='table-responsive mt-5'>
                <h3 className='text-center mb-3'>Employee Data</h3>
                <table className='table table-bordered table-striped align-middle text-center'>
                    <thead className='table-dark'>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Salary</th>
                            <th>Number</th>
                            <th>Team Name</th>
                            <th>Designation</th>
                            <th>Address</th>
                            <th>Married</th>
                            <th>Gender</th>
                            <th>Skill</th>
                            <th>Profile URL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((emp, index) => (
                            <tr key={index}>
                                <td>{emp.name}</td>
                                <td>{emp.age}</td>
                                <td>{emp.salary}</td>
                                <td>{emp.number}</td>
                                <td>{emp.teamname}</td>
                                <td>{emp.designation}</td>
                                <td>{emp.address}</td>
                                <td>{emp.married}</td>
                                <td>{emp.gender}</td>
                                <td>{emp.skill}</td>
                                <td>
                                    <a href={emp.profileurl} target="_blank" rel="noreferrer">
                                        View
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}
 
 
export default Card
 
 