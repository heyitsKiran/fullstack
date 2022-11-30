import { Component } from "react";

class CompBX extends Component {

    render() {

        return (<>

                <h1>Oneplus : Never Settle</h1>
                <h1>{JSON.stringify(this.props)}</h1>
                <h1>Mobile : {this.props.Name}</h1>
                <h1>Price : {this.props.Price}</h1>
                <h1>Availability Status : {this.props.Status}</h1>
             

        </>
        )
    }
}
export default CompBX