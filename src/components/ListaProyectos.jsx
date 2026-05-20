import { useState, useEffect } from "react";
import RegistroActividad from "./RegistroActividad";
import proyectoService from "../services/proyectoService";
import "../css/listaProyectos.css";
import ProyectoCard from "./ProyectoCard.jsx";
import DetalleProyecto from "./DetalleProyecto.jsx";

const ListaProyectos = () => {
    const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos());
    const [busqueda, setBusqueda] = useState("");
    const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);
    const [ultimaActividad, setUltimaActividad] = useState("Sin modificaciones todavía");

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

    const { titulo, categoria, estado, descripcion1, descripcion2, pdf, drive, github, integrante, rol } = formulario;

    const registrarCambio = (e) => {
        const { name, value } = e.target;
        setFormulario({
            ...formulario,
            [name]: value
        });
    };

    const eliminar = (id) => {
    const confirmar = window.confirm("¿Estás seguro de eliminar este proyecto?");
        if (confirmar) {
            const tarjeta = document.getElementById(`tarjeta-${id}`);
            if (tarjeta) {
                tarjeta.classList.add("card-fade-out");
                setTimeout(() => {
                    proyectoService.eliminarProyecto(id);
                    setProyectos(proyectoService.obtenerProyectos());
                    if (proyectoSeleccionado && proyectoSeleccionado.id === id) {
                        setProyectoSeleccionado(null);
                    }
                }, 300);
            }
            
        }
    };

    const verDetalle = (proyecto) => {
        setProyectoSeleccionado(proyecto);
        setTimeout(() => {
            const detalleDiv = document.getElementById("detalle");
            if (detalleDiv) {
                detalleDiv.scrollIntoView({
                    behavior: "smooth"
                });
            }
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
    useEffect(() => {
        const fechaActual = new Date().toLocaleString();
        setUltimaActividad(fechaActual);
    }, [proyectos.length]);
    return (
        <div>
            <h2 className="titulo">Gestión de Proyectos Educativos</h2>

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

            <div className="buscador">
                <input type="text" placeholder="Buscar proyecto..." value={busqueda} onChange={(e) => buscar(e.target.value)}/>
            </div>

            <section className="contenedor-proyectos">
                <div className="lista-proyectos">
                    {proyectos.map(p =>(
                        <div id={`tarjeta-${p.id}`} key={p.id} className="tarjeta-animacion-container">
                            <ProyectoCard 
                                proyecto={p}
                                eliminar={eliminar}
                                verDetalle={verDetalle}
                            />
                        </div>
                    ))}
                </div>
                <div id="detalle" className="detalle-container">
                    <DetalleProyecto proyecto={proyectoSeleccionado} />
                </div>
            </section>
            <RegistroActividad ultimaActividad={ultimaActividad}/>
        </div>
    );
};

export default ListaProyectos;
