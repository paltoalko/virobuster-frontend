import { Box, Typography } from '@mui/material';
import React from 'react';
import TextPopUp from '../assets/helpers/TextPopUp';
import styles from '../assets/styles/PhotosView.module.css';
import { ReactComponent as Lab } from '../assets/svg/lab.svg';
import { ReactComponent as Room } from '../assets/svg/room.svg';
import { ReactComponent as Safe } from '../assets/svg/safe.svg';
import CallToAction from './CallToAction';

const PhotosView: React.FC<{}> = () => {
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
        svg={<Room className={styles.svg} />}
        left={false}
      />
      <Typography
        variant="h5"
        color="primary"
        fontWeight={400}
        className={styles.header}
      >
        Rezultaty są oczywiste: idealne powietrze w każdej sytuacji.
      </Typography>
      <Typography
        variant="h5"
        color="primary"
        fontWeight={300}
        className={styles.header}
      >
        Nie tylko czyste powietrze, <i>ale przede wszystkim sterylne.</i>
      </Typography>
      <TextPopUp
        text1="Oczyszczone powietrze może być podstawą, ale z pewnością nie można traktować go jako oczywistość. Wyziewy (wydzieliny), drobnoustroje, bakterie, grzyby i wszystkie zakaźne aerozole mogą mieć trwały wpływ na jakość powietrza w pomieszczeniach."
        text2="Dzięki certyfikowanej technologii UVPE, STERIBASE® 450 Plus zmniejsza ryzyko infekcji jak żaden inny system oczyszczania, zostało naukowo udowodnione, że neutralizuje surogaty SARSCoV-2. Czego więcej możesz oczekiwać? Jest przebadany naukowo.!"
        svg={<Lab className={styles.svg} />}
        left={true}
      />
      <CallToAction />
      <TextPopUp
        text1="Niezależnie od tego, czy jest używany w żłobkach, biurach urzędów miasta lub siedzibach firm, innowacyjne urządzenie wolnostojące z wbudowanym wentylatorem jest wygodne, wydajne i elastyczne w każdym typie zabudowy. Estetyczny i przyjazny dla środowiska z zerową emisją, jest mobilny, cichy i tani w utrzymaniu."
        text2=" Co ważne, jest bezpieczny: zamknięty
        system UV-C oznacza brak szkodliwego promieniowania światła UV.
        Teraz spokojnie możesz oczekiwać więcej od systemu oczyszczania powietrza.
        Robimy w końcu to samo."
        svg={<Safe className={styles.svg} />}
        left={false}
      />

      <Typography className={styles.sideTitle} variant="h1" fontWeight="bold">
        steribase 450 plus
      </Typography>
    </Box>
  );
};

export default PhotosView;
