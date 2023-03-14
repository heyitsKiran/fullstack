import React from 'react'
import { Link } from 'react-router-dom'

const Navbarr = () => {

  return (

    <nav className='navbar navbar-dark bg-dark text-white navbar-expand-lg'>
      <Link to="/home" className="navbar-brand" ><h1>RealMadrid</h1></Link>

      <div className='ml-auto'>

        <ul className='navbar-nav'>
          <li className='nav-item'><Link to="/home" className='nav-link'><h1>Home</h1></Link></li>
          <li className='nav-item'><Link to="/players" className='nav-link'><h1>Players</h1></Link></li>
          <li className='nav-item'><Link to="/fixtures" className='nav-link'><h1>Fixtures</h1></Link></li>
          <li className='nav-item'><Link to="/tab" className='nav-link'><h1>Tab</h1></Link></li>
          <li className='nav-item'><Link to="/clock" className='nav-link'><h1>Clock</h1></Link></li>
          <li className='nav-item'><Link to="/login" className='nav-link'><h1>Login</h1></Link></li>
        </ul>

      </div>

    </nav>

  )
}

export default Navbarr