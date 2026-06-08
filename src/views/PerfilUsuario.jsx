import React, { useState, useEffect } from 'react';
import proyectoService from '../services/proyectoService';
import '../css/styles.css';
import {Container, Paper, Typography, Box} from '@mui/material';
const PerfilUsuario = () => {
  const [integrantes, setIntegrantes] = useState([]);

  useEffect(() => {
    const listaIntegrantes = proyectoService.obtenerIntegrantes();
    setIntegrantes(listaIntegrantes);
  }, []);

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom> Perfil de Usuario </Typography>
      {integrantes.map((integrante) => (
        <Paper key={integrante.nombre} elevation={3} sx={{ p: 3, mb: 2 }}>
          <Box>
            <Typography>
              <strong>Nombre:</strong> {integrante.nombre}
            </Typography>

            <Typography>
              <strong>Rol:</strong> {integrante.rolPrincipal}
            </Typography>

            <Typography>
              <strong>Institución:</strong> {integrante.institucion}
            </Typography>
          </Box>
        </Paper>
      ))}
    </Container>
  );
};

export default PerfilUsuario;
