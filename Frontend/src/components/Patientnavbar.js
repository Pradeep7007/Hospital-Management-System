import React from 'react';
import { Link } from 'react-router-dom';
import './Patientnavbar.css';
import logo from '../assests/logo.png';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm custom-navbar">
      <div className="container">

        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={logo}
            alt="PMCH logo"
            width="45"
            height="45"
            className="rounded-3 me-2"
          />
          <span className="brand-text">PMCH</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center nav-gap">


            <li className="nav-item">
              <Link className="nav-link" to="/appointment">Book Appointment</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/room">Rooms</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/record">My Records</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/prescriptions">Prescriptions</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/lab-reports">Lab Reports</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/billing">Billing</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/profile">Profile</Link>
            </li>

            <li className="nav-item">
              <button className="btnn" type="button">Logout</button>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
