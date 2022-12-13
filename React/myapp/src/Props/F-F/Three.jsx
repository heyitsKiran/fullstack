import React, { Component } from 'react';

class Three extends Component {
    render() {
        return (
            <div>
                <h1>{JSON.stringify(this.props)}</h1>
                <h3>Language : {this.props.Subject1}</h3>
                <h3>Language : {this.props.Subject2}</h3>
                <h3>Language : {this.props.Subject3}</h3>
            </div>
        );
    }
}

export default Three;

