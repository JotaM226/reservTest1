import React from 'react';
import { Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const Footer = () => {
  return (
    <footer className="bg-militaryGreen text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Primera columna: Logo y redes sociales */}
        <div className="text-center md:text-left">
          <div className="mb-4">
            <img src="/logo.png" alt="Depor Point Logo" className="mx-auto md:mx-0 h-16 w-16" />
          </div>
          <div className="flex justify-center md:justify-start space-x-4">
            <FacebookIcon sx={{ fontSize: 30 }} />
            <InstagramIcon sx={{ fontSize: 30 }} />
            <TwitterIcon sx={{ fontSize: 30 }} />
          </div>
        </div>

        {/* Segunda columna: Nosotros */}
        <div>
          <div className="flex items-center justify-center md:justify-start mb-2">
            <InfoIcon sx={{ fontSize: 24, marginRight: '8px' }} />
            <Typography variant="h6" component="h3" className="font-bold">
              Nosotros
            </Typography>
          </div>
          <Typography variant="body2" className="text-center md:text-left">
            Somos líderes en la gestión de espacios deportivos, ofreciendo soluciones modernas para
            reservar y organizar eventos.
          </Typography>
        </div>

        {/* Tercera columna: Contacto */}
        <div>
          <div className="flex items-center justify-center md:justify-start mb-2">
            <ContactMailIcon sx={{ fontSize: 24, marginRight: '8px' }} />
            <Typography variant="h6" component="h3" className="font-bold">
              Contacto
            </Typography>
          </div>
          <Typography variant="body2" className="text-center md:text-left">
            Email: contacto@deporpoint.com
          </Typography>
          <Typography variant="body2" className="text-center md:text-left">
            Teléfono: +51 999 999 999
          </Typography>
          <Typography variant="body2" className="text-center md:text-left">
            Dirección: Av. Principal 123, Ciudad Deportiva
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
