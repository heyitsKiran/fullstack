import React from 'react'

let Outgoings = (props) => {

    return (

        <div>
            <h1>Outgoings</h1>

            <p>{JSON.stringify(props)}</p>

            <h2>Out1 : {props.Play1}</h2>
            <hr />
            <h2>Out2 : {props.Play2}</h2>
            <hr />
            <h2>Out3 : {props.Play3}</h2>
            <hr />
        </div>
    )

}

export default Outgoings