import { Component } from "react";

class Kiran extends Component {

    state = { msg: "Heya..." }

    w1handler = () => {
        this.setState({ msg: "Wassup" })
    }
    w2handler = () => {
        this.setState({ msg: "How are you" })
    }

    render() {

        return (

            <div>

                <h1>Wish : {this.state.msg}</h1>

                <button onClick={this.w1handler} >w1</button>
                <button onClick={this.w2handler} >w2</button>


            </div>
        )
    }

} export default Kiran