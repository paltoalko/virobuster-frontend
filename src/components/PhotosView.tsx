import { Box, Typography, useMediaQuery } from '@mui/material';
import React, { MutableRefObject, useRef } from 'react';
import styles from '../assets/styles/PhotosView.module.css';
import RoomImg from '../assets/img/room.png';
import LabImg from '../assets/img/lab.png';
import SafetyImg from '../assets/img/safety.png';
import { motion, useInView } from 'framer-motion';
import CallToAction from './CallToAction';

interface IProps {
  title: string;
  text: string;
  img: string;
  left?: boolean;
}

interface PhotosProps {
  contactRef: MutableRefObject<HTMLButtonElement>;
}

const ImageElement: React.FC<IProps> = ({ title, text, img, left }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const matches = useMediaQuery('(max-width:960px)');
  return matches ? (
    <motion.div
      className={styles.photoContainer}
      ref={ref}
      style={{
        transform: isInView ? 'none' : 'translateX(-10vw)',
        opacity: isInView ? 1 : 0,
        transition: 'all 2s ',
      }}
    >
      <Box className={styles.imageBox}>
        <img src={img} className={styles.image} />
      </Box>

      <Box className={styles.textContainer}>
        <Typography
          color="primary"
          fontWeight={500}
          fontStyle="italic"
          className={styles.imageTitle}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          color="primary"
          className={styles.textElement}
          fontWeight={200}
        >
          {text}
        </Typography>
      </Box>
    </motion.div>
  ) : (
    <motion.div
      className={styles.photoContainer}
      ref={ref}
      style={{
        transform: isInView
          ? 'none'
          : left
          ? 'translateX(-10vw)'
          : 'translateX(10vw)',
        opacity: isInView ? 1 : 0,
        transition: 'all 2s ',
      }}
    >
      {!left && (
        <Box className={styles.imageBox}>
          <img src={img} className={styles.image} />
        </Box>
      )}
      <Box className={styles.textBox}>
        {!left && <Box className={styles.lineElement} />}
        <Box className={styles.textContainer}>
          <Typography
            color="primary"
            fontWeight={500}
            fontStyle="italic"
            className={styles.imageTitle}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            color="primary"
            className={styles.textElement}
            fontWeight={200}
          >
            {text}
          </Typography>
        </Box>
        {left && <Box className={styles.lineElement} />}
      </Box>

      {left && (
        <Box className={styles.imageBox}>
          <img src={img} className={styles.image} />
        </Box>
      )}
    </motion.div>
  );
};

const PhotosView: React.FC<PhotosProps> = ({ contactRef }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <Box className={styles.container}>
      <ImageElement
        title="Rezultaty są oczywiste: idealne powietrze w każdej sytuacji."
        text="Niezależnie od tego, czy jest to salon, biuro, klasa, siłownia, czy  sala ćwiczeń spędzamy dwie trzecie naszego życia w pomieszczeniach. Krótko mówiąc, są one naszą rzeczywistością. Ich design ma bezpośredni wpływ na nasz nastrój - i na nasze zdrowie. Nic więc dziwnego, że wymagania dla warunków życia i jakości powietrza od dawna są ze sobą powiązane. W końcu powietrze - to nic innego jak samo życie - i tylko to!"
        img={RoomImg}
      />
      <ImageElement
        title="Jest dokładnie przebadany naukowo."
        text="Oczyszczone powietrze może być podstawą, ale z pewnością nie można traktować go jako oczywistość. Wyziewy (wydzieliny), drobnoustroje bakterie, grzyby i wszystkie zakaźne aerozole mogą mieć trwały wpływ na jakość powietrza w pomieszczeniach.Dzięki certyfikowanej technologii UVPE, STERIBASE® 450 Plus zmniejsza ryzyko infekcji jak żaden inny system oczyszczania, zostało naukowo udowodnione, że neutralizuje surogaty SARSCoV-2. Czego więcej możesz oczekiwać?"
        img={LabImg}
        left={true}
      />
      <motion.div
        ref={ref}
        style={{
          opacity: isInView ? 1 : 0,
          transition: 'all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}
      >
        <CallToAction contactRef={contactRef} />
      </motion.div>

      <ImageElement
        title="Nie tylko czyste powietrze, ale przede wszystkim sterylne."
        text="Niezależnie od tego, czy jest używany w żłobkach, biurach urzędów miasta lub siedzibach firm, innowacyjne urządzenie wolnostojące z wbudowanym wentylatorem jest wygodne, wydajne i elastyczne w każdym typie zabudowy. Estetyczny i przyjazny dla środowiska z zerową emisją, jest mobilny, cichy i tani w utrzymaniu. Co ważne, jest bezpieczny: zamknięty system UV-C oznacza brak szkodliwego promieniowania światła UV. Teraz spokojnie możesz oczekiwać więcej od systemu oczyszczania powietrza. Robimy w końcu to samo."
        img={SafetyImg}
      />

      <Typography className={styles.sideTitle} variant="h1" fontWeight="bold">
        steribase 450 plus
      </Typography>
    </Box>
  );
};

export default PhotosView;
