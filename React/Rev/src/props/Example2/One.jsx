import React, { Component } from 'react'

class One extends Component {

    state = {
        message: "hey there how your doin!"
    }

    gmHandler = (event) => {
        this.setState({message : "Good Morning"})
    }

    gnHandler = (event) => {
        this.setState({message : "Good Night"})

    }

    render() {
        return (

            <div>
                <h1>Greet : {this.state.message}</h1>
                <button onClick={this.gmHandler} >Morning</button>
                <button onClick={this.gnHandler} >Night</button>
            </div>
        )
    }
}

export default One