import React from 'react';
import PropTypes from 'prop-types';
// import {Link} from 'react-router-dom';
import "../App.css";

export default function Navbar({ title, aboutText, mode, toggleMode }) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${mode}`}>
      <div className="container-fluid">
        <a className={`navbar-brand text-${mode === 'light' ? "dark" : "light"}`} href="#">{title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{color:mode==="dark"?"white":"white",backgroundColor:mode==="dark"?"white":"white"}}>
          <span className="navbar-toggler-icon" ></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className={`nav-link active text-${mode === 'light' ? "dark" : "light"}`} href="#">Home</a>
            </li>
            <li className="nav-item">
              {/* <a className={`nav-link text-${mode === 'light' ? "dark" : "light"}`} href="/about">{aboutText}</a> */}
            </li>
          </ul>
          <div className={`form-check form-switch text-${mode === 'light' ? "dark" : "light"}`}>
            <input className="form-check-input" type="checkbox" onClick={toggleMode} role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label text-gray" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string
};

Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "About text here"
};
