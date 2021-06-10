import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Hsm
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/diet">
                  Diet
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/doctors">
                  Doctor
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/patientCase">
                  Patient Case
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/finance">
                  Finance
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/patients">
                  Patient
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/diseases">
                  Disease
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/policies">
                  Insurance Policy
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/history">
                  Patient History
                </NavLink>
              </li>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/register">
                    Register
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
