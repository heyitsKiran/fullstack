import React from 'react'
import Two from "./Two"
import Three from "./Three"

function One() {

    let subject1 = "English"
    let subject2 = "Tamizh"
    let subject3 = "Kannada"


    return (
        <div>
            <h1>
                < Three Subject1={subject1} Subject2={subject2} Subject3={subject3} />
            </h1>
        </div>
    )
}

export default One