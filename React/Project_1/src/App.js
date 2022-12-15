import React from "react"
import Navbar from "./Pro/Navbar"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./Pro/Home"
import About from "./Pro/About"
import Support from "./Pro/Support"

let App = () => {

    return (

        <Router>
            <Navbar />

            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/support" element={<Support />} />
            </Routes>

        </Router>
    )
}
export default App