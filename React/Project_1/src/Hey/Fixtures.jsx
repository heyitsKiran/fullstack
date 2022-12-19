import React from 'react'
import { Link } from 'react-router-dom'

const Fixtures = () => {
  return (
    <div>Fixtures Component
      <div>
        <Link to="/tab"><button className='btn btn-primary btn-lg'>Submit</button></Link>
      </div>
    </div>
  )
}

export default Fixtures