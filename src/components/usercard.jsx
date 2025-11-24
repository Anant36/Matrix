import React, { Component } from "react";

class usercard extends Component {
    render() {
        return (
            <>
                <div className="p-3 border-3  border border-primary bg-danger rounded-3">
                    <h2>id:{this.props.id}</h2>
                    <h1>Fisrt Name:{this.props.firstName}</h1>
                    <h1>Last Name: {this.props.lastName}</h1>
                    <h1>Age: {this.props.age}</h1>
                    <h1>Gender: {this.props.gender}</h1>
                    <h1>Phone: {this.props.phone}</h1>

                </div>

            </>)
    }
}

export default usercard