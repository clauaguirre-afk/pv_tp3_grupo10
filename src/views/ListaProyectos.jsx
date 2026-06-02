import FormularioProyecto from "../components/FormularioProyecto.jsx";
import { useState, useEffect, useRef } from "react";
import RegistroActividad from "../components/RegistroActividad.jsx";
import proyectoService from "../services/proyectoService.js";
import "../css/listaProyectos.css";
import ProyectoCard from "../components/ProyectoCard.jsx";
import DetalleProyecto from "../components/DetalleProyecto.jsx";

const ListaProyectos = () => {

    const [proyectos, setProyectos] = useState(
        proyectoService.obtenerProyectos()
    );

    const [busqueda, setBusqueda] = useState("");
    const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);
    const [ultimaActividad, setUltimaActividad] = useState(null);

    const primeraCarga = useRef(0);

    const eliminar = (id) => {

        const confirmar = window.confirm(
            "¿Estás seguro de eliminar este proyecto?"
        );

        if (confirmar) {

            const tarjeta = document.getElementById(
                `tarjeta-${id}`
            );

            if (tarjeta) {

                tarjeta.classList.add(
                    "card-fade-out"
                );

                setTimeout(() => {

                    proyectoService.eliminarProyecto(id);

                    setProyectos(
                        proyectoService.obtenerProyectos()
                    );

                    if (
                        proyectoSeleccionado &&
                        proyectoSeleccionado.id === id
                    ) {

                        setProyectoSeleccionado(null);

                    }

                },300);

            }

        }

    };

    const verDetalle=(proyecto)=>{

        setProyectoSeleccionado(proyecto);

        setTimeout(()=>{

            const detalleDiv =
            document.getElementById(
                "detalle"
            );

            if(detalleDiv){

                detalleDiv.scrollIntoView({
                    behavior:"smooth"
                });

            }

        },100);

    };

    const buscar = (texto) => {
        setBusqueda(texto);
    };

    const agregar=(formulario)=>{

        const {
            titulo,
            categoria,
            estado,
            descripcion1,
            descripcion2,
            pdf,
            drive,
            github,
            integrante,
            rol
        } = formulario;

        if(
            titulo.trim()==="" ||
            categoria.trim()==="" ||
            estado.trim()===""
        ){

            alert(
                "Completa todos los campos principales"
            );

            return;

        }

        const nuevoProyecto={

            id:Date.now(),

            titulo,

            categoria,

            estado,

            descripcion:[
                descripcion1,
                descripcion2
            ],

            recursos:{
                pdf,
                drive,
                github
            },

            equipo:[
                {
                    nombre:integrante,
                    rol:rol
                }
            ]

        };

        proyectoService.agregarProyecto(
            nuevoProyecto
        );

        setProyectos(
            proyectoService.obtenerProyectos()
        );

    };

    useEffect(()=>{
        primeraCarga.current += 1;
        if(primeraCarga.current <= 2){
            return;
        }
        const fecha = new Date();

        const dia=
        fecha.toLocaleDateString(
            "es-AR",
            {
                day:"2-digit",
                month:"2-digit",
                year:"numeric"
            }
        );

        const hora=
        fecha.toLocaleTimeString(
            "es-AR",
            {
                hour:"2-digit",
                minute:"2-digit",
                hour12:false
            }
        );
        console.log({dia,hora});
        setUltimaActividad(
            `Última actualización de la lista: ${dia} a las ${hora} hs.`
        );

    },[proyectos]);

    const proyectosMostrar = busqueda === "" ? proyectos : proyectos.filter(
        p => p.titulo.toLowerCase().includes(busqueda.toLowerCase())
    );

    return(

        <div>

            <h2 className="titulo">
                Gestión de Proyectos Educativos
            </h2>

            <FormularioProyecto
                agregar={agregar}
            />

            <div className="buscador">

                <input
                type="text"
                placeholder="Buscar proyecto..."
                value={busqueda}
                onChange={
                    (e)=>buscar(
                        e.target.value
                    )
                }
                />

            </div>

            <section className={`contenedor-proyectos ${proyectoSeleccionado ? "con-detalle" : "sin-detalle"}`}>
                <div className="lista-proyectos">

                    {
                        proyectosMostrar.map(
                            p=>(
                            <div
                            id={`tarjeta-${p.id}`}
                            key={p.id}
                            className="tarjeta-animacion-container"
                            >

                            <ProyectoCard
                            proyecto={p}
                            eliminar={eliminar}
                            verDetalle={verDetalle}
                            />

                            </div>
                            )
                        )
                    }

                </div>

                <div
                id="detalle"
                className="detalle-container"
                >

                <DetalleProyecto
                proyecto={proyectoSeleccionado}
                />

                </div>

            </section>

            {ultimaActividad && (
                <RegistroActividad ultimaActividad={ultimaActividad}/>

                )
            }

        </div>

    );

};

export default ListaProyectos;