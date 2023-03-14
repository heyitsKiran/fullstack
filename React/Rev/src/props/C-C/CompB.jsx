import React, { Component } from 'react'

class CompB extends Component {

  render() {
    return (
      <div>

        <p>{JSON.stringify(this.props)}</p>

        <h1>Player : {this.props.Play1}</h1>
        <hr />
        <h1>Player : {this.props.Play2}</h1>
        <hr />
        <h1>Player : {this.props.Play3}</h1>
        <hr />

      </div>
    )
  }
}

export default CompB