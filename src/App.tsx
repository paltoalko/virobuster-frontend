import { Box, ThemeProvider } from '@mui/material';
import React, { useRef } from 'react';
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
  const aboutUs = useRef<HTMLInputElement>(null);
  const faq = useRef<HTMLInputElement>(null);
  const details = useRef<HTMLInputElement>(null);
  const contact = useRef<HTMLInputElement>(null);

  return (
    <Box>
      <ThemeProvider theme={theme}>
        <Header
          contactRef={contact}
          aboutUsRef={aboutUs}
          faqRef={faq}
          detailsRef={details}
        />
        <HeroView />
        <Box className={'container-middle'}>
          <InformationView />
          <VideoView />
          <Box ref={details}>
            <DetailsView />
          </Box>
          <BodyHeader />
          <PhotosView />
          <Box ref={faq}>
            <FAQ />
          </Box>
          <Box ref={contact}>
            <Contact />
          </Box>
          <Box ref={aboutUs}>
            <AboutUs />
          </Box>
          <Footer />
        </Box>
      </ThemeProvider>
    </Box>
  );
}

export default App;
