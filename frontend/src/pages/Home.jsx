import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const categories = [
  { title: 'Fútbol', description: 'Reserva tu cancha favorita para partidos de fútbol.' },
  { title: 'Basketball', description: 'Encuentra lugares para tus partidos de basketball.' },
  { title: 'Vóley', description: 'Cancha disponible para torneos y entrenamientos.' },
];

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Bienvenido a Reservas Futboleras
      </h1>
      <Grid container spacing={4}>
        {categories.map((category, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h5" color="primary">
                  {category.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {category.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
