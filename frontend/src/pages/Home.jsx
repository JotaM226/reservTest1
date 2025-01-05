import React from 'react';
import { Grid2 } from '@mui/material';
import CanchaCard from '../components/CanchaCard';

const courts = [
  { id: 1, name: 'Cancha 1', image: 'https://via.placeholder.com/300x200?text=Cancha+1', description: 'Esta es una descripción breve de Cancha 1.' },
  { id: 2, name: 'Cancha 2', image: 'https://via.placeholder.com/300x200?text=Cancha+2', description: 'Esta es una descripción breve de Cancha 2.' },
  { id: 3, name: 'Cancha 3', image: 'https://via.placeholder.com/300x200?text=Cancha+3', description: 'Esta es una descripción breve de Cancha 3.' },
  { id: 4, name: 'Cancha 4', image: 'https://via.placeholder.com/300x200?text=Cancha+4', description: 'Esta es una descripción breve de Cancha 4.' },
  { id: 5, name: 'Cancha 5', image: 'https://via.placeholder.com/300x200?text=Cancha+5', description: 'Esta es una descripción breve de Cancha 5.' },
  { id: 6, name: 'Cancha 6', image: 'https://via.placeholder.com/300x200?text=Cancha+6', description: 'Esta es una descripción breve de Cancha 6.' },
];

const Home = () => {
  return (
    <div className="bg-white min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center text-militaryGreen mb-8">
        Guerrero Mochica
      </h1>
      <Grid2 container spacing={4}>
        {courts.map((court) => (
          <Grid2 item xs={12} sm={6} md={4} key={court.id}>
            <CanchaCard
              name={court.name}
              description={court.description}
              image={court.image}
            />
          </Grid2>
        ))}
      </Grid2>
    </div>
  );
};

export default Home;
