import { Component } from "react";
import '../App.css';
import Card from "./card";
class About extends Component {
    render() {
        let cs = { border: "2px solid blue", padding: "90px" }
        return (
            <div className="about" style={cs}>
                <h1>ABout Component</h1>
                <div className="cards">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        )
    }
}
export default About;