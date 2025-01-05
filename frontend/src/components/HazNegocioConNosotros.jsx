import React from 'react';
import { Typography } from '@mui/material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

const tarjetasNegocios = [
  { id: 1, title: 'Anúnciate con nosotros', image: 'https://via.placeholder.com/300x200?text=Anúnciate' },
  { id: 2, title: 'Academias y profesores', image: 'https://via.placeholder.com/300x200?text=Academias' },
  { id: 3, title: 'Organiza tu torneo con nosotros', image: 'https://via.placeholder.com/300x200?text=Torneos' },
  { id: 4, title: 'Eventos', image: 'https://via.placeholder.com/300x200?text=Eventos' },
];

const HazNegocioConNosotros = () => {
  return (
    <div className="bg-gray-100 py-12">
      {/* Título */}
      <div className="text-center mb-8">
        <div className="flex justify-center items-center mb-4">
          <BusinessCenterIcon sx={{ fontSize: 40, color: '#4B5320' }} />
        </div>
        <Typography variant="h4" component="h2" color="primary">
          Haz negocio con nosotros
        </Typography>
      </div>

      {/* Tarjetas */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {tarjetasNegocios.map((tarjeta) => (
          <div
            key={tarjeta.id}
            className="group relative overflow-hidden rounded-lg cursor-pointer"
          >
            {/* Imagen */}
            <img
              src={tarjeta.image}
              alt={tarjeta.title}
              className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
            />
            {/* Oscurecimiento */}
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-opacity duration-300"></div>
            {/* Título */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Typography
                variant="h6"
                className="text-white text-center font-bold"
              >
                {tarjeta.title}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HazNegocioConNosotros;
