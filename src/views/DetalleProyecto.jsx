import { useParams } from "react-router-dom";
import proyectoService from "../services/proyectoService";
const DetalleProyecto = () =>{
    const {id}=useParams();
    const proyecto=proyectoService
     .obtenerProyectos()
     .find(p => p.id === Number(id))
    if(!proyecto){
        return <p>Proyecto no encontrado</p>
    }
    const {
        titulo,
        categoria,
        estado,
        descripcion,
        recursos,
        equipo
    }=proyecto
    return (
        <div className="detalle-proyecto">
            <h2>{titulo}</h2>
            <p> <strong>Categoria:</strong>{categoria}
            </p>
            <p>
                <strong>Estado:</strong> {estado}
            </p>
            <h3>Descripcion:</h3>
            {descripcion.map((texto, index) => (
                <p key={index}>{texto}</p>
            ))}
            <h3>Recursos:</h3>

            <ul>
                <li>PDF: {recursos.pdf}</li>
                <li>Drive: {recursos.drive}</li>
                <li>GitHub: {recursos.github}</li>
            </ul>
            <h3>Equipo</h3>
            <ul>
                {equipo.map((miembro, index)=>(
                    <li key={index}>
                        {miembro.nombre} - {miembro.rol}
                    </li>

                ))}
            </ul>
        </div>
    )
}
export default DetalleProyecto;