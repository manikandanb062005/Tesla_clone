import React from 'react'
import {Link} from 'react-router-dom'
import logo2 from '../assets/logo1.png'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <div className='name'>
      <Link to='/'>
    <img src={logo2} alt="Logo" width="150" height="60" class="d-inline-block align-text-top"/></Link>
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className='menu'>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Models">Vechicles</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Shop">Shop</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">About us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='#'>Account</Link>
        </li>
      </ul>
    </div>
    </div>
  </div>
</nav>
  );
}

export default Navbar