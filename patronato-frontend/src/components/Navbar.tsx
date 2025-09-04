import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png.jpg"; // Tu logo en src/assets/logo.png

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow-sm py-3" style={{ background: 'linear-gradient(90deg, #143b0aff, #489776ff)' }}>
      <div className="container">
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={logo}
            alt="Logo Patronato Robles"
            style={{ height: "45px", marginRight: "12px" }}
          />
          Patronato Robles
        </NavLink>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/clientes">Clientes</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/pagos">Pagos</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/citas">Citas</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/reportes">Reportes</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
