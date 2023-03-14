import React, { Component } from 'react';

class Ex2 extends Component {
    render() {

        const {employee1} = this.props

        return (

            <div>
                <p>{JSON.stringify(this.props)}</p>


                <table>
                    <tr>
                        <td>
                            <h1> Name : {employee1.name} </h1>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h1> Age : {employee1.age} </h1>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h1> Email : {employee1.email} </h1>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h1> Location : {employee1.location} </h1>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h1> Message : {this.props.message1.message} </h1>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h1> Message_Name : {this.props.message1.user} </h1>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h1> Mail : {this.props.mail1} </h1>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Ex2;
