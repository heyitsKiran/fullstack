import React, { Component } from 'react'

class CoompB extends Component {

  render() {
    return (
      <div>

        <p>{JSON.stringify(this.props)}</p>

        <h1>Player : {this.props.Mobile1}</h1>
        <hr />
        <h1>Player : {this.props.Mobile2}</h1>
        <hr />
        <h1>Player : {this.props.Mobile3}</h1>
        <hr />

      </div>
    )
  }
}
  
export default CoompB