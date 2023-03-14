import React, { Component } from 'react';

class Handle_2 extends Component {
    state = { msg: "lets do Math" }

    mathHandler = (msg) => {
        this.setState({ msg: msg })
    }

    render() {
        return (
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={this.mathHandler.bind(this, "3 x 3")} >6</button>
                <button onClick={this.mathHandler.bind(this, "3^2")} >9</button>
            </div>
        );
    }
}

export default Handle_2;
