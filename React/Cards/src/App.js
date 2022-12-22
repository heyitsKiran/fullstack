import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Navbar from "./Navbar"
import Gadjets from "./Pages/Gadjets"
import Home from "./Pages/Home"
import Clothing from "./Pages/Clothing"
import Groceries from "./Pages/Groceries"
import Time from "./Pages/Time"
import GadAxios from "./Pages/GadAxios"
import Movies from "./Pages/Movies"
import GadCarousel from "./Pages/GadCarousel"
import MyCart from "./Pages/MyCart"
import GadjetsFa from "./Pages/GadjetsFa"
import Product from "./Pages/abc"

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
                    <Route path="/gadaxios" element={<GadAxios />}></Route>
                    <Route path="/movies" element={<Movies />}></Route>
                    <Route path="/gadcarousel" element={<GadCarousel />}></Route>
                    <Route path="/mycart" element={<MyCart />}></Route>
                    <Route path="/gadjetsfa" element={<GadjetsFa />}></Route>
                    <Route path="/product" element={<Product />}></Route>
                </Routes>
                
                
   
            </Router>


        </div>
    )
}
export default App