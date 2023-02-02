import { Box, ThemeProvider } from '@mui/material';
import React, { useRef } from 'react';
import theme from './assets/theme';
import Header from './components/Header';
import DetailsView from './components/DetailsView';
import PhotosView from './components/PhotosView';
import Contact from './components/Contact';
import BodyHeader from './components/BodyHeader';
import './assets/styles/style.css';
import VideoView from './components/VideoView';
import FAQ from './components/FAQ';
import AboutUs from './components/AboutUs';
import HeroView from 'components/HeroView';
import InformationView from 'components/InformationView';
import LogoBanner from 'components/LogoBanner';

function App() {
  const aboutUs = useRef<HTMLInputElement>(null);
  const faq = useRef<HTMLInputElement>(null);
  const details = useRef<HTMLInputElement>(null);
  const contact = useRef<HTMLInputElement>(null);

  window.onbeforeunload = function () {
    if (window.scrollTo) window.scrollTo(0, 0);
    if (history && history.scrollRestoration)
      history.scrollRestoration = 'manual';
  };

  return (
    <Box>
      <ThemeProvider theme={theme}>
        <Header
          contactRef={contact}
          aboutUsRef={aboutUs}
          faqRef={faq}
          detailsRef={details}
        />
        <Box className={'container-middle'}>
          <HeroView />
          <InformationView />
          <LogoBanner />
          <VideoView />
          <BodyHeader />
          <PhotosView contactRef={contact} />
          <Box ref={details}>
            <DetailsView />
          </Box>
          <Box ref={faq}>
            <FAQ />
          </Box>
          <Box ref={aboutUs}>
            <AboutUs />
          </Box>
          <Box ref={contact}>
            <Contact />
          </Box>
        </Box>
      </ThemeProvider>
    </Box>
  );
}

export default App;
