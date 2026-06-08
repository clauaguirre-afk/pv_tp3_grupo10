const proyectoService = (()=>{/*funcion con arreglo*/
    let proyectos = [
        {
            id: 1,
            titulo: "Programacion Visual", 
            categoria: "Web", 
            estado: "En Curso",
            descripcion: [
                "Proyecto realizado en React para aprender componentes y props.",
                "Incluye manejo de estados, renderizado dinámico y comunicación entre componentes utilizando props."],
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
                nombre:"Flores Aparicio Daniel Jesus",
                rol: "Diseño y Desarrollo"

            },
            {
                nombre:"Florencia Maria Lujan Cordoba",
                rol: "Diseño y Desarrollo"
            },
            {
                nombre:"Albaro Samuel Ruiz",
                rol: "Diseño y Desarrollo"
            },
            {
                nombre:"Argota Martin Ramon",
                rol: "Diseño y Desarrollo"
            }
        ]
        },
        {
            id: 2,
            titulo: "Base de Datos II", 
            categoria: "PDF", 
            estado: "Finalizado",
            descripcion: [
                "Proyecto orientado al diseño y administración de bases de datos relacionales utilizando consultas SQL y modelado entidad-relación.",
                "Se trabajó con creación de tablas, relaciones entre entidades, consultas avanzadas y optimización de estructuras de almacenamiento de información."],
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
                nombre:"Flores Aparicio Daniel Jesus",
                rol: "Diseño y Desarrollo"

            },
            {
                nombre:"Florencia Maria Lujan Cordoba",
                rol: "Diseño y Desarrollo"
            },
            {
                nombre:"Albaro Samuel Ruiz",
                rol: "Diseño y Desarrollo"
            },
            {
                nombre:"Argota Martin Ramon",
                rol: "Diseño y Desarrollo"
            }
        ]
        },
        {
            id: 3,
            titulo: "Redes I", 
            categoria: "PDF", 
            estado: "En Curso",
            descripcion: [
                "Proyecto enfocado en el análisis y configuración de redes informáticas utilizando simulaciones en Cisco Packet Tracer.",
                "Se realizaron prácticas de direccionamiento IP, configuración de dispositivos de red y verificación de conectividad mediante herramientas de diagnóstico."],
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
                nombre:"Flores Aparicio Daniel Jesus",
                rol: "Diseño y Desarrollo"

            },
            {
                nombre:"Florencia Maria Lujan Cordoba",
                rol: "Diseño y Desarrollo"
            },
            {
                nombre:"Albaro Samuel Ruiz",
                rol: "Diseño y Desarrollo"
            },
            {
                nombre:"Argota Martin Ramon",
                rol: "Diseño y Desarrollo"
            }
        ]
        },
        {
            id: 4,
            titulo:"Programacion Estructurada", categoria:"Web", 
            estado:"Finalizado",
            descripcion: [
                "Proyecto destinado al aprendizaje de lógica de programación y resolución de problemas mediante algoritmos estructurados.",
                "Se utilizaron estructuras condicionales, ciclos repetitivos y funciones en C++ para desarrollar soluciones eficientes a distintos ejercicios prácticos."],
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
                nombre:"Flores Aparicio Daniel Jesus",
                rol: "Diseño y Desarrollo"

            },
            {
                nombre:"Florencia Maria Lujan Cordoba",
                rol: "Diseño y Desarrollo"
            },
            {
                nombre:"Albaro Samuel Ruiz",
                rol: "Diseño y Desarrollo"
            }]
        },
        {
            id: 5,
            titulo:"Ingles", 
            categoria:"PDF", 
            estado:"En Curso",
            descripcion: [
                "Proyecto orientado al fortalecimiento de habilidades de comprensión y escritura en inglés técnico aplicado a informática.",
                "Se trabajó con vocabulario especializado, lectura de documentación técnica y ejercicios de gramática relacionados con el ámbito tecnológico."],
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
                nombre:"Flores Aparicio Daniel Jesus",
                rol: "Diseño y Desarrollo"

            },
            {
                nombre:"Florencia Maria Lujan Cordoba",
                rol: "Diseño y Desarrollo"
            },
            {
                nombre:"Albaro Samuel Ruiz",
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

    const obtenerIntegrantes = () => {
        const mapaIntegrantes = new Map();
        
        proyectos.forEach(p => {
            p.equipo.forEach(miembro => {
                if (!mapaIntegrantes.has(miembro.nombre)) {
                    mapaIntegrantes.set(miembro.nombre, {nombre: miembro.nombre, rolPrincipal: miembro.rol, institucion: "Instituto de Educación Superior N° 7", proyectosAsignados: []
                    });
                }
                mapaIntegrantes.get(miembro.nombre).proyectosAsignados.push({
                    id: p.id,
                    titulo: p.titulo,
                    estado: p.estado,
                    rolEnProyecto: miembro.rol
                });
            });
        });
        
        return Array.from(mapaIntegrantes.values());
    };

    return {obtenerProyectos,
        agregarProyecto,
        eliminarProyecto,
        buscarProyecto,
        obtenerIntegrantes
    };
})();
export default proyectoService;