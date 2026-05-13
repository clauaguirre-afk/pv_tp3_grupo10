const proyectoService = (()=>{/*funcion con arreglo*/
    let proyectos = [
        {
            id: 1,
            titulo: "Programacion Visual", 
            categoria: "Web", 
            estado: "En curso",
            descripcion:"Proyecto realizado en React para aprender componentes y props. Incluye manejo de estados y renderizado dinamico",
            recursos:{
                pdf:"manual-react.pdf",
                drive:"drive.google.com/react",
                github:"github.com/react"
            },
            equipo: [{
                nombre: "Claudio Emanuel Agurres Gomez",
                rol: "Diseño y Desarrollo"
            },
            {
                nombre:"Yesica Micaela Soria",
                rol: "Diseño y Desarrollo"

            },
            {
                nombre:"Florencia Maria Lujan Cordoba",
                rol: "Diseño y Desarrollo"
            }]
        },
        {
            id: 2,
            titulo: "Base de Datos II", 
            categoria: "PDF", 
            estado: "Finalizado",
            descripcion:"Proyecto enfocado en realizar una Base de Datos relacionales y consultas SQL avanzadas",
            recursos:{
                pdf:"bd.pdf",
                drive:"drive.google.com/bd",
                github:"github.com/bd"
            },
            equipo: [{
                nombre: "Claudio Emanuel Agurres Gomez",
                rol: "Diseño y Desarrollo"
            },
            {
                nombre:"Yesica Micaela Soria",
                rol: "Diseño y Desarrollo"

            },
            {
                nombre:"Florencia Maria Lujan Cordoba",
                rol: "Diseño y Desarrollo"
            }]
        },
        {
            id: 3,
            titulo: "Redes I", 
            categoria: "PDF", 
            estado: "En curso",
            descripcion:"Proyecto orientado al estudio de redes informaticas y configuraciones basica de dispositivo. Se trabajo con direcciones IP, mascaras de subred y simulaciones en Cisco Packet Tracer para verificar la conectividad entre equipos",
            recursos:{
                pdf:"redes.pdf",
                drive:"drive.google.com/redes",
                github:"github.com/redes"
            },
            equipo: [{
                nombre: "Claudio Emanuel Agurres Gomez",
                rol: "Diseño y Desarrollo"
            },
            {
                nombre:"Yesica Micaela Soria",
                rol: "Diseño y Desarrollo"

            },
            {
                nombre:"Florencia Maria Lujan Cordoba",
                rol: "Diseño y Desarrollo"
            }]
        },
        {
            id: 4,
            titulo:"Programacion Estructurada", categoria:"Web", 
            estado:"Finalizado",
            descripcion:"Proyecto enfocado en la resolucion de problema mediante algoritmos y pseudocodigo. Se trabajo con estructura condicionales, ciclos repetitivos y validacion de datos utilizando c++",
            recursos:{
                pdf:"estructura.pdf",
                drive:"drive.google.com/estructura",
                github:"github.com/estructura"
            },
            equipo: [{
                nombre: "Claudio Emanuel Agurres Gomez",
                rol: "Diseño y Desarrollo"
            },
            {
                nombre:"Yesica Micaela Soria",
                rol: "Diseño y Desarrollo"

            },
            {
                nombre:"Florencia Maria Lujan Cordoba",
                rol: "Diseño y Desarrollo"
            }]
        },
        {
            id: 5,
            titulo:"Ingles", 
            categoria:"PDF", 
            estado:"En curso",
            descripcion:"Proyecto orientado al desarrollo de habilidades de lectura, escritura y comprension en ingles tecnico. Se realizaron actividades de vocabularios, gramatica, preguntas en presente simple y comprension de texto relacionados con informatica",
            recursos:{
                pdf:"ingles.pdf",
                drive:"drive.google.com/ingles",
                github:"github.com/ingles"
            },
            equipo: [{
                nombre: "Claudio Emanuel Agurres Gomez",
                rol: "Diseño y Desarrollo"
            },
            {
                nombre:"Yesica Micaela Soria",
                rol: "Diseño y Desarrollo"

            },
            {
                nombre:"Florencia Maria Lujan Cordoba",
                rol: "Diseño y Desarrollo"
            }]
        }
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