import React, { Component } from 'react'

class MyCart extends Component {
  state = {
    Name: "Oneplus Nord",
    Image: "https://m.media-amazon.com/images/I/617MPEZB5mL._AC_UY327_FMwebp_QL65_.jpg",
    Variant: "256GB Aqua Blue",
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
      <div className=' col-md-6'>
        <div className=''>
          <table className='container  table table-hover'>
            <thead className='bg-dark row-mt-12'>
              <tr className='text-white'>
                <th>Name</th>
                <th>Image</th>
                <th>Variant</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><h3>{this.state.Name}</h3></td>
                <td><img src={this.state.Image} alt="" height={120} /></td>
                <td><h4>{this.state.Variant}</h4></td>
                <td><h5>{this.state.Price}</h5></td>
                <td><h3><i className='fa fa-minus-circle' onClick={this.decrHandler}></i>{this.state.Qty}<i className='fa fa-plus-circle' onClick={this.incrHandler}></i></h3></td>
                <td>{this.state.Price * this.state.Qty}</td>
              </tr>
            </tbody>
          </table>

          <div className='container'>
            <button className='btn btn-primary'>Place Order</button>
          </div>

        </div>
      </div>
    )
  }
}

export default MyCart