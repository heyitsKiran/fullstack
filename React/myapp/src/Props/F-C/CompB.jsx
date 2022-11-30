import React, { Component } from 'react'

export class CompB extends Component {
    render() {
        return (
            <div>
                <h1>This is Class component with ComponentB</h1>
                <h2>{JSON.stringify(this.props)}</h2>
                <h6>Fruit Type :{this.props.FruitName}</h6>
                <h6>Fruit Price :{this.props.FruitPrice}</h6>
                <h6>Fruit Season :{this.props.BestSeason}</h6>
                <hr />
            </div>
 
        )
    }
}
export default CompB