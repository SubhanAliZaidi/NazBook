import React from 'react'
import { Link, useLocation } from "react-router-dom";


export default function Navbar() {

  let location = useLocation();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger p-1 px-5 position-fixed w-100" style= {{"zIndex": "99"}}>
        <div className="container d-flex align-items-center justify-content-between">
          <Link className="navbar-brand" to="/">NazBook</Link>
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/' ? "active" : ""}`} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/pricing' ? "active" : ""}`} to="/pricing">Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/work' ? "active" : ""}`} to="/work">Work</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/service' ? "active" : ""}`} to="/service">Service</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
