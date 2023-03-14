import React, { Component } from 'react';
import Ex2 from './Ex2';

class Ex1 extends Component {

    mail = "Mail Delivered"

    message = {
        message: "Good Morning",
        user: "sunil chetri"
    }

    constructor() {
        super()

        this.state = {

            employee: {
                empcode: "11",
                name: "cristiano",
                age: "38",
                email: "cristiano@07.com",
                location: "portugal",
            }
        }
    }

    render() {
        return (

            <div>

                <Ex2 employee1={this.state.employee} message1={this.message} mail1={this.mail}  />

            </div>
        );
    }
}

export default Ex1;

