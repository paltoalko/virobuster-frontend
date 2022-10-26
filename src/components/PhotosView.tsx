import { Box, Typography, Button } from '@mui/material';
import React from 'react';
import styles from '../assets/styles/PhotosView.module.css';
import steribase1 from '../assets/img/steribase1.png';
import steribase2 from '../assets/img/steribase2.png';
import steribase3 from '../assets/img/steribase3.png';

const PhotosView: React.FC<{}> = ({}) => {
  return (
    <Box className={styles.photosViewContainer}>
      <Typography
        color="primary"
        fontWeight={200}
        fontStyle="italic"
        className={styles.header}
      >
        Masz jakiekolwiek pytania?
      </Typography>
      <Button variant="outlined" color="secondary">
        Napisz do nas
      </Button>
      <Box className={styles.photosContainer}>
        {/* Optimize photos for 300px500px */}
        <Box className={styles.photoBox}>
          <img src={steribase1} />
        </Box>
        <Box className={styles.photoBox}>
          <img src={steribase2} />
        </Box>
        <Box className={styles.photoBox}>
          <img src={steribase3} />
        </Box>
      </Box>
    </Box>
  );
};

export default PhotosView;
