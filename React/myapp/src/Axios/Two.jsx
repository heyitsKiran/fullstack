import React from "react"
import { Component } from "react"
import Axios from "axios"


class Two extends Component {

    constructor(props) {
        super(props)

        this.state = {
            user: []

        }
    }

    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                this.setState({ user: response.data })
            })
            .catch(() => { })
    }


    render() {
        return (
            <div className="container mt-6">
                <div className="row">
                    <pre>{JSON.stringify(this.state.user)}</pre>
                    <div className="col-md-6">
                        <div>
                            {
                                this.state.user.length > 0 ? <>

                                    <table className="table table-hover">
                                        <thead className="bg-dark text-white">

                                            <tr>
                                                <th>ID</th>
                                                <th>Name</th>
                                                <th>Address</th>
                                            </tr>

                                        </thead>
                                        <tbody>

                                            {this.state.user.map((user) => {
                                                return (
                                                    <tr>
                                                        <td>{user.id}</td>
                                                        <td>{user.name}</td>
                                                        <td>{user.address.city}</td>
                                                    </tr>)
                                            })}

                                        </tbody>
                                    </table>

                                </> : null

                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Two