import React from 'react'
import Outgoings from './Outgoings'

let Incomings = () => {

    let Player1 = "Udanta Singh"
    let Player2 = "Danish Bhatt"
    let Player3 = "Roy Krishna"

    return (

        <div>
            <h1>Incomings</h1>

            <Outgoings Play1={Player1} Play2={Player2} Play3={Player3} />

        </div>
    )
}

export default Incomings