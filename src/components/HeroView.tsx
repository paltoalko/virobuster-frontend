import { Box, Typography } from '@mui/material';
import React from 'react';
import HeroImg from '../assets/img/virobuster.png';
import styles from '../assets/styles/HeroView.module.css';
import { ReactComponent as Logo } from '../assets/svg/logo.svg';

const HeroView: React.FC<{}> = () => {
  return (
    <Box className={styles.heroContainer}>
      <Logo className={styles.logo} />
      <Typography
        variant="h1"
        color="primary"
        fontWeight="bold"
        className={styles.headline}
      >
        STERIBASE 450 PLUS
      </Typography>
      <Box className={styles.divider} />
      <Typography
        variant="h5"
        color="primary"
        fontWeight="100"
        className={styles.subtitle}
      >
        Czyste Powietrze w swojej najpiękniejszej postaci
      </Typography>
      <img
        src={HeroImg}
        alt="steribase 450 device black"
        className={styles.heroBackground}
      />
    </Box>
  );
};

export default HeroView;
