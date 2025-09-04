import React from "react";

const Registro: React.FC = () => {
  return (
    <div className="page">
      <h2>Registro de Usuario</h2>
      <form>
        <input type="text" placeholder="Nombre completo" required /><br /><br />
        <input type="email" placeholder="Correo electrónico" required /><br /><br />
        <input type="password" placeholder="Contraseña" required /><br /><br />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Registro;
