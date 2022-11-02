import { createTheme, PaletteMode } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'light' as PaletteMode,
    primary: {
      main: '#fafafa',
    },
    secondary: {
      main: '#2164A0',
    },
  },
  typography: {
    fontFamily: 'Montserrat',
  },
});

export default theme;
