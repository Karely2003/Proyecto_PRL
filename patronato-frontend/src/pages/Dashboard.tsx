import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="page">
      <h2>Inicio</h2>
      <p>Bienvenido al sistema de gestión del Patronato Robles de la Laguna.</p>

      <div className="dashboard">
        <div 
          className="card-dashboard" 
          onClick={() => navigate("/clientes")}
          style={{ cursor: "pointer" }}
        >
          <i className="fas fa-users"></i>
          <h5>Clientes</h5>
        </div>

        <div 
          className="card-dashboard" 
          onClick={() => navigate("/pagos")}
          style={{ cursor: "pointer" }}
        >
          <i className="fas fa-dollar-sign"></i>
          <h5>Pagos</h5>
        </div>

        <div 
          className="card-dashboard" 
          onClick={() => navigate("/citas")}
          style={{ cursor: "pointer" }}
        >
          <i className="fas fa-calendar-alt"></i>
          <h5>Citas</h5>
        </div>

        <div 
          className="card-dashboard" 
          onClick={() => navigate("/reportes")}
          style={{ cursor: "pointer" }}
        >
          <i className="fas fa-chart-line"></i>
          <h5>Reportes</h5>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
