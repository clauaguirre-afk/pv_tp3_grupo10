import React, { useState, useEffect } from 'react';
import proyectoService from '../services/proyectoService';
import '../css/styles.css';

const PerfilUsuario = () => {
  const [integrantes, setIntegrantes] = useState([]);

  useEffect(() => {
    const listaIntegrantes = proyectoService.obtenerIntegrantes();
    setIntegrantes(listaIntegrantes);
  }, []);

  return (
    <div className="perfil-contenedor">
      {integrantes.map((integrante) => (
        <div key={integrante.nombre} className="tarjeta-integrante">

          <p className="tarjeta-texto">
            <strong>Nombre Completo:</strong> {integrante.nombre}
          </p>
          
          <p className="tarjeta-texto tarjeta-rol-contenedor">
            <strong>Rol Principal:</strong> 
            <span className="badge-rol">
              {integrante.rolPrincipal}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default PerfilUsuario;
