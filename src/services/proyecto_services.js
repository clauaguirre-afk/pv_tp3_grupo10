const prooyectoService = (()=>{/*funcion con arreglo*/
    let proyectos = [
        {id: 1,titulo: "turnos online", categoria: "Web", estado: "En curso"},
        {id: 2,titulo: "App Control de asistencia", categoria: "Mobile", estado: "En curso"},
        {id: 3,titulo: "Gestion de bibloteca", categoria: "WEscritorio", estado: "Finalizado"}
    ];

    const obtenerProyectos = () =>[...proyectos];/*crea una copia del areglo proyecto*/
    const
    return {obtenerProyectos};
})();
export default prooyectoService;