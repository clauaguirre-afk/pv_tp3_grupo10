const proyectoService = (()=>{/*funcion con arreglo*/
    let proyectos = [
        {id: 1,titulo: "Programacion Visual", categoria: "Web", estado: "En curso"},
        {id: 2,titulo: "Base de Datos II", categoria: "PDF", estado: "Finalizado"},
        {id: 3,titulo: "Redes I", categoria: "PDF", estado: "En curso"},
        {id: 4,titulo:"Programacion Estructurada", categoria:"Web", estado:"Finalizado"},
        {id: 5,titulo:"Ingles", categoria:"PDF", estado:"En curso"}
    ];

    const obtenerProyectos = () => [...proyectos];/*crea una copia del areglo proyecto*/
    

    const agregarProyecto = (proyecto) => {
        proyectos.push(proyecto);};

    const eliminarProyecto=(id)=>{
        proyectos=proyectos.filter(p => p.id !== id)

    }

    const buscarProyecto=(texto)=>{
        return proyectos.filter(p =>
            p.titulo.toLowerCase().includes(texto.toLowerCase())
        )
    }
    return {obtenerProyectos,
        agregarProyecto,
        eliminarProyecto,
        buscarProyecto
    };
})();
export default proyectoService;