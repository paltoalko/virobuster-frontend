import { Box, Button } from '@mui/material';
import React, { useState } from 'react';
import TechnicalData from '../assets/detailsView/TechnicalData';
import Details from '../assets/detailsView/Details';
import Photos from '../assets/detailsView/Photos';
import styles from '../assets/styles/DetailsView.module.css';
import { ReactComponent as SideLogo } from '../assets/svg/logo-sideways.svg';

const DetailsView: React.FC<{}> = ({}) => {
  const [activeTechnicalData, setActiveTechnicalData] = useState(true);
  const [activePhotos, setActivePhotos] = useState(false);
  const [activeDetails, setActiveDetails] = useState(false);

  const handlePress = (e) => {
    if (e.target.name === 'technicalData') {
      setActiveTechnicalData(true);
      setActivePhotos(false);
      setActiveDetails(false);
    } else if (e.target.name === 'details') {
      setActiveTechnicalData(false);
      setActivePhotos(false);
      setActiveDetails(true);
    } else if (e.target.name === 'photos') {
      setActiveTechnicalData(false);
      setActivePhotos(true);
      setActiveDetails(false);
    }
  };
  return (
    <Box className={styles.detailsContainer}>
      {activeTechnicalData && <TechnicalData />}
      {activePhotos && <Photos />}
      {activeDetails && <Details />}

      <SideLogo className={styles.sideLogo} />
      <Box className={styles.buttonBox}>
        <Button
          variant={activePhotos ? 'contained' : 'outlined'}
          color="primary"
          name="photos"
          sx={{ minWidth: '9vw', boxShadow: '7' }}
          onClick={(e) => handlePress(e)}
        >
          Zdjęcia
        </Button>
        <Button
          variant={activeTechnicalData ? 'contained' : 'outlined'}
          color="primary"
          name="technicalData"
          sx={{ minWidth: '9vw', boxShadow: '7' }}
          onClick={(e) => handlePress(e)}
        >
          Opis
        </Button>
        <Button
          variant={activeDetails ? 'contained' : 'outlined'}
          color="primary"
          name="details"
          sx={{ minWidth: '9vw', boxShadow: '7' }}
          onClick={(e) => handlePress(e)}
        >
          Parametry
        </Button>
      </Box>
    </Box>
  );
};

export default DetailsView;
