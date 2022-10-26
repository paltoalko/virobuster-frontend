import { Box, Typography, Button } from '@mui/material';
import React from 'react';
import styles from '../assets/styles/InformationView.module.css';

interface TextItemProps {
  title: string;
  description: string;
}

const TextItem: React.FC<TextItemProps> = ({ title, description }) => {
  return (
    <Box className={styles.technicalText}>
      <Box className={styles.textTitle}>
        <Typography
          variant="body1"
          fontWeight={500}
          fontSize="1vw"
          color="primary"
        >
          {title}
        </Typography>
      </Box>
      <Box>
        <Typography fontWeight={200} fontSize="1vw" color="primary">
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

const InformationView: React.FC<{}> = ({}) => {
  return (
    <Box className={styles.informationContainer}>
      <Typography
        variant="h3"
        color="primary"
        fontWeight="bold"
        className={styles.title}
      >
        Dane Techniczne
      </Typography>
      <Box>
        <Box className={styles.technicalData}>
          <TextItem
            title="Wymiary:"
            description="540 x 540 x 1.640 mm (L x B x H) /
				540 x 540 x 1,640 mm (L x W x H)"
          />
          <TextItem title="Waga:" description="39 kg" />
          <TextItem
            title="Moc wyjściowa:"
            description="240 Watt, 230 - 240 V"
          />
          <TextItem title="Moc wyjściowa lampy:" description="190 Watt" />
          <TextItem
            title="Moc wyjściowa wentylatora: "
            description="150 m3/h - 800 m3/h (max.)"
          />
          <TextItem
            title="Natężenie przepływu powietrza:"
            description="150 m3/h - 450 m3/h*"
          />
          <TextItem
            title="HADR (Szybkość dostarczania higienicznego powietrza):"
            description="> 670 m3/h*"
          />
          <TextItem
            title="Poziom ciśnienia akustycznego:"
            description="29,4 - 53,9 dB(A)* Normalna praca 40 dB(A)"
          />
          <TextItem
            title="Bakteriobójcza dawka dezynfekująca: "
            description="> 600 J/m2. Pojemność nominalna przy 1 sekundzie czasu ekspozycji."
          />
          <Typography
            variant="body1"
            fontSize="0.8vmax"
            color="primary"
            mt="1vmax"
          >
            <TextItem
              title="Skuteczna dawka ekspozycji:"
              description="133 - 407 J/m2 Minimalny wymóg zgodnie z DIN TS 67506 Class 100,zastosowanie w medycynie: 100 J/m2, minimalny wymóg zgodnie z BaFa: 120 J/m2*"
            />
            <TextItem
              title="Redukcja biologiczna:"
              description="> 99,99 %. Potwierdzone przez biodozymetryczną walidację surogatów SARS-CoV-2 (MS2 & Phi6)"
            />
            <TextItem
              title="Konserwacja:"
              description="Po 9,000 godzinach pracy"
            />
            <TextItem
              title="Zalecane użycie:"
              description="Do 180 m2 powierzchni na urządzenie"
            />
            <TextItem
              title="Zakres dostawy:"
              description="Gotowy do podłączenia i skonfigurowania, 
          ruchome urządzenie"
            />
            <TextItem title="Zezwolenia:" description="TÜV, CE" />
            <TextItem
              title="Dowody skuteczności:"
              description="Fraunhofer-Institut für Bauphysik IBP 2021
          Hygieneinstitut biotec GmbH 2006, 2013, 2020;2021
          Kowalski 2009; HDZ NRW Ruhr-Universität Bochum 2009"
            />
            * W zależności od ilości przepływu powietrza.
          </Typography>
        </Box>
      </Box>
      <Typography className={styles.sideTitle} variant="h1" fontWeight="bold">
        steribase 450 plus
      </Typography>
    </Box>
  );
};

export default InformationView;
