import { Component } from "react";
import CompB from "./CompB"

class CompA extends Component {

    product_Name = "Motorola"
    product_Price = 25000
    product_Avalabilty = "Yes"

    render() {

        return (<div>

            <CompB
                Name={this.product_Name}
                Price={this.product_Price}
                Status={this.product_Avalabilty}
            />
        </div>

        )

    }

}

export default CompA

