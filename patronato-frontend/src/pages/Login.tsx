import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Aquí luego conectaremos con backend Node.js
    if (usuario && password) {
      navigate("/dashboard");
    } else {
      alert("Por favor complete todos los campos");
    }
  };

  return (
    <div className="form-container">
      
      <h2 className="form-title">Inicio de Sesión</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          className="form-control"
          placeholder="Usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          required
        />
        <input
          type="password"
          className="form-control"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="btn-custom mt-3">
          Ingresar
        </button>
      </form>
    </div>
  );
};

export default Login;
