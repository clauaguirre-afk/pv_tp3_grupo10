const ProyectoCard = ({proyecto, eliminar, verDetalle})=>{
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
                <button className="ver-detalle" onClick={()=> verDetalle(proyecto)}>
                    Ver Detalle
                </button>
                <button className="btn-eliminar" onClick={()=> eliminar(id)}>Eliminar</button>
            </div>
        </article>
    )
}
export default ProyectoCard;