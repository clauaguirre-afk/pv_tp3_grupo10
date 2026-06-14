import React, { useState,  useContext } from 'react';
import '../css/styles.css';
import {Container, Paper, Typography, Box, Button, TextField} from '@mui/material';
import { UsuarioContext } from '../context/UsuarioContext';
const PerfilUsuario = () => {
  const {usuario, actualizarPerfil} = useContext(UsuarioContext);
  const [editando, setEditando] = useState(false);

  const [nombre, setNombre] = useState(usuario.nombre);
  const [dni, setDni] = useState(usuario.dni);
  const [rol, setRol] = useState(usuario.rol);
  const [institucion, setInstitucion] = useState(usuario.institucion);

  const guardarCambios = () => {
    actualizarPerfil({
      nombre,
      dni,
      rol,
      institucion
    });
    setEditando(false);
  };
  return (
    <Container maxWidth="md" sx={{mt:4}}>
      <Typography variant="h4" align="center" gutterBottom>
        Perfil de Usuario
      </Typography>

      <Paper elevation={3} sx={{p:3}}>
        <Box>
          <Typography>
            <strong>Nombre:</strong> {usuario.nombre}
          </Typography>
          <Typography>
            <strong>DNI:</strong> {usuario.dni}
          </Typography>
          <Typography>
            <strong>Rol:</strong> {usuario.rol}
          </Typography>
          <Typography>
            <strong>Institucion:</strong> {usuario.institucion}
          </Typography>
          <Button variant="contained" sx={{mt: 2 }} onClick={()=>setEditando(true)}>
            Editar Perfil
          </Button>
          {editando && (
            <Box sx={{mt:2}}>
              <TextField label="Nombre" fullWidth margin="normal" value={nombre} onChange={(e) => setNombre(e.target.value)} />
              <TextField label="DNI" fullWidth margin="normal" value={dni} onChange={(e) => setDni(e.target.value)}/>
              <TextField label="Rol" fullWidth margin="normal" value={rol} onChange={(e) => setRol(e.target.value)}/>
              <TextField label="Institucion" fullWidth margin="normal" value={institucion} onChange={(e) => setInstitucion(e.target.value)}/>
              
              <Button variant="contained" sx={{ mt: 2}} onClick={guardarCambios}>
                Guardar Cambios
              </Button>
            </Box>
          )}
        </Box>
      </Paper>
    </Container>
  );
};
export default PerfilUsuario;
