import React from 'react'
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar sticky-top navbar-expand-lg navbar-dark bg-danger'>
        <div className="container">
            <Link to="/" className="navbar-brand">Nemesis Consultants LLP</Link>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to='/login' className="nav-link">Login</Link>
                </li>
                <li className="nav-item">
                    <Link to='/signup' className="nav-link">Signup</Link>
                </li>
                <li className="nav-item">
                    <Link to='/contact' className="nav-link">Contact Me</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar