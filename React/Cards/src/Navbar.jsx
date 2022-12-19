

import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (

        <nav className='navbar navbar-dark bg-dark text-white navbar-expand-lg'>
            <Link to="/home" className="navbar-brand"><h1>Amazon</h1></Link>

            <div className='ml-auto'>
                <ul className='navbar-nav'>
                    <li className='nav-item'><Link to="/home" className='nav-link'><h4>Home</h4></Link></li>
                    <li className='nav-item'><Link to="/gadjets" className='nav-link'><h4>Gadjets</h4></Link></li>
                    <li className='nav-item'><Link to="/clothing" className='nav-link'><h4>Clothing</h4></Link></li>
                    <li className='nav-item'><Link to="/groceries" className='nav-link'><h4>Groceries</h4></Link></li>
                    <li className='nav-item'><Link to="/time" className='nav-link'><h4>Time</h4></Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar