import React from "react";

const PerfilUsuario = () => {
  const usuario = {
    nombre: "Martín Argota",
    rol: "Estudiante",
    institucion: "Facultad de Ingeniería"
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Perfil de Usuario</h1>

      <div style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "20px",
        maxWidth: "400px",
        marginTop: "20px"
      }}>
        <p><strong>Nombre:</strong> {usuario.nombre}</p>
        <p><strong>Rol:</strong> {usuario.rol}</p>
        <p><strong>Institución:</strong> {usuario.institucion}</p>
      </div>
    </div>
  );
};

export default PerfilUsuario;