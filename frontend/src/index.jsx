import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
// Calcular la altura real del viewport
const setViewportHeight = () => {
  const vh = window.innerHeight * 0.01; // Convertir el viewport height en unidades vh
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

// Establecer la altura al cargar la página
setViewportHeight();

// Actualizar la altura cuando se redimensiona la ventana
window.addEventListener('resize', setViewportHeight);

