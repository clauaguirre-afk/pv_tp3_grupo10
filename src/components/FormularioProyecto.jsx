import { useState } from "react";
import { Box, TextField, Button, MenuItem } from "@mui/material";

const FormularioProyecto = ({ agregar }) => {

const [formulario,setFormulario]=useState({ titulo:"", categoria:"", estado:"", descripcion1:"", descripcion2:"", pdf:"", drive:"", github:"", integrante:"", rol:"" });

const { titulo, categoria, estado, descripcion1, descripcion2, pdf, drive, github, integrante, rol}=formulario;

const registrarCambio=(e)=>{
    const {name,value}=e.target;
    setFormulario({ ...formulario, [name]:value });
};

const enviarFormulario=(e)=>{
    e.preventDefault();
    agregar(formulario);
    setFormulario({ titulo:"", categoria:"", estado:"", descripcion1:"", descripcion2:"", pdf:"", drive:"", github:"", integrante:"", rol:""});
};
return(

<Box component="form" className="formulario" onSubmit={enviarFormulario} sx={{ display: "flex",
 flexDirection: "column", gap: 2, mt: 3 }}>

    <TextField label="Título" name="titulo" value={titulo} onChange={registrarCambio} fullWidth/>

    <TextField label="Categoría" name="categoria" value={categoria} onChange={registrarCambio} fullWidth/>

    <TextField select label="Estado" name="estado" value={estado} onChange={registrarCambio} fullWidth>
        <MenuItem value="En Curso">
            En Curso
        </MenuItem>
        <MenuItem value="Finalizado">
            Finalizado
        </MenuItem>
    </TextField>

    <TextField label="Descripción 1" name="descripcion1" value={descripcion1} onChange={registrarCambio} fullWidth/>

    <TextField label="Descripción 2" name="descripcion2" value={descripcion2} onChange={registrarCambio} fullWidth/>

    <TextField label="PDF" name="pdf" value={pdf} onChange={registrarCambio} fullWidth/>

    <TextField label="Drive" name="drive" value={drive} onChange={registrarCambio} fullWidth/>

    <TextField label="GitHub" name="github" value={github} onChange={registrarCambio} fullWidth/>

    <TextField label="Integrante" name="integrante" value={integrante} onChange={registrarCambio} fullWidth/>

    <TextField label="Rol" name="rol" value={rol} onChange={registrarCambio} fullWidth/>

    <Button type="submit" variant="contained" size="large">
        Agregar Proyecto
    </Button>

</Box>

)

}

export default FormularioProyecto;