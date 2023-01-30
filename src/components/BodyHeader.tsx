import { Box, Typography } from '@mui/material';
import React from 'react';
import styles from '../assets/styles/BodyHeader.module.css';

const PhotosView: React.FC<{}> = () => {
  return (
    <Box className={styles.headers}>
      <Typography
        fontWeight={400}
        fontStyle="bold"
        className={styles.headerSmall}
        color="primary"
      >
        Zadbaj o zdrowie
      </Typography>
    </Box>
  );
};

export default PhotosView;
