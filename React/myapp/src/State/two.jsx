import { Component } from "react";

class Message1 extends Component {

    state = { msg: "Hello World" }

    gmhandler = () => {
        this.setState({ msg : "Good Morning Voi"})
    }

    gnhandler = () => {
        this.setState({ msg : "Good Night Voi"})
    }

    render() {

        return (

            <div>
                <h1>Message : {this.state.msg}</h1>
                <button onClick={this.gmhandler} >GM</button>
                <button onClick={this.gnhandler} >GN</button>

            </div>
        )
    }
} export default Message1