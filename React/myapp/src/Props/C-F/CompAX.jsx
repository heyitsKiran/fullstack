import { Component } from "react";
import EDF from "./CompBX"

class ABC extends Component {

    club_Name = "BFC"
    club_position = 1
    club_League = "ISL"

    render() {
        return (

            <div>

                <EDF 
                    clubName={this.club_Name}
                    clubPosition={this.club_position}
                    clubLeague={this.club_League} 
                />


            </div>
        )
    }
}
export default ABC