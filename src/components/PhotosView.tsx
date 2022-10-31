import { Box, Typography } from '@mui/material';
import React from 'react';
import styles from '../assets/styles/PhotosView.module.css';
import { ReactComponent as Lab } from '../assets/svg/lab.svg';
import { ReactComponent as Room } from '../assets/svg/room.svg';
import { ReactComponent as Safe } from '../assets/svg/safe.svg';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import CallToAction from './CallToAction';

interface TextPopUpProps {
  text1: string;
  text2: string;
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
          {text1}
        </Typography>
        <Typography
          variant="body1"
          color="primary"
          className={styles.textElement}
          fontWeight={200}
        >
          {text2}
        </Typography>
      </Box>
      {!left && svg}
    </Box>
  );
};

const PhotosView: React.FC<{}> = ({}) => {
  return (
    <Box className={styles.container}>
      <TextPopUp
        text1="Niezależnie od tego, czy jest to salon, biuro, klasa, siłownia, czy
            sala ćwiczeń spędzamy dwie trzecie naszego życia w pomieszczeniach.
            Krótko mówiąc, są one naszą rzeczywistością. Ich design ma
            bezpośredni wpływ na nasz nastrój - i na nasze zdrowie."
        text2="Nic więc dziwnego, że wymagania dla warunków życia i jakości
            powietrza od dawna są ze sobą powiązane. W końcu powietrze - to nic
            innego jak samo życie - i tylko to!"
        svg={<Room />}
        left={false}
      />
      <Typography
        variant="h5"
        color="primary"
        className={styles.header}
        sx={{ m: '5vh 6vw' }}
      >
        Rezultaty są oczywiste: idealne powietrze w każdej sytuacji. Nie tylko
        czyste powietrze, ale przede wszystkim sterylne.
      </Typography>
      <TextPopUp
        text1="Oczyszczone powietrze może być podstawą, ale z pewnością nie można traktować go jako oczywistość. Wyziewy (wydzieliny), drobnoustroje, bakterie, grzyby i wszystkie zakaźne aerozole mogą mieć trwały wpływ na jakość powietrza w pomieszczeniach."
        text2="Dzięki certyfikowanej technologii UVPE, STERIBASE® 450 Plus zmniejsza ryzyko infekcji jak żaden inny system oczyszczania, zostało naukowo udowodnione, że neutralizuje surogaty SARSCoV-2. Czego więcej możesz oczekiwać? Jest przebadany naukowo.!"
        svg={<Lab />}
        left={true}
      />
      <CallToAction />
      <TextPopUp
        text1="Niezależnie od tego, czy jest używany w żłobkach, biurach urzędów miasta lub siedzibach firm, innowacyjne urządzenie wolnostojące z wbudowanym wentylatorem jest wygodne, wydajne i elastyczne w każdym typie zabudowy. Estetyczny i przyjazny dla środowiska z zerową emisją, jest mobilny, cichy i tani w utrzymaniu."
        text2=" Co ważne, jest bezpieczny: zamknięty
        system UV-C oznacza brak szkodliwego promieniowania światła UV.
        Teraz spokojnie możesz oczekiwać więcej od systemu oczyszczania powietrza.
        Robimy w końcu to samo."
        svg={<Safe />}
        left={false}
      />

      <Typography className={styles.sideTitle} variant="h1" fontWeight="bold">
        steribase 450 plus
      </Typography>
    </Box>
  );
};

export default PhotosView;
