import prooyectoService from "../services/proyecto_services"
import { useState } from "react";
const ListaProyectos =()=>{
    const [proyectos, seProyectos] = useState(prooyectoService.obtenerProyectos());
    
    return(
        <div>
            <h2>Gestion de Proyecto Educativos</h2>
            
            <section>
                <div>
                    {proyectos.map(p =>(
                        <article key={p.id} className="card">
                            <div className="card-content">
                                <h3>{p.titulo}</h3>
                                <span className={`badge ${p.estado === 'Finalizado'? 'done' : 'process'}`}>--/el badge completa /---
                                </span>
                                <p><strong>Categoria:</strong>{p.categoria}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
}
export default ListaProyectos;