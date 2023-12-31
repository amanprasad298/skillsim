import React from 'react'
import './NavBar.css'
import logo from '../Assets/logo.png'
import { NavLink } from 'react-router-dom'

const NavBar = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };


  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navigation-wrap fixed-top">
        <div className="container-fluid ">
          <NavLink className="navbar-brand ms-lg-5" to="/" onClick={scrollToTop}><img className="logo" src={logo} alt="logo" /></NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto me-lg-4 align-items-center">
              <NavLink className="nav-link mx-2" aria-current="page" to="/" onClick={scrollToTop}>Home</NavLink>
              <NavLink className="nav-link mx-2" to="/about">About</NavLink>
              <NavLink className="nav-link mx-2" to="/contact">Contact</NavLink>
              <NavLink className="nav-link mx-2" to="/faq">FAQ</NavLink>
              <NavLink className="nav-link mx-2" to="/legal">Legal</NavLink>
              <NavLink className="nav-link mx-2" to="/programs">Programs</NavLink>
              <NavLink className="nav-link mx-2" to="/login"><button className="main-btn"><i className="fa-solid fa-user"></i>Login</button></NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
