import React from "react"
import { Component } from "react"

class Wish1 extends Component {

    state = { msg: "Heya" }

    w11Handler = (event) => {
        this.setState({msg : "How you doin!"})
    }
    w22Handler = (event) => {
        this.setState({msg : "wassup"})
    }

    render() {

        return (
            <>
                <h1> Wish : {this.state.msg}</h1>
                <button onClick={this.w11Handler}>w1</button>
                <button onClick={this.w22Handler}>w2</button>

            </>
        )
    }

}
export default Wish1