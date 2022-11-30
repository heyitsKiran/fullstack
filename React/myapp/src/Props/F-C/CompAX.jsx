import React from "react"
import CompBX from "./CompBX"

let CompAX = () => {

    let mobile_Name = 'Oneplus'
    let mobile_Price = 29999
    let avalabilty = 'yes'

    return (

        <div>

            <CompBX Name={mobile_Name} Price={mobile_Price} Status={avalabilty} />

        </div>

    )
}
export default CompAX