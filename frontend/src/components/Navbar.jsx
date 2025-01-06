import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-militaryGreen text-white shadow-md sm:h-[80px] h-[114px]">
      {/* Espacio muerto superior solo en móviles */}
      <div className="h-[34px] sm:h-0 bg-militaryGreen"></div>

      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo y Nombre */}
        <div className="flex items-center">
          <div className="bg-white rounded-full p-2 mr-3">
            <img src="/logo.png" alt="Depor Point Logo" className="h-8 w-8" />
          </div>
          <div className="text-left">
            <h1 className="text-xl font-bold leading-none">Depor</h1>
            <h2 className="text-sm font-bold leading-none">Point</h2>
          </div>
        </div>

        {/* Menú para pantallas grandes */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/" className="hover:text-gray-200">
              Alquila una cancha
            </Link>
          </li>
          <li>
            <Link to="/business" className="hover:text-gray-200">
              Haz negocio con nosotros
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-200">
              Nosotros
            </Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-gray-200">
              Regístrate/Ingresa
            </Link>
          </li>
        </ul>

        {/* Menú hamburguesa para pantallas pequeñas */}
        <div className="md:hidden">
          <IconButton onClick={toggleMenu} sx={{ color: 'white' }}>
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </div>
      </div>

      {/* Menú desplegable para pantallas pequeñas */}
      {menuOpen && (
        <ul className="md:hidden bg-militaryGreen text-white flex flex-col items-center space-y-4 p-4">
          <li>
            <Link to="/" className="hover:text-gray-200" onClick={toggleMenu}>
              Alquila una cancha
            </Link>
          </li>
          <li>
            <Link to="/business" className="hover:text-gray-200" onClick={toggleMenu}>
              Haz negocio con nosotros
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-200" onClick={toggleMenu}>
              Nosotros
            </Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-gray-200" onClick={toggleMenu}>
              Regístrate/Ingresa
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
