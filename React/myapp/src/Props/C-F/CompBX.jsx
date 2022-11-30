import React from "react"

let EDF = (props) => {

    return (
        <div>
            <pre>{JSON.stringify(props)}</pre>
            <div>
                <h3>Name : {props.clubName}</h3>
                <h3>Standings : {props.clubPosition}</h3>
                <h3>League : {props.clubLeague}</h3>
            </div>

        </div>
    )
}
export default EDF