import React from 'react'
import Comp2 from './Comp2'

let compA = () =>{

let emp_Name = "Kaushik"
let emp_Sal = 25000
let emp_Mail = "Kaushik@gmail.com"

    return (
        <>
       <h1><Comp2 employee={emp_Name} salary={emp_Sal} mail_Id = {emp_Mail}/></h1>
        
        
        </>
    )

}
export default compA