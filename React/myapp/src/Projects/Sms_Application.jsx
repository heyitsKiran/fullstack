import React, { Component } from 'react';

class Sms_App extends Component {

    constructor(props) {
        super(props);
            this.state = {
                maxLimit: 100,
                count: 100
            }
    }
    updateHandler = (event) => {
        this.setState({
            count: this.state.maxLimit - event.target.value.length
        })
    }
    render() {
        return (
            <div className='container mt-3'>
                <div className='row'>
                    <div className='col-md-6'>
                         
                        <div className='card'>

                            {/* Header */}
                            <div className='card-header bg-danger text-white'>
                                <p className='h4'>SMS Application</p>
                            </div>

                            {/* Body */}
                            <div className='card-body'>
                                <form >

                                    <div className='form-group'>
                                        <textarea className='form-control' cols="30" rows="5" onChange={this.updateHandler} maxLength={this.state.maxLimit} placeholder="Your Message here..." />
                                    </div>

                                </form>
                            </div>

                            {/* Footer */}
                            <div className='card-footer'>
                                <p className='h4'>Characters Remaining :
                                    <span className='font-weight-bold'>{this.state.count}</span>
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        );
    }
}

export default Sms_App;


