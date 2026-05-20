const RegistroActividad = ({ultimaActividad}) => {
    return (
        <div className="registro-actividad">
            <h3>Registro de Actividad</h3>
            <p>Última modificación:</p>
            <span>{ultimaActividad}</span>
        </div>);
};
export default RegistroActividad;