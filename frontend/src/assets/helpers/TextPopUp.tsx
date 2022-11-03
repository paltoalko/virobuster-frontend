import { Box, Typography } from '@mui/material';
import React from 'react';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import styles from '../styles/TextPopUp.module.css';

interface TextPopUpProps {
  text1: string;
  text2?: string;
  svg: ReactJSXElement;
  left?: boolean;
}

const TextPopUp: React.FC<TextPopUpProps> = ({ text1, text2, svg, left }) => {
  return (
    <Box className={styles.content}>
      {left && svg}
      <Box className={styles.textContainer}>
        <Typography
          variant="body1"
          color="primary"
          className={styles.textElement}
          fontWeight={200}
        >
          {text1} {text2}
        </Typography>
      </Box>
      {!left && svg}
    </Box>
  );
};

export default TextPopUp;
