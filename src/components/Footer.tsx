import { Box, Typography } from '@mui/material';
import React from 'react';
import styles from '../assets/styles/Footer.module.css';

const Footer: React.FC<{}> = ({}) => {
  return (
    <Box className={styles.footer}>
      <Typography
        className={styles.text}
        color="primary"
        fontWeight={100}
        sx={{ mr: 'auto' }}
      >
        Virobuster®
      </Typography>
      <Typography className={styles.text} color="primary" fontWeight={100}>
        Copyright 2022 MWES
      </Typography>
    </Box>
  );
};

export default Footer;
