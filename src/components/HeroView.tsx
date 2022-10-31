import { Box, Typography } from '@mui/material';
import React, { useRef, useState, useEffect } from 'react';
import HeroImg from '../assets/img/virobuster.png';
import styles from '../assets/styles/HeroView.module.css';
import { ReactComponent as Logo } from '../assets/svg/logo.svg';
import { ReactComponent as Mouse } from '../assets/svg/mouse.svg';
import { ReactComponent as Arrows } from '../assets/svg/arrows.svg';

const HeroView: React.FC<{}> = ({}) => {
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
      {/* <Mouse className={styles.mouse} />
      <Arrows className={styles.arrows} /> */}
      <img
        src={HeroImg}
        alt="steribase 450 device black"
        className={styles.heroBackground}
      />
    </Box>
  );
};

export default HeroView;
