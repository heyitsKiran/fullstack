import React from "react"
import { Component } from "react";
import CompB from "./CompB";

class CompA extends Component {

    Player1 = "cristiano"
    Player2 = "messi"
    Player3 = "chettri"

    render() {

        return (

            <div>
                <h1>Bengaluru FC</h1>
                <div>
                    <CompB Play1={this.Player1} Play2={this.Player2} Play3={this.Player3} />
                </div>
            </div>
        )
    }
}
export default CompA