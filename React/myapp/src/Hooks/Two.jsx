import React, { useState } from 'react'

const Counter = () => {

    let [counter, setCounter] = useState(0)

    return (
        <div>
            <h1>Start : {counter}</h1>
            <button onClick={() => { setCounter(counter + 1) }} >Incr</button>
            <button onClick={() => { setCounter(counter - 1) }} >Decr</button>
        </div>
    )
}

export default Counter