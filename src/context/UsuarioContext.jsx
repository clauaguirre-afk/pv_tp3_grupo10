import { createContext, useEffect, useState } from "react";
export const UsuarioContext = createContext();
export const UsuarioProvider = ({ children }) => {

    const [usuario, setUsuario] = useState(() => {
        const usuarioGuardado = localStorage.getItem("usuarioGlobal");
        if (usuarioGuardado) {
            return JSON.parse(usuarioGuardado)
        }
        return {
            nombre: "Claudio Aguirre",
            dni: "12345678",
            rol: "Alumno",
            institucion: "Facultad de Ingeniería"
        };
    });

    useEffect(() => {
        localStorage.setItem("usuarioGlobal", JSON.stringify(usuario));
    }, [usuario]);

    const actualizarPerfil = (nuevosDatos) => {
        setUsuario({
            ...usuario,
            ...nuevosDatos
        });
    };

    return (
        <UsuarioContext.Provider value={{ usuario, actualizarPerfil}}>
            {children}
        </UsuarioContext.Provider>
    );
};