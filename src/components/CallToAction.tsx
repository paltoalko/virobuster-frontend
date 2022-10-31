import { Box, Typography, Button } from '@mui/material';
import React from 'react';
import styles from '../assets/styles/CallToAction.module.css';

const CallToAction: React.FC<{}> = ({}) => {
  return (
    <Box className={styles.ctaContainer}>
      <Typography
        variant="h4"
        color="primary"
        className={styles.header}
        fontWeight={200}
        fontStyle="italic"
      >
        Masz pytania?
      </Typography>
      <Button variant="outlined" color="secondary" size="large">
        Napisz do nas
      </Button>
    </Box>
  );
};

export default CallToAction;
