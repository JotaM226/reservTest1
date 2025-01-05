import React from 'react';
import BannerCarousel from '../components/BannerCarousel';
import CanchaSlider from '../components/CanchaSlider';
import EncuentraNuestrasCanchas from '../components/EncuentraNuestrasCanchas';
import HazNegocioConNosotros from '../components/HazNegocioConNosotros';

const Home = () => {
  return (
    <div className="bg-white min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center text-militaryGreen mb-8">
        DeporPoint
      </h1>
      <BannerCarousel />
      <CanchaSlider />
      <EncuentraNuestrasCanchas />
      <HazNegocioConNosotros />
    </div>
  );
};

export default Home;
