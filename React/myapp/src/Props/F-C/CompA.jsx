import React from 'react'
import CompB from './CompB'

let CompA = () => {

    let fruit_Name = "Custard Apple"
    let fruit_Price = 120
    let fruit_Season = "Summer"

    return (
        <div>
            <div>Comp A</div>
            <CompB FruitName={fruit_Name} FruitPrice={fruit_Price} BestSeason={fruit_Season} />
        </div>
    )
}
export default CompA