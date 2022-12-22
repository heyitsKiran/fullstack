import React, { Component } from 'react'

export class GadjetsFa extends Component {
    state = {
        Price: 27999,
        Qty: 1
    }

    incrHandler = () => {
        this.setState({ Qty: this.state.Qty + 1 })
    }

    decrHandler = () => {
        this.setState({ Qty: this.state.Qty - 1 })
    }
    render() {
        return (
            <div>
                <tr>
                    <td><h4>Price : {this.state.Price}</h4></td>
                    <br /><br />

                    <table className='table table-hover'>
                        <tr className="col-md-8">
                            <h3 >Cart Value</h3>
                            <tbody>

                                <h3>

                                    <td> <i class="fa fa-minus-circle" onClick={this.decrHandler}></i></td>
                                    <td> {this.state.Qty}</td>
                                    <td> <i class="fa fa-plus-circle" onClick={this.incrHandler}></i></td>
                                </h3>

                                <td><h3>{this.state.Price * this.state.Qty}</h3></td>
                            </tbody>
                        </tr>
                    </table>
                </tr >
            </div >
        )
    }
}

export default GadjetsFa