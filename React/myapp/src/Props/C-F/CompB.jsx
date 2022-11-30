import React from "react"

let CompB = (props) => {

    return (<>

        <h1>{JSON.stringify(props)}</h1>

        <div >
            <h3>mobile_Name : {props.Name} </h3>
            <hr />
            <h3>Mobile_Price : {props.Price} </h3>
            <hr />
            <h3>mobile_Status : {props.Status}</h3>

        </div>

    </>
    )


}
export default CompB


