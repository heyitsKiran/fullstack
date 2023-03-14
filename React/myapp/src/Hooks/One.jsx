import React, { useState } from 'react'

const Message = () => {

    let [message, setMessage] = useState("Hello....")

    return (

        <div>

            <h1>Message : {message}</h1>
            <button onClick={() => { setMessage("Good Morning") }} >GM</button>
            <button onClick={() => { setMessage("Good Night") }} >GN</button>

        </div>
    )
}

export default Message