import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Button } from "@mui/material";

const ProyectoCard = ({ proyecto, eliminar }) => {

    const { id, titulo, categoria, estado } = proyecto;

    return (
        <Card>
            <CardContent>

                <Typography variant="h5" gutterBottom>
                    {titulo}
                </Typography>

                <Typography>
                    <strong>Estado:</strong> {estado}
                </Typography>

                <Typography sx={{ mb: 2 }}>
                    <strong>Categoría:</strong> {categoria}
                </Typography>

                <Button component={Link} to={`/proyectos/${id}`} variant="contained" sx={{ mr: 1 }}>
                    Ver Detalle
                </Button>

                <Button variant="outlined" color="error" onClick={() => eliminar(id)}>
                    Eliminar
                </Button>

            </CardContent>
        </Card>
    );
};

export default ProyectoCard;