import React from 'react';
import BannerCarousel from '../components/BannerCarousel';
import CanchaSlider from '../components/CanchaSlider';
import EncuentraNuestrasCanchas from '../components/EncuentraNuestrasCanchas';
import HazNegocioConNosotros from '../components/HazNegocioConNosotros';

const Home = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Contenedor principal con padding responsivo */}
      <div className="container mx-auto px-4 sm:px-2">
        {/* Título restaurado */}
        <h1 className="text-3xl sm:text-2xl font-bold text-center text-militaryGreen mb-8">
          DeporPoint
        </h1>
        <BannerCarousel />
        <CanchaSlider />
        <EncuentraNuestrasCanchas />
        <HazNegocioConNosotros />
      </div>
    </div>
  );
};

export default Home;
