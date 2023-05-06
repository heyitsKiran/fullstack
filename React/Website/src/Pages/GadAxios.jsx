import React, { Component } from 'react'
import Axios from 'axios'

export class GadAxios extends Component {
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
            .catch(() => {

            })

    }

    render() {
        return (
            <div className='container mt-5 '>
                {
                    this.state.user.length > 0 ? <>
                        <table className='table  table-hover '>
                            <thead className=' table-dark text-white'>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Phone</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.user.map((user) => {
                                        return (
                                            <tr>
                                                <td>{user.id}</td>
                                                <td>{user.name}</td>
                                                <td>{user.phone}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </> : null
                }
            </div>
        )
    }
}

export default GadAxios