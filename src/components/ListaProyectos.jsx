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
    const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

    const eliminar = (id) => {
        proyectoService.eliminarProyecto(id);
        setProyectos(proyectoService.obtenerProyectos());
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
            id: Date.now(), titulo, categoria, estado, descripcion:" ", recursos:{pdf:"", drive:"", github:""}, equipo:[]};
        proyectoService.agregarProyecto(nuevoProyecto);
        setProyectos(proyectoService.obtenerProyectos());
        setTitulo("");
        setCategoria("");
        setEstado("");
    };

    return(
        <div>
            <h2 className="titulo">Gestion de Proyecto Educativos</h2>

            <div className="formulario">
               <input type="text" placeholder="Título" value={titulo} onChange={(e) => setTitulo(e.target.value)}/>
               <input type="text" placeholder="Categoría" value={categoria} onChange={(e) => setCategoria(e.target.value)}/>
               <input type="text" placeholder="Estado" value={estado} onChange={(e) => setEstado(e.target.value)}/>
               <button onClick={agregar}>Agregar Proyecto</button>
            </div>
            <input type="text" placeholder="Buscar proyecto..." value={busqueda} onChange={(e) => buscar(e.target.value)}/>

            <section className="contenedor-proyectos">
                <div className="lista-proyectos">
                    {proyectos.map(p =>(
                        <ProyectoCard 
                        key={p.id}
                        proyecto={p}
                        eliminar={eliminar}
                        verDetalle={verDetalle}/>
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