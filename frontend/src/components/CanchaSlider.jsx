import React from 'react';
import Slider from 'react-slick';
import { Card, CardContent, Typography, Button, CardMedia } from '@mui/material';
import CustomArrow from './CustomArrow';
import { Link } from 'react-router-dom';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

const CanchaSlider = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4, // Por defecto se muestran 4 tarjetas
    slidesToScroll: 1,
    nextArrow: <CustomArrow direction="right" />,
    prevArrow: <CustomArrow direction="left" />,
    responsive: [
      {
        breakpoint: 768, // Para dispositivos móviles
        settings: {
          slidesToShow: 1, // Mostrar solo una tarjeta en móviles
          slidesToScroll: 1,
        },
      },
    ],
  };

  const courts = [
    { id: 1, name: 'Cancha 1', image: 'https://via.placeholder.com/300x350?text=Cancha+1' },
    { id: 2, name: 'Cancha 2', image: 'https://via.placeholder.com/300x350?text=Cancha+2' },
    { id: 3, name: 'Cancha 3', image: 'https://via.placeholder.com/300x350?text=Cancha+3' },
    { id: 4, name: 'Cancha 4', image: 'https://via.placeholder.com/300x350?text=Cancha+4' },
    { id: 5, name: 'Cancha 5', image: 'https://via.placeholder.com/300x350?text=Cancha+5' },
    { id: 6, name: 'Cancha 6', image: 'https://via.placeholder.com/300x350?text=Cancha+6' },
  ];

  return (
    <div className="w-full p-4 sm:p-2 mb-8">
      <h2 className="text-2xl sm:text-xl font-bold text-center text-militaryGreen mb-4">
        Alquila tu cancha
      </h2>
      {/* Carrusel con flechas personalizadas */}
      <div style={{ overflow: 'visible' }}>
        <Slider {...settings}>
          {courts.map((court) => (
            <div key={court.id} className="px-2 sm:px-1"> {/* Reducción de espacio entre tarjetas */}
              <div style={{ overflow: 'visible', padding: '8px' }}>
                <Card
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                    padding: '0px',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <CardMedia
                    component="img"
                    height="160"
                    image={court.image}
                    alt={court.name}
                  />
                  <CardContent
                    sx={{
                      padding: '16px', // Padding por defecto
                      '@media (max-width: 768px)': {
                        padding: '8px', // Padding reducido en móviles
                      },
                    }}
                  >
                    <Typography variant="h6" color="primary" gutterBottom>
                      {court.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Descripción breve de {court.name}.
                    </Typography>
                  </CardContent>
                  <div className="flex justify-end">
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{
                        margin: '16px',
                      }}
                    >
                      Reservar ahora
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {/* Botón Ver Todas las Canchas */}
      <div className="text-center mt-6">
        <Button
          component={Link}
          to="/alquila-tu-cancha"
          variant="outlined"
          color="secondary"
          sx={{
            padding: '8px 16px',
            borderColor: '#4B5320',
            color: '#4B5320',
            '&:hover': {
              backgroundColor: '#4B532020', // Verde militar con transparencia
            },
          }}
          endIcon={<DoubleArrowIcon />} // Restaurado el ícono de doble flecha
        >
          Ver todas las canchas
        </Button>
      </div>
    </div>
  );
};

export default CanchaSlider;
