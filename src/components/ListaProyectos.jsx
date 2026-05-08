import { useState } from "react";
import proyectoService from "../services/proyectoService";
import "../css/listaProyectos.css";
const ListaProyectos =()=>{

    const [proyectos, setProyectos] = useState(
        proyectoService.obtenerProyectos());
    
    const [busqueda, setBusqueda] = useState("");

    const [titulo, setTitulo] = useState("");
    const [categoria, setCategoria] = useState("");
    const [estado, setEstado] = useState("");
    
    const eliminar = (id) => {
        proyectoService.eliminarProyecto(id);
        setProyectos(proyectoService.obtenerProyectos());
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
        if (titulo.trim() === "" || categoria.trim() === "" || estado.trim() === ""){alert("Completa todos los campos");
        return;}
        const nuevoProyecto = {
            id: Date.now(), titulo, categoria, estado};
        proyectoService.agregarProyecto(nuevoProyecto);
        setProyectos(proyectoService.obtenerProyectos());
        setTitulo("");
        setCategoria("");
        setEstado("");
    };

    return(
        <div>
            <h2 className="titilo">Gestion de Proyecto Educativos</h2>

            <div className="formulario">
               <input type="text" placeholder="Título" value={titulo} onChange={(e) => setTitulo(e.target.value)}/>
               <input type="text" placeholder="Categoría" value={categoria} onChange={(e) => setCategoria(e.target.value)}/>
               <input type="text" placeholder="Estado" value={estado} onChange={(e) => setEstado(e.target.value)}/>
               <button onClick={agregar}>Agregar Proyecto</button>
            </div>
            <input type="text" placeholder="Buscar proyecto..." value={busqueda} onChange={(e) => buscar(e.target.value)}/>

            <section>
                <div>
                    {proyectos.map(p =>(
                        <article key={p.id} className="card">
                            <div className="card-content">
                                <h3>{p.titulo}</h3>
                                <span className={`badge ${p.estado === 'Finalizado'? 'done' : 'process'}`}> 
                                    {p.estado}
                                </span>
                                <p><strong>Categoria:</strong>{p.categoria}</p>
                                <button onClick={()=>eliminar(p.id)}>Eliminar</button>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
}
export default ListaProyectos;