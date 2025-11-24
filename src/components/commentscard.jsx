import React, { Component } from "react";
class commentscard extends Component {
    render() {
        return (
            <>
                <div className="p-3 border-3 w-fit-content border border-info bg-secondary rounded-3 square-box w-100 ">
                    <h2>id:{this.props.id}</h2>
                    <h1>Body: {this.props.body}</h1>
                    <h1>Post ID:{this.props.postId}</h1>
                    <h1>Likes: {this.props.likes}</h1>

                </div>

            </>)
    }
}

export default commentscard;
