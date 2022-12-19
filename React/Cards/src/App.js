import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Navbar from "./Navbar"
import Gadjets from "./Pages/Gadjets"
import Home from "./Pages/Home"
import Clothing from "./Pages/Clothing"
import Groceries from "./Pages/Groceries"
import Time from "./Pages/Time"
import Gad_Axios from "./Pages/Gad_Axios"

let App = () => {

    return (
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/home" element={<Home />}></Route>
                    <Route path="/gadjets" element={<Gadjets />}></Route>
                    <Route path="/clothing" element={<Clothing />}></Route>
                    <Route path="/groceries" element={<Groceries />}></Route>
                    <Route path="/time" element={<Time />}></Route>
                    <Route path="/gad_axios" element={<Gad_Axios />}></Route>
                </Routes>
                
                
   
            </Router>


        </div>
    )
}
export default App