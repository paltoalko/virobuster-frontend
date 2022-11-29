import { Box } from '@mui/material';
import React from 'react';
import styles from '../assets/styles/TopContainer.module.css';
import HeroView from './HeroView';
import InformationView from './InformationView';
const TopContainer: React.FC<{}> = () => {
  return (
    <Box className={styles.container}>
      <HeroView />

      <InformationView />
    </Box>
  );
};

export default TopContainer;
