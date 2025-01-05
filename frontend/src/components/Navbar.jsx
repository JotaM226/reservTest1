import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-militaryGreen text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">Guerrero Mochica</h1>
        <ul className="flex space-x-4">
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
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
