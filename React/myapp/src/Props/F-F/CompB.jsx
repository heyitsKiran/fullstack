import React from 'react'

let CompB = (props) => {

    return (
        <>
            <pre>{JSON.stringify(props)}</pre>

            <h6>Fruit Type :{props.FruitName}</h6>
            <hr />
            <h6>Fruit Price :{props.FruitPrice}</h6>
            <hr />
            <h6>Fruit Season :{props.BestSeason}</h6>
            <hr />
        </>
    )
}
export default CompB
