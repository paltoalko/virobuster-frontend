import { Box, Typography, Button } from '@mui/material';
import React, { MutableRefObject } from 'react';
import styles from '../assets/styles/CallToAction.module.css';

interface IProps {
  contactRef: MutableRefObject<HTMLButtonElement>;
}

const CallToAction: React.FC<IProps> = ({ contactRef }) => {
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
      <Button
        variant="outlined"
        color="secondary"
        size="large"
        onClick={() => contactRef.current.scrollIntoView()}
      >
        Napisz do nas
      </Button>
    </Box>
  );
};

export default CallToAction;
