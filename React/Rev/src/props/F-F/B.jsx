import React from "react";


let Phone2 = (props) => {
    return (
        <div>

            <p>{JSON.stringify(props)}</p>

            <div>
                <h1>Model 1 : {props.Mobile1} </h1>
                <hr />
                <h1>Model 2 : {props.Mobile2} </h1>
                <hr />
                <h1>Model 3 : {props.Mobile3} </h1>
                <hr />
            </div>


        </div>
    )
}
export default Phone2