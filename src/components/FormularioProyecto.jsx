import { useState } from "react";

const FormularioProyecto = ({ agregar }) => {

const [formulario,setFormulario]=useState({
titulo:"",
categoria:"",
estado:"",
descripcion1:"",
descripcion2:"",
pdf:"",
drive:"",
github:"",
integrante:"",
rol:""
});

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
}=formulario;

const registrarCambio=(e)=>{

const {name,value}=e.target;

setFormulario({
...formulario,
[name]:value
});

};

const enviarFormulario=(e)=>{

e.preventDefault();

agregar(formulario);

setFormulario({
titulo:"",
categoria:"",
estado:"",
descripcion1:"",
descripcion2:"",
pdf:"",
drive:"",
github:"",
integrante:"",
rol:""
});

};

return(

<form
className="formulario"
onSubmit={enviarFormulario}
>

<input
type="text"
name="titulo"
placeholder="Título"
value={titulo}
onChange={registrarCambio}
/>

<input
type="text"
name="categoria"
placeholder="Categoría"
value={categoria}
onChange={registrarCambio}
/>

<input
type="text"
name="estado"
placeholder="Estado"
value={estado}
onChange={registrarCambio}
/>

<input
type="text"
name="descripcion1"
placeholder="Descripción 1"
value={descripcion1}
onChange={registrarCambio}
/>

<input
type="text"
name="descripcion2"
placeholder="Descripción 2"
value={descripcion2}
onChange={registrarCambio}
/>

<input
type="text"
name="pdf"
placeholder="PDF"
value={pdf}
onChange={registrarCambio}
/>

<input
type="text"
name="drive"
placeholder="Drive"
value={drive}
onChange={registrarCambio}
/>

<input
type="text"
name="github"
placeholder="GitHub"
value={github}
onChange={registrarCambio}
/>

<input
type="text"
name="integrante"
placeholder="Integrante"
value={integrante}
onChange={registrarCambio}
/>

<input
type="text"
name="rol"
placeholder="Rol"
value={rol}
onChange={registrarCambio}
/>

<button type="submit">
Agregar Proyecto
</button>

</form>

)

}

export default FormularioProyecto;