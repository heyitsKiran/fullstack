import React, { Component } from 'react'

class Content extends Component {

    state = {
        name: "HP Laptop",
        model: "XC07Il6d",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn_QlZmzNryaaw9U948e0W9Kzivlt3Ga5SYgTc1mIajW8DVUQ9zRyP6ZH4Kjte8I0hKU8&usqp=CAU",
        Qty: 1,
        Price: 25999
    }

    incrHandler = () => {
        this.setState({ Qty: this.state.Qty + 1 })
    }

    decrHandler = () => {
        this.setState({ Qty: this.state.Qty - 1 })

    }

    // proHandler = () => {
    //     this.setState({ Price:  })

    // }

    render() {

        return (

            <div className='container mt-5'>
                <div className='row'>
                    <div className="col-md-10">

                        <table className='table table-hover'>
                            <thead className='bg-dark text-light'>
                                <tr>
                                    <td>Product Name</td>
                                    <td>Product Model</td>
                                    <td>Product Image</td>
                                    <td>Product Qty</td>
                                    <td>Product Price</td>
                                </tr>
                            </thead>
                            <tbody className='bg-light'>
                                <tr>
                                    <td>{this.state.name}</td>
                                    <td>{this.state.model}</td>
                                    <td><img src={this.state.image} alt="" /></td>
                                    <td><i className='fa fa-minus-circle' onClick={this.decrHandler}></i>{this.state.Qty}<i className='fa fa-plus-circle' onClick={this.incrHandler}></i></td>
                                    <td>{this.state.Price * this.state.Qty}</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        )
    }
}

export default Content