import { Box, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import styles from '../styles/Photos.module.css';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const photos = [
  { id: 0, src: require('../img/steribase0.png'), alt: 'virubuster' },
  { id: 1, src: require('../img/steribase1.png'), alt: 'virubuster' },
  { id: 2, src: require('../img/steribase2.png'), alt: 'virubuster' },
  { id: 3, src: require('../img/steribase3.png'), alt: 'virubuster' },
  { id: 4, src: require('../img/steribase4.png'), alt: 'virubuster' },
  { id: 5, src: require('../img/steribase5.png'), alt: 'virubuster' },
];

const Photos: React.FC<{}> = () => {
  const [active, setActive] = useState(0);
  const [source, setSource] = useState('');
  const [alt, setAlt] = useState('');

  useEffect(() => {
    const object = photos.find((el) => el.id === active);
    setAlt(object.alt);
    setSource(object.src);
  });

  const handlePress = (direction: string) => {
    if (direction === 'left') {
      if (active == 0) {
        setActive(5);
      } else {
        setActive(active - 1);
      }
    } else if (direction === 'right') {
      if (active == 5) {
        setActive(0);
      } else {
        setActive(active + 1);
      }
    }
  };

  return (
    <Box className={styles.popUpsContainer}>
      <IconButton
        size="large"
        color="primary"
        onClick={() => handlePress('left')}
      >
        <KeyboardArrowLeftIcon fontSize="large" />
      </IconButton>
      <Box className={styles.middleContainer}>
        <Box className={styles.photoBox}>
          <img src={source} alt={alt} />
        </Box>
        <Box className={styles.circlesBox}>
          <Box className={active === 0 ? styles.circleActive : styles.circle} />
          <Box className={active === 1 ? styles.circleActive : styles.circle} />
          <Box className={active === 2 ? styles.circleActive : styles.circle} />
          <Box className={active === 3 ? styles.circleActive : styles.circle} />
          <Box className={active === 4 ? styles.circleActive : styles.circle} />
          <Box className={active === 5 ? styles.circleActive : styles.circle} />
        </Box>
      </Box>
      <IconButton
        size="large"
        color="primary"
        onClick={() => handlePress('right')}
      >
        <KeyboardArrowRightIcon fontSize="large" />
      </IconButton>
    </Box>
  );
};

export default Photos;
