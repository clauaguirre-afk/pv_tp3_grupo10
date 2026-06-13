import React, { useContext } from 'react';
import Nav from "./Nav";
import { UsuarioContext } from '../context/UsuarioContext';
import '../css/styles.css';

const Header = () => {
    const { usuario } = useContext(UsuarioContext);

    return (
        <header className="header-principal">
            <h1 id="titulo">Proyectos</h1>
            
            <Nav />

            {/* Tarjeta de usuario en el encabezado */}
            <div className="header-user-card">
                <strong className="user-name">{usuario.nombre}</strong>
                <span className="user-rol">{usuario.rol}</span>
            </div>
        </header>
    );
};

export default Header;