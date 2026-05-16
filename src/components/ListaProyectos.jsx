import { useState } from "react";
import proyectoService from "../services/proyectoService";
import "../css/listaProyectos.css";
import ProyectoCard from "./ProyectoCard.jsx";
import DetalleProyecto from "./DetalleProyecto.jsx";
const ListaProyectos =()=>{

    const [proyectos, setProyectos] = useState(
        proyectoService.obtenerProyectos());
    
    const [busqueda, setBusqueda] = useState("");

    const [titulo, setTitulo] = useState("");
    const [categoria, setCategoria] = useState("");
    const [estado, setEstado] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [pdf, setPdf] = useState("");
    const [drive, setDrive] = useState("");
    const [github, setGithub] = useState("");
    const [integrante, setIntegrante] = useState("");
    const [rol, setRol] = useState("");
    const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

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
    const verDetalle =(proyecto) => {
        setProyectoSeleccionado(proyecto)
        setTimeout(()=>{
            document
            .getElementById("detalle")
            .scrollIntoView({
                behavior:"smooth"
            })
        },100)
    }
    const buscar = (texto) => {
        setBusqueda(texto);
        if (texto === "") {
           setProyectos(proyectoService.obtenerProyectos());
        } else {
            setProyectos(proyectoService.buscarProyecto(texto));
        }
    };
    const agregar = () => {
        if (titulo.trim() === "" || categoria.trim() === "" || estado.trim() === ""){alert("Completa todos los campos");
        return;}
        const nuevoProyecto = {
            id: Date.now(), titulo, categoria, estado, 
            descripcion: [ descripcion, "Proyecto agregado desde el formulario."],
            recursos: { pdf, drive, github },
            equipo: [{ nombre: integrante, rol: rol }]};
        proyectoService.agregarProyecto(nuevoProyecto);
        setProyectos(proyectoService.obtenerProyectos());
        setTitulo("");
        setCategoria("");
        setEstado("");
        setDescripcion("");
        setPdf("");
        setDrive("");
        setGithub("");
        setIntegrante("");
        setRol("");
    };

    return(
        <div>
            <h2 className="titulo">Gestion de Proyecto Educativos</h2>

            <div className="formulario">
                <input type="text" placeholder="Título" value={titulo} onChange={(e) => setTitulo(e.target.value)}/>
                <input type="text" placeholder="Categoría" value={categoria} onChange={(e) => setCategoria(e.target.value)}/>
                <input type="text" placeholder="Estado" value={estado} onChange={(e) => setEstado(e.target.value)}/>
                <input type="text" placeholder="Descripción" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}/>
                <input type="text" placeholder="PDF" value={pdf} onChange={(e) => setPdf(e.target.value)}/>
                <input type="text" placeholder="Drive" value={drive} onChange={(e) => setDrive(e.target.value)}/>
                <input type="text" placeholder="GitHub" value={github} onChange={(e) => setGithub(e.target.value)}/>
                <input type="text" placeholder="Integrante" value={integrante} onChange={(e) => setIntegrante(e.target.value)}/>
                <input type="text" placeholder="Rol" value={rol} onChange={(e) => setRol(e.target.value)}/>
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
                    <DetalleProyecto proyecto={proyectoSeleccionado}/>
                </div>
            </section>
        </div>
    );
}
export default ListaProyectos;