import { Card, CardContent, Container, Box, Typography } from '@mui/material';
import proyectoService from '../services/proyectoService';

const Dashboard =() =>{
    const proyectos = proyectoService.obtenerProyectos();
    const totalProyectos = proyectos.length;
    const proyectosEnCurso = proyectos.filter(proyecto => proyecto.estado === 'En Curso').length;
    const proyectosFinalizados = proyectos.filter(proyecto => proyecto.estado === 'Finalizado').length;

    return (
        <Container maxWidth="md" sx={{ mt: 5, mb: 5}}>
            <Typography variant="h4" component="h2" gutterBottom align="center" color="primary">
                Panel de Control
            </Typography>
            <Typography variant="body1" paragraph align="center" color="text.secondary" sx={{ mb: 4 }}>
                Bienvenido al Sistema de Gestión de Proyectos.
                Aquí tienes un resumen general del estado actual de los proyectos.
            </Typography>

            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 3,
                justifyContent: 'center',
            }}>
                <Card elevation={3} sx={{ minWidth: 220, textAlign: 'center' }}>
                    <CardContent>
                        <Typography color="text.secondary" gutterBottom>
                            Total de Proyectos
                        </Typography>
                        <Typography variant="h3" component="div" color="primary">
                            {totalProyectos}
                        </Typography>
                    </CardContent>
                </Card>
                <Card elevation={3} sx={{ minWidth: 220, textAlign: 'center' }}>
                    <CardContent>
                        <Typography color="text.secondary" gutterBottom>
                            Proyectos En Curso
                        </Typography>
                        <Typography variant="h3" component="div" sx={{ color: '#f59e0b'}}>
                            {proyectosEnCurso}
                        </Typography>
                    </CardContent>
                </Card>
                <Card elevation={3} sx={{ minWidth: 220, textAlign: 'center' }}>
                    <CardContent>
                        <Typography color="text.secondary" gutterBottom>
                            Proyectos Finalizados
                        </Typography>
                        <Typography variant="h3" component="div" sx={{ color: '#16a34a'}}>
                            {proyectosFinalizados}
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Container>
    )
}
export default Dashboard;