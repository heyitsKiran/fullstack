import React from 'react'

function Two(props) {
    return (
        <div>
            <pre>{JSON.stringify(props)}</pre>
            <h3>Language : {props.Subject1}</h3>
            <h3>Language : {props.Subject2}</h3>
            <h3>Language : {props.Subject3}</h3>


        </div>
    )
}

export default Two
