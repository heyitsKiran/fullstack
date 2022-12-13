import React, { Component } from 'react';

class Login1 extends Component {

    state = {

        username: " ",
        email: " ",
        password: " ",
        DOB: " ",

    }

    usernamehandler = (event) => {
        this.setState({ username: event.target.value })
    }
    emailhandler = (event) => {
        this.setState({ email: event.target.value })
    }
    passwordhandler = (event) => {
        this.setState({ password: event.target.value })
    }
    dobhandler = (event) => {
        this.setState({ DOB: event.target.value })
    }

    render() {

        return (

            <div>

                <h1>Register for Further Proceedings </h1>

                <div className='container mt-5'>

                    <pre>{JSON.stringify(this.state)}</pre>

                    <div className='row'>
                        
                        <div className='col-md-6'>


                            <form >

                                <label> UserName </label>
                                <input type="text" onChange={this.usernamehandler} />

                                <label>Email </label>
                                <input type="text" onChange={this.emailhandler} />

                                <label>Password </label>
                                <input type="passsword" onChange={this.passwordhandler} />

                                <label>Date of Birth  </label>
                                <input type="number" onChange={this.dobhandler} />
                                <br /><br />

                                <input type="submit" value="Login"></input>

                            </form>

                        </div>
                    </div>
                </div>



            </div>

        )
    }
}

export default Login1
