import React from 'react';
import Slider from 'react-slick';
import { Card, CardContent, Typography, Button, CardMedia } from '@mui/material';
import CustomArrow from './CustomArrow';

const CanchaSlider = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <CustomArrow direction="right" />,
    prevArrow: <CustomArrow direction="left" />,
    responsive: [
      {
        breakpoint: 768, // Para móviles
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const courts = [
    { id: 1, name: 'Cancha 1', image: 'https://via.placeholder.com/300x200?text=Cancha+1' },
    { id: 2, name: 'Cancha 2', image: 'https://via.placeholder.com/300x200?text=Cancha+2' },
    { id: 3, name: 'Cancha 3', image: 'https://via.placeholder.com/300x200?text=Cancha+3' },
    { id: 4, name: 'Cancha 4', image: 'https://via.placeholder.com/300x200?text=Cancha+4' },
    { id: 5, name: 'Cancha 5', image: 'https://via.placeholder.com/300x200?text=Cancha+5' },
    { id: 6, name: 'Cancha 6', image: 'https://via.placeholder.com/300x200?text=Cancha+6' },
  ];

  return (
    <div className="w-full p-8 mb-12">
      <h2 className="text-2xl font-bold text-center text-militaryGreen mb-6">Alquila tu cancha</h2>
      {/* Forzar que el carrusel no recorte las tarjetas */}
      <div style={{ overflow: 'visible' }}>
        <Slider {...settings}>
          {courts.map((court) => (
            <div key={court.id} className="px-4"> {/* Espaciado entre tarjetas */}
              <div style={{ overflow: 'visible', padding: '10px' }}>
                <Card
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%', // Asegura que las tarjetas sean completamente visibles
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
                  <CardContent>
                    <Typography variant="h6" color="primary" gutterBottom>
                      {court.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Descripción breve de {court.name}.
                    </Typography>
                  </CardContent>
                  <div className="flex justify-end">
                    <Button variant="contained" color="primary"
                    sx={{
                        margin:"20px",
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
    </div>
  );
};

export default CanchaSlider;
