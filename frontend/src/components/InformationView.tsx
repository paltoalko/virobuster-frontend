import { Box, Typography } from '@mui/material';
import React from 'react';
import styles from '../assets/styles/InformationView.module.css';
import { ReactComponent as RightLeaf } from '../assets/svg/rightleaf.svg';
import { ReactComponent as LeftLeaf } from '../assets/svg/leftleaf.svg';
import CheckIcon from '@mui/icons-material/Check';

interface ListItemProps {
  description: string;
}

const ListItem: React.FC<ListItemProps> = ({ description }) => {
  return (
    <Box className={styles.listItem}>
      <CheckIcon color="success" fontSize="large" />
      <Typography
        variant="body1"
        color="primary"
        className={styles.listText}
        fontWeight={200}
        marginLeft="0.5vw"
      >
        {description}
      </Typography>
    </Box>
  );
};

const InformationView: React.FC<{}> = () => {
  return (
    <Box className={styles.informationContainer}>
      <Box className={styles.headerBox}>
        <LeftLeaf />
        <Typography
          variant="h6"
          color="primary"
          fontWeight="300"
          className={styles.header}
        >
          STERIBASE® 450 PLUS - Ogólny zwycięzca
        </Typography>
        <RightLeaf className={styles.leafs} />
      </Box>
      <Box className={styles.listContainer}>
        <ListItem description="Dezaktywacja wszystkich mikroorganizmów w jednym przejściu" />
        <ListItem description="Prosty w instalacji i szybki w uruchomieniu" />
        <ListItem description="Inteligentne monitorowanie i komunikacja" />
        <ListItem description="Kompatybilny z systemami zarządzania budynkiem" />
        <ListItem description="Wygodny w przemieszczaniu" />
        <ListItem description="Niski poziom hałasu" />
      </Box>
    </Box>
  );
};

export default InformationView;
