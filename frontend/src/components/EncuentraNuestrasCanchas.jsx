import React from 'react';
import { Typography } from '@mui/material';
import MapIcon from '@mui/icons-material/Map';

const EncuentraNuestrasCanchas = () => {
  return (
    <div className="bg-gray-100 py-12">
      {/* Título */}
      <div className="text-center mb-8">
        <div className="flex justify-center items-center mb-4">
          <MapIcon sx={{ fontSize: 40, color: '#4B5320' }} />
        </div>
        <Typography variant="h4" component="h2" color="primary">
          Encuentra nuestras canchas
        </Typography>
      </div>

      {/* Contenido */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
        {/* Banner Publicitario Izquierdo */}
        <div className="flex justify-center items-center md:col-span-1 h-20 sm:h-[50px]">
          <img
            src="https://via.placeholder.com/300x50?text=Publicidad+1"
            alt="Publicidad 1"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Mapa Central */}
        <div className="flex justify-center items-center md:col-span-2 h-80">
          <div className="w-full h-full bg-gray-300 flex justify-center items-center">
            <Typography variant="body1" color="text.secondary">
              Aquí irá un mapa de Google
            </Typography>
          </div>
        </div>

        {/* Banner Publicitario Derecho */}
        <div className="flex justify-center items-center md:col-span-1 h-20 sm:h-[50px]">
          <img
            src="https://via.placeholder.com/300x50?text=Publicidad+2"
            alt="Publicidad 2"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default EncuentraNuestrasCanchas;
