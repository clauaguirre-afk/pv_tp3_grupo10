import {Link} from 'react-router-dom';
const ProyectoCard = ({proyecto, eliminar})=>{
    const {id, titulo, categoria, estado}=proyecto;
    return (
        <article className="card">
            <div className="card-content">
                <h3>{titulo}</h3>
                <span className={`badge ${estado === 'Finalizado' ? 'done' : 'process'}`}>
                    {estado}
                </span>
                <p>
                    <strong>Categoria:</strong> {categoria}
                </p>
                <Link className='ver-detalle' to={`/proyectos/${id}`}>
                    Ver Detalle
                </Link>
                <button className="btn-eliminar" onClick={()=> eliminar(id)}>Eliminar</button>
            </div>
        </article>
    )
}
export default ProyectoCard;