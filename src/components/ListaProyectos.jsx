import proyectoService from "../services/proyectoServices"
import { useState } from "react";
const ListaProyectos =()=>{

    const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos());
    const eliminar = (id) => {
        proyectoService.eliminarProyecto(id);
        setProyectos(proyectoService.obtenerProyectos());
    }
    
    return(
        <div>
            <h2>Gestion de Proyecto Educativos</h2>
            
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