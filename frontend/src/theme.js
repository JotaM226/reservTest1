import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4B5320', // Verde militar como color principal
    },
    secondary: {
      main: '#4B5320', // Verde militar para el outline del botón
      contrastText: '#FFFFFF', // Blanco para el texto del botón secundario
    },
  },
});

export default theme;
