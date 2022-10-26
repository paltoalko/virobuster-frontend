import { Box, Typography, Button } from '@mui/material';
import React from 'react';
import styles from '../assets/styles/InformationView.module.css';

const InformationView: React.FC<{}> = ({}) => {
  return (
    <Box className={styles.informationContainer}>
      <Typography
        variant="h2"
        color="primary"
        fontWeight="bold"
        className={styles.title}
      >
        Dane Techniczne
      </Typography>
      <Box className={styles.technicalData}></Box>
      <Typography className={styles.sideTitle} variant="h1" fontWeight="bold">
        steribase 450 plus
      </Typography>
    </Box>
  );
};

export default InformationView;
