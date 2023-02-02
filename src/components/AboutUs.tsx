import { Box, Typography } from '@mui/material';
import React from 'react';
import styles from '../assets/styles/AboutUs.module.css';
import { ImageElement } from './PhotosView';
import Factory from '../assets/img/virobuster-standort.jpeg';

const AboutUs: React.FC<{}> = () => {
  return (
    <Box className={styles.container}>
      <Typography variant="h4" color="primary" fontWeight={200}>
        O nas
      </Typography>
      <Typography
        color="primary"
        fontWeight={200}
        fontStyle="italic"
        variant="h6"
        className={styles.cite}
      >
        „Naukowo udowodnione innowacje dla wysokiej jakości produktów,
        skutecznej higieny powietrza i bezpieczeństwa”
      </Typography>
      <ImageElement
        title="Od ponad 20 lat VIROBUSTER®"
        text="Z siedzibą w Windhagen
          w Niemczech specjalizuje się w dezynfekcji powietrza UV-C. W 2003 roku
          ustanowiliśmy pierwszy na świecie patent na technologię opartą na UVPE
          (pierwotnie opracowaną do użytku medycznego), która do dziś jest
          naszym USP. Nie można przecenić znaczenia
          czystszego powietrza, a dokładniej ryzyka zakażenia patogenami
          znajdującymi się w powietrzu.I właśnie to ryzyko przekształciliśmy w
          szansę. Obecnie VIROBUSTER® nawiązał współpracę z wieloma branżami w
          ponad 25 krajach, a rosnące zapotrzebowanie ze strony wielu innych
          branż pokazuje, że technologia dezynfekcji VIROBUSTER® jest skuteczna
          i praktyczna poza zastosowaniami medycznymi."
        img={Factory}
        left={true}
        disableAnimation={true}
      />
    </Box>
  );
};

export default AboutUs;
