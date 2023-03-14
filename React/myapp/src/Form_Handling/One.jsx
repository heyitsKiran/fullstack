import React, { Component } from 'react';

class Form1 extends Component {
    state = {
        email: "",
        password: ""
    }

    mailHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    passwordHandler = (event) => {
        this.setState({ [event.target.value]: event.target.value })
    }

    submitHandler = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    render() {
        return (

            <div>
                <form onSubmit={this.submitHandler}>
                    <br />
                    <label>Email</label>
                    <input type="text" placeholder='Enter vaild Email id' onChange={this.mailHandler} />
                    <br /><br />
                    <label>Password</label>
                    <input type="password" placeholder='Enter Strong password' onChange={this.passwordHandler} />
                    <br /><br />
                    <input type="submit" value="Login..." />

                </form>

            </div>
        );
    }
}

export default Form1;
