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
    <nav className="sticky top-0 z-50 bg-militaryGreen text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-xl font-bold">Guerrero Mochica</h1>

        {/* Menú para pantallas grandes */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/" className="hover:text-gray-200">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-gray-200">
              Iniciar Sesión
            </Link>
          </li>
          <li>
            <Link to="/register" className="hover:text-gray-200">
              Registrarse
            </Link>
          </li>
          <li>
            <Link to="/profile" className="hover:text-gray-200">
              Perfil
            </Link>
          </li>
        </ul>

        {/* Icono de menú hamburguesa para pantallas pequeñas */}
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
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-gray-200" onClick={toggleMenu}>
              Iniciar Sesión
            </Link>
          </li>
          <li>
            <Link to="/register" className="hover:text-gray-200" onClick={toggleMenu}>
              Registrarse
            </Link>
          </li>
          <li>
            <Link to="/profile" className="hover:text-gray-200" onClick={toggleMenu}>
              Perfil
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
