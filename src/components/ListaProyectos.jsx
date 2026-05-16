import { useState } from "react";
import proyectoService from "../services/proyectoService";
import "../css/listaProyectos.css";
import ProyectoCard from "./ProyectoCard.jsx";
import DetalleProyecto from "./DetalleProyecto.jsx";

const ListaProyectos = () => {
    const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos());
    const [busqueda, setBusqueda] = useState("");
    const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

    // Un solo objeto de estado para el formulario
    const [formulario, setFormulario] = useState({
        titulo: "",
        categoria: "",
        estado: "",
        descripcion1: "", 
        descripcion2: "", 
        pdf: "",
        drive: "",
        github: "",
        integrante: "",
        rol: ""
    });

    // Desestructuración aplicada al manejo del estado del formulario
    const { titulo, categoria, estado, descripcion1, descripcion2, pdf, drive, github, integrante, rol } = formulario;

    // Manejador único para actualizar las propiedades del formulario dinámicamente
    const registrarCambio = (e) => {
        const { name, value } = e.target;
        setFormulario({
            ...formulario,
            [name]: value
        });
    };

    const eliminar = (id) => {
        proyectoService.eliminarProyecto(id);
        setProyectos(proyectoService.obtenerProyectos());

        //Si el proyecto eliminado es el que se estaba viendo, cerramos el detalle
        if (proyectoSeleccionado && proyectoSeleccionado.id === id) {
            setProyectoSeleccionado(null);
        }
    };

    const verDetalle = (proyecto) => {
        setProyectoSeleccionado(proyecto);
        setTimeout(() => {
            document.getElementById("detalle").scrollIntoView({
                behavior: "smooth"
            });
        }, 100);
    };

    const buscar = (texto) => {
        setBusqueda(texto);
        if (texto === "") {
            setProyectos(proyectoService.obtenerProyectos());
        } else {
            setProyectos(proyectoService.buscarProyecto(texto));
        }
    };

    const agregar = () => {
        if (titulo.trim() === "" || categoria.trim() === "" || estado.trim() === "") {
            alert("Completa todos los campos principales");
            return;
        }

        // Estructura completa y extendida del nuevo proyecto, incluyendo los dos párrafos de descripción
        const nuevoProyecto = {
            id: Date.now(),
            titulo,
            categoria,
            estado,
            descripcion: [descripcion1, descripcion2], // Dos párrafos
            recursos: { pdf, drive, github },
            equipo: [{ nombre: integrante, rol: rol }]
        };

        proyectoService.agregarProyecto(nuevoProyecto);
        setProyectos(proyectoService.obtenerProyectos());

        // Limpieza del formulario restableciendo el objeto inicial
        setFormulario({
            titulo: "",
            categoria: "",
            estado: "",
            descripcion1: "",
            descripcion2: "",
            pdf: "",
            drive: "",
            github: "",
            integrante: "",
            rol: ""
        });
    };

    return (
        <div>
            <h2 className="titulo">Gestión de Proyectos Educativos</h2>

            {/* Agregamos el atributo 'name' y vinculamos 'registrarCambio' para que funcione el objeto de estado */}
            <div className="formulario">
                <input type="text" name="titulo" placeholder="Título" value={titulo} onChange={registrarCambio} />
                <input type="text" name="categoria" placeholder="Categoría" value={categoria} onChange={registrarCambio} />
                <input type="text" name="estado" placeholder="Estado" value={estado} onChange={registrarCambio} />
                <input type="text" name="descripcion1" placeholder="Descripción 1" value={descripcion1} onChange={registrarCambio} />
                <input type="text" name="descripcion2" placeholder="Descripción 2" value={descripcion2} onChange={registrarCambio} />
                <input type="text" name="pdf" placeholder="PDF" value={pdf} onChange={registrarCambio} />
                <input type="text" name="drive" placeholder="Drive" value={drive} onChange={registrarCambio} />
                <input type="text" name="github" placeholder="GitHub" value={github} onChange={registrarCambio} />
                <input type="text" name="integrante" placeholder="Integrante" value={integrante} onChange={registrarCambio} />
                <input type="text" name="rol" placeholder="Rol" value={rol} onChange={registrarCambio} />
                <button onClick={agregar}>Agregar Proyecto</button>
            </div>

            <input type="text" placeholder="Buscar proyecto..." value={busqueda} onChange={(e) => buscar(e.target.value)} />

            <section className="contenedor-proyectos">
                <div className="lista-proyectos">
                    {proyectos.map(p => (
                        <ProyectoCard
                            key={p.id}
                            proyecto={p}
                            eliminar={eliminar}
                            verDetalle={verDetalle}
                        />
                    ))}
                </div>
                <div id="detalle" className="detalle-container">
                    <DetalleProyecto proyecto={proyectoSeleccionado} />
                </div>
            </section>
        </div>
    );
};

export default ListaProyectos;
