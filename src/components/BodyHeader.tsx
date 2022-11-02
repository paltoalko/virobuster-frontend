import { Box, Typography } from '@mui/material';
import React from 'react';
import styles from '../assets/styles/BodyHeader.module.css';

const PhotosView: React.FC<{}> = () => {
  return (
    <Box className={styles.headers}>
      <Typography
        fontWeight={200}
        fontStyle="italic"
        className={styles.header}
        color="primary"
        sx={{ mt: '5vh' }}
      >
        Naukowo udowodnione:
      </Typography>
      <Typography
        fontWeight={500}
        fontStyle="bold"
        className={styles.headerSmall}
        color="primary"
      >
        Czyste powietrze jest najlepsze.
      </Typography>
    </Box>
  );
};

export default PhotosView;
