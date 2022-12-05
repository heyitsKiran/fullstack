import React from "react"
import { Component } from "react";
import Axios from 'axios';

class Contacts extends Component {

    constructor(props) {
        super(props)

        this.state = {
            user: []
        }
    }

    componentDidMount() {

        Axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                this.setState({ user: response.data })
            })
            .catch(() => { })

    }
    render() {
        return (
            <div>
                <div className='container mt-5'>
                    <div className='row'>
                        <pre>{JSON.stringify(this.state.user)}</pre>
                        <div className="col-md-5">

                            {
                                this.state.user.length > 0 ? <>

                                    <table className='table table-hover'>
                                        <thead className='bg-dark text-white'>
                                            <tr>
                                                <th>ID</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Zipcode</th>
                                                <th>Phone</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.user.map((user) => {
                                                    return <tr>
                                                        <td>{user.id}</td>
                                                        <td>{user.name}</td>
                                                        <td>{user.address.zipcode}</td>
                                                        <td>{user.phone}</td>
                                                    </tr>
                                                })
                                            }
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

export default Contacts
