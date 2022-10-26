import { Box, Typography } from '@mui/material';
import React from 'react';
import styles from '../assets/styles/DetailsView.module.css';
import { ReactComponent as SideLogo } from '../assets/svg/logo-sideways.svg';
import Header from './Header';

interface TextPopUpProps {
  title: string;
  left?: boolean;
}

const TextPopUp: React.FC<TextPopUpProps> = ({ title, left }) => {
  return (
    <Box className={styles.popUpElement}>
      {!left && <Box className={styles.circleElement} />}
      <Box mb="4px">
        <Typography
          variant="h6"
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

const DetailsView: React.FC<{}> = ({}) => {
  return (
    <Box>
      {/* <Header /> */}
      <Box className={styles.detailsContainer}>
        <Box className={styles.longLineElement} />
        <Box className={styles.popUpsContainer}>
          <Box className={styles.popUpLeft} mt="10vh">
            <TextPopUp title="Bezkonkurencyjna efektywność" left={true} />
            <TextPopUp title="Wyjątkowy cichy" left={true} />
            <TextPopUp title="Wysoko skoncentrowane UV-C" left={true} />
            <TextPopUp
              title="Efektywny w pomieszczeniach nawet do 180 m2"
              left={true}
            />
            <TextPopUp title="Konserwacja co 2 do 5 lat" left={true} />
          </Box>
          <Box className={styles.popUpRight}>
            <TextPopUp title="Udowodniona skuteczność w 99.99%" />
            <TextPopUp title="Certyfikowana i sprawdzona technologia" />
            <TextPopUp title="Wypróbowany i przetestowany w szpitalach" />
            <TextPopUp title="Bezpieczny dla wszystkich" />
            <TextPopUp title="Bez wymiany filtra" />
          </Box>
        </Box>
        <SideLogo className={styles.sideLogo} />
      </Box>
    </Box>
  );
};

export default DetailsView;
