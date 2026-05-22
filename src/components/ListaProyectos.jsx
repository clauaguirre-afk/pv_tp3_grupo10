import FormularioProyecto from "./FormularioProyecto";
import { useState, useEffect, useRef } from "react";
import RegistroActividad from "./RegistroActividad";
import proyectoService from "../services/proyectoService";
import "../css/listaProyectos.css";
import ProyectoCard from "./ProyectoCard.jsx";
import DetalleProyecto from "./DetalleProyecto.jsx";

const ListaProyectos = () => {

    const [proyectos, setProyectos] = useState(
        proyectoService.obtenerProyectos()
    );

    const [busqueda, setBusqueda] = useState("");
    const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);
    const [ultimaActividad, setUltimaActividad] = useState("");

    const primeraCarga = useRef(true);

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

    const buscar=(texto)=>{

        setBusqueda(texto);

        if(texto===""){

            setProyectos(
                proyectoService.obtenerProyectos()
            );

        }else{

            setProyectos(
                proyectoService.buscarProyecto(texto)
            );

        }

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

         if(
            primeraCarga.current
        ){

            primeraCarga.current=false;

            return;

        }

        const fecha=
        new Date();

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

        setUltimaActividad(
            `Última actualización de la lista: ${dia} a las ${hora} hs.`
        );

    },[proyectos]);

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

            <section className="contenedor-proyectos">

                <div className="lista-proyectos">

                    {
                        proyectos.map(
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

            {
                ultimaActividad && (

                <RegistroActividad
                ultimaActividad={ultimaActividad}
                />

                )
            }

        </div>

    );

};

export default ListaProyectos;