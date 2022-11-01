import { Box, ThemeProvider } from '@mui/material';
import React from 'react';
import theme from './assets/theme';
import Header from './components/Header';
import HeroView from './components/HeroView';
import DetailsView from './components/DetailsView';
import InformationView from './components/InformationView';
import PhotosView from './components/PhotosView';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BodyHeader from './components/BodyHeader';
import './assets/styles/style.css';
import VideoView from './components/VideoView';
import FAQ from './components/FAQ';
import AboutUs from './components/AboutUs';
function App() {
  return (
    <Box>
      <ThemeProvider theme={theme}>
        <Header />
        <HeroView />
        <Box className={'container-middle'}>
          <InformationView />
          <VideoView />
          <DetailsView />
          <BodyHeader />
          <PhotosView />
          <FAQ />
          <Contact />
          <AboutUs />
          <Footer />
        </Box>
      </ThemeProvider>
    </Box>
  );
}

export default App;
