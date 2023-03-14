import React from "react"

class Club extends React.Component {

    club_Name = 'Bengaluru FC'
    Manager = "Simon Grayson"
    Captain = "Sunil Chettri"
    Jersey_Number = 11


    render() {

        return <>

            <ul>
                <li>Club : {this.club_Name}</li>
                <li>Manager : {this.Manager}</li>
                <li>Captain : {this.Captain}</li>
                <li>Jersey_Number : {this.Jersey_Number}</li>
            </ul>

        </>

    }

}
export default Club