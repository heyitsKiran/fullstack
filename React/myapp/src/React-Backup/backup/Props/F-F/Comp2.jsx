import React from 'react'


let Comp2 = (props) => {
return (

<>
<pre>{JSON.stringify (props)}</pre>
    <h6>Employee Name : {props.emp_Name} </h6>
    <hr />
    <h6>Employee Name : {props.emp_Sal} </h6>
    <hr />
    <h6>Employee Name : {props.emp_Name} </h6>
    
    </>
)
}
export default Comp2