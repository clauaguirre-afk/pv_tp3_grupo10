import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const RegistroActividad = ({ ultimaActividad }) => {
    return (
        <Box sx={{ mt: 3 }}>
            <Typography variant="h6" gutterBottom>
                Registro de Actividad
            </Typography>

            <Alert severity="info">
                {ultimaActividad}
            </Alert>
        </Box>
    );
};

export default RegistroActividad;