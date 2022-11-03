import { Box, Typography } from '@mui/material';
import React from 'react';
import TextPopUp from '../assets/helpers/TextPopUp';
import styles from '../assets/styles/AboutUs.module.css';
import { ReactComponent as Mission } from '../assets/svg/mission.svg';

const AboutUs: React.FC<{}> = () => {
  return (
    <Box className={styles.container}>
      <Typography
        variant="h4"
        color="primary"
        fontWeight={200}
        className={styles.header}
      >
        O VIROBUSTER®{' '}
      </Typography>
      <Typography color="primary" className={styles.subheader} fontWeight={200}>
        Nasza misja
      </Typography>
      <Typography
        color="primary"
        fontWeight={100}
        fontStyle="italic"
        className={styles.cite}
      >
        „Naukowo udowodnione innowacje dla wysokiej jakości produktów,
        skutecznej higieny powietrza i bezpieczeństwa”
      </Typography>
      <Box className={styles.aboutBox}>
        <TextPopUp
          text1="Od ponad 15 lat VIROBUSTER® International GmbH z siedzibą w Windhagen
          w Niemczech specjalizuje się w dezynfekcji powietrza UV-C. W 2003 roku
          ustanowiliśmy pierwszy na świecie patent na technologię opartą na UVPE
          (pierwotnie opracowaną do użytku medycznego), która do dziś jest
          naszym USP. Pierwsze zagrożenia związane z koronawirusem SARS/H5N1 ptasią grypą, a
          późniejsza pandemia grypy H1N1 pokazały całemu światu, że choroby
          przenoszone drogą powietrzną mogą mieć znaczący wpływ społeczny i
          gospodarczy. Ostatnio, wraz z pandemią COVID-19, wpłynęło to na każde
          gospodarstwo domowe. Nie można przecenić znaczenia czystszego
          powietrza, a dokładniej ryzyka zakażenia patogenami znajdującymi się w
          powietrzu."
          svg={<Mission />}
        />
        <Typography color="primary" className={styles.cite} fontWeight={200}>
          I właśnie to ryzyko przekształciliśmy w szansę. Obecnie VIROBUSTER®
          nawiązał współpracę z wieloma branżami w ponad 25 krajach, a rosnące
          zapotrzebowanie ze strony wielu innych branż pokazuje, że technologia
          dezynfekcji VIROBUSTER® jest skuteczna i praktyczna poza
          zastosowaniami medycznymi. W szczególności, branże takie jak produkcja
          żywności (piekarnie przemysłowe, delikatesy, owoce i warzywa itp.),
          usługi weterynaryjne, szkoły, urzędy państwowe oraz transport i
          logistyka już z powodzeniem wykorzystują naszą technologię UVPE.
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutUs;
