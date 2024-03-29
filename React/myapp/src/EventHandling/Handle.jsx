
//import React, { Component } from 'react'
//
//export class Handle extends Component {
//    state = { msg: "Hello" }
//
//    updateHandler = (msg) => {
//        this.setState({ msg: msg })
//    }s
//    render() {
//        return (
//            <div>
//                <div className='navbar navbar-dark bg-dark text-white'>
//                    <h1>Message: {this.state.msg}</h1>
//                </div>
//                <button onClick={this.updateHandler.bind(this, "GoodMorning")} >GM</button>
//                <button onClick={this.updateHandler.bind(this, "GoodNight")} >GN</button>
//            </div>
//        )
//    }
//}
//
//
//export default Handle


import React, { Component } from 'react';

class Handle extends Component {
    state = { msg: "Hey Everyone" }

    updateHandler = (msg) => {
        this.setState({ msg: msg })
    }
    render() {
        return (
            <div >
                <h1 className='navbar navbar-dark bg-dark text-white'>Message: {this.state.msg}</h1>
                <div >
                    <button onClick={this.updateHandler.bind(this, "Bengaluru Fc")}>BFC</button>
                    <button onClick={this.updateHandler.bind(this, "Kerala Blasters")}>KBFC</button>
                </div>
            </div>

        );
    }
}

export default Handle;



