import { Box, Typography } from '@mui/material';
import React from 'react';
import styles from '../styles/TechnicalData.module.css';

interface TextPopUpProps {
  title: string;
  left?: boolean;
}

const TextPopUp: React.FC<TextPopUpProps> = ({ title, left }) => {
  return (
    <Box className={styles.popUpElement}>
      {!left && <Box className={styles.circleElement} />}
      <Box className={styles.textBox}>
        <Typography
          variant="body1"
          fontWeight={100}
          color="primary"
          className={left ? styles.textElementLeft : styles.textElement}
        >
          {title}
        </Typography>
      </Box>
      {left && <Box className={styles.circleElement} />}
    </Box>
  );
};

const TechnicalData: React.FC<{}> = () => {
  return (
    <Box className={styles.popUpsContainer}>
      <Box className={styles.popUpLeft}>
        <TextPopUp title="Bezkonkurencyjna efektywność" left={true} />
        <TextPopUp title="Wyjątkowy cichy" left={true} />
        <TextPopUp title="Wysoko skoncentrowane UV-C" left={true} />
        <TextPopUp
          title="Efektywny w pomieszczeniach nawet do 180 m2"
          left={true}
        />
        <TextPopUp title="Konserwacja co 2 do 5 lat" left={true} />
      </Box>
      <Box className={styles.longLineElement} />
      <Box className={styles.popUpRight}>
        <TextPopUp title="Udowodniona skuteczność w 99.99%" />
        <TextPopUp title="Certyfikowana i sprawdzona technologia" />
        <TextPopUp title="Wypróbowany i przetestowany w szpitalach" />
        <TextPopUp title="Bezpieczny dla wszystkich" />
        <TextPopUp title="Bez wymiany filtra" />
      </Box>
    </Box>
  );
};

export default TechnicalData;
