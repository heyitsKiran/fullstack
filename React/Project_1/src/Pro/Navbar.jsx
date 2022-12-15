import React from "react";
import { Link } from "react-router-dom"

const Navbar = () => {

    return (

        
            <nav className="navbar navbar-dark bg-dark text-white navbar-expand-lg">
                <Link to="/home" className="navbar-brand"> <h1>AMAZON</h1> </Link>

                <div className="ml-auto">

                    <ul className="navbar-nav">
                        <li className="nav-item"><Link to="/home" className="nav-link">Home</Link></li>
                        <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                        <li className="nav-item"><Link to="/support" className="nav-link">Support</Link></li>
                    </ul>

                </div>
            </nav>
      

    )
}

export default Navbar
