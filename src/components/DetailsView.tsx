import { Box, Button } from '@mui/material';
import React, { useState } from 'react';
import TechnicalData from '../assets/detailsView/TechnicalData';
import Details from '../assets/detailsView/Details';
import Photos from '../assets/detailsView/Photos';
import styles from '../assets/styles/DetailsView.module.css';
import { ReactComponent as SideLogo } from '../assets/svg/logo-sideways.svg';

const DetailsView: React.FC<{}> = () => {
  const [activeComponent, setActiveComponent] = useState('technicalData');

  const handlePress = (e) => {
    setActiveComponent(e.target.name);
  };
  return (
    <Box className={styles.detailsContainer}>
      {activeComponent === 'technicalData' && <TechnicalData />}
      {activeComponent === 'photos' && <Photos />}
      {activeComponent === 'details' && <Details />}

      <SideLogo className={styles.sideLogo} />
      <Box className={styles.buttonBox}>
        <Button
          variant={activeComponent === 'photos' ? 'contained' : 'outlined'}
          className={styles.button}
          color="primary"
          name="photos"
          sx={{ minWidth: '9vw', boxShadow: '7' }}
          onClick={(e) => handlePress(e)}
        >
          Zdjęcia
        </Button>
        <Button
          variant={
            activeComponent === 'technicalData' ? 'contained' : 'outlined'
          }
          color="primary"
          className={styles.button}
          name="technicalData"
          sx={{ minWidth: '9vw', boxShadow: '7' }}
          onClick={(e) => handlePress(e)}
        >
          Opis
        </Button>
        <Button
          variant={activeComponent === 'details' ? 'contained' : 'outlined'}
          color="primary"
          name="details"
          sx={{ minWidth: '9vw', boxShadow: '7' }}
          onClick={(e) => handlePress(e)}
        >
          Dane Techniczne
        </Button>
      </Box>
    </Box>
  );
};

export default DetailsView;
