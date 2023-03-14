import React, { Component } from 'react'

class Two extends Component {

    state = {
        qty: 1
    }

    incrHandler = (event) => {
        this.setState({ qty: this.state.qty + 1 })
    }

    decrHandler = (event) => {
        this.setState({ qty: this.state.qty - 1 })
    }

    render() {
        return (

            <div>

                <h1>Qty : {this.state.qty}</h1>
                <button onClick={this.incrHandler} >+</button>
                <button onClick={this.decrHandler} >-</button>

            </div>
        )
    }
}

export default Two