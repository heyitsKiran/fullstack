import React from "react"
import Navbarr from "./Hey/Navbarr"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Hey/Home"
import Players from "./Hey/Players"
import Fixtures from "./Hey/Fixtures"
import Tab from "./Hey/Tab"
import Clock from "./Hey/Clock"


let App = () => {

  return (
    

    <Router>
      <Navbarr />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/players" element={<Players />}></Route>
        <Route path="/fixtures" element={<Fixtures />}></Route>
        <Route path="/tab" element={<Tab />}></Route>
        <Route path="/clock" element={<Clock />}></Route>
      </Routes>
    </Router>

  )
}
export default App