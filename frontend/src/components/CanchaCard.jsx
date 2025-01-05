import React from 'react';
import { Card, CardContent, Typography, Button, CardActions, CardMedia } from '@mui/material';

const CanchaCard = ({ name, description, image }) => {
  return (
    <Card sx={{ backgroundColor: '#FFFFFF' }}>
      {/* Imagen */}
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={name}
      />
      {/* Contenido */}
      <CardContent>
        <Typography variant="h5" color="primary" gutterBottom>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      {/* Botones */}
      <CardActions>
        {/* Botón outline */}
        <Button
          variant="outlined"
          color="secondary" // Usamos el color secundario (outline)
          sx={{
            borderColor: '#4B5320', // Aseguramos el color verde militar para el borde
            color: '#4B5320', // Texto del botón
            '&:hover': {
              backgroundColor: '#4B532010', // Verde militar con transparencia al pasar el cursor
              borderColor: '#4B5320',
            },
          }}
        >
          Ver más
        </Button>
        {/* Botón principal */}
        <Button variant="contained" color="primary">
          Reservar ahora
        </Button>
      </CardActions>
    </Card>
  );
};

export default CanchaCard;
