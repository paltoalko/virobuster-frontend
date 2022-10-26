import { Box, ThemeProvider, Typography } from '@mui/material';
import React from 'react';
import theme from './assets/theme';
import Header from './components/Header';
import HeroView from './components/HeroView';
import DetailsView from './components/DetailsView';
import InformationView from './components/InformationView';
import PhotosView from './components/PhotosView';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './assets/styles/style.css';
function App() {
  return (
    <Box>
      <ThemeProvider theme={theme}>
        <Header />
        <HeroView />
        <Box className={'container-middle'}>
          <DetailsView />
          <PhotosView />
          <InformationView />
          <Contact />
          <Footer />
        </Box>
      </ThemeProvider>
    </Box>
  );
}

export default App;
