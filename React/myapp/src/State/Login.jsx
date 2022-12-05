import { Component } from "react";

class Login extends Component {

    state = {
        username: " ",
        email: " ",
        password: " ",
    }

    usernameHandler = (event) => {
        this.setState({ username: event.target.value })
    }
    emailHandler = (event) => {
        this.setState({ email: event.target.value })
    }

    passwordHandler = (event) => {
        this.setState({ password: event.target.value })
    }

    render() {

        
        return (

            <div className="container mt-5">
                <pre>{JSON.stringify(this.state)}</pre>
                <div className="row">
                    <div className="col-md-6">

                        <form action="">

                            <label >Username</label>
                            <input type="text" onChange={this.usernameHandler} />
                            <br /> <br />

                            <label >Email</label>
                            <input type="email" onChange={this.emailHandler} />
                            <br /> <br />

                            <label >Password</label>
                            <input type="text" onChange={this.passwordHandler} />
                            <br /> <br />

                            <input type="submit" value="Login" />

                        </form>

                    </div>
                </div>
            </div>

        )
    }
}
export default Login