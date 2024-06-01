import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='text-center'>
        <h2>404</h2>
        <p>Page not found</p>

        <div>
            <Link to="/" className='btn btn-primary'>Ir a home</Link>
        </div>
    </div>
  )
}

export default NotFound