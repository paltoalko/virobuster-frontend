import { Box, Typography, useMediaQuery } from '@mui/material';
import React, { MutableRefObject, useRef } from 'react';
import styles from '../assets/styles/PhotosView.module.css';
import RoomImg from '../assets/img/room.png';
import LabImg from '../assets/img/lab.png';
import SafetyImg from '../assets/img/safety.png';
import { motion, useInView } from 'framer-motion';
import CallToAction from './CallToAction';

export interface IProps {
  title?: string;
  text: string;
  img: string;
  left?: boolean;
  disableAnimation?: boolean;
}

interface PhotosProps {
  contactRef: MutableRefObject<HTMLButtonElement>;
}

export const ImageElement: React.FC<IProps> = ({
  title,
  text,
  img,
  left,
  disableAnimation,
}) => {
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
        transition: disableAnimation ? 'none' : 'all 2s',
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
        transition: disableAnimation ? 'none' : 'all 2s',
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
        title="Rezultaty s?? oczywiste: idealne powietrze w ka??dej sytuacji."
        text="Niezale??nie od tego, czy jest to salon, biuro, klasa, si??ownia, czy  sala ??wicze?? sp??dzamy dwie trzecie naszego ??ycia w pomieszczeniach. Kr??tko m??wi??c, s?? one nasz?? rzeczywisto??ci??. Ich design ma bezpo??redni wp??yw na nasz nastr??j - i na nasze zdrowie. Nic wi??c dziwnego, ??e wymagania dla warunk??w ??ycia i jako??ci powietrza od dawna s?? ze sob?? powi??zane. W ko??cu powietrze - to nic innego jak samo ??ycie - i tylko to!"
        img={RoomImg}
      />
      <ImageElement
        title="Jest dok??adnie przebadany naukowo."
        text="Oczyszczone powietrze mo??e by?? podstaw??, ale z pewno??ci?? nie mo??na traktowa?? go jako oczywisto????. Wyziewy (wydzieliny), drobnoustroje bakterie, grzyby i wszystkie zaka??ne aerozole mog?? mie?? trwa??y wp??yw na jako???? powietrza w pomieszczeniach.Dzi??ki certyfikowanej technologii UVPE, STERIBASE?? 450 Plus zmniejsza ryzyko infekcji jak ??aden inny system oczyszczania, zosta??o naukowo udowodnione, ??e neutralizuje surogaty SARSCoV-2. Czego wi??cej mo??esz oczekiwa???"
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
        text="Niezale??nie od tego, czy jest u??ywany w ????obkach, biurach urz??d??w miasta lub siedzibach firm, innowacyjne urz??dzenie wolnostoj??ce z wbudowanym wentylatorem jest wygodne, wydajne i elastyczne w ka??dym typie zabudowy. Estetyczny i przyjazny dla ??rodowiska z zerow?? emisj??, jest mobilny, cichy i tani w utrzymaniu. Co wa??ne, jest bezpieczny: zamkni??ty system UV-C oznacza brak szkodliwego promieniowania ??wiat??a UV. Teraz spokojnie mo??esz oczekiwa?? wi??cej od systemu oczyszczania powietrza. Robimy w ko??cu to samo."
        img={SafetyImg}
      />

      <Typography className={styles.sideTitle} variant="h1" fontWeight="bold">
        steribase 450 plus
      </Typography>
    </Box>
  );
};

export default PhotosView;
