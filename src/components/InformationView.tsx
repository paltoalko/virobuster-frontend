import { Box, Typography } from '@mui/material';
import React, { useRef } from 'react';
import styles from '../assets/styles/InformationView.module.css';
import { ReactComponent as RightLeaf } from '../assets/svg/rightleaf.svg';
import { ReactComponent as LeftLeaf } from '../assets/svg/leftleaf.svg';
import CheckIcon from '@mui/icons-material/Check';
import { motion, useInView } from 'framer-motion';

interface ListItemProps {
  description: string;
}

const ListItem: React.FC<ListItemProps> = ({ description }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <Box
      className={styles.listItem}
      ref={ref}
      sx={{
        transform: isInView ? 'none' : 'translateX(-10vw)',
        opacity: isInView ? 1 : 0,
        transition: 'all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
      }}
    >
      <CheckIcon color="success" className={styles.checkIcon} />
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
  const refBox = useRef(null);
  const isInView = useInView(refBox, { once: true });
  console.log(isInView);
  return (
    <Box>
      <motion.div className={styles.informationContainer}>
        <motion.div
          className={styles.headerBox}
          ref={refBox}
          style={{
            opacity: isInView ? 1 : 0,
            transition: 'all 2s ',
          }}
        >
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
        </motion.div>
        <Box sx={{ display: 'flex' }}>
          <Box className={styles.listContainer}>
            <ListItem description="Dezaktywacja wszystkich mikroorganizmów w jednym przejściu" />
            <ListItem description="Prosty w instalacji i szybki w uruchomieniu" />
            <ListItem description="Inteligentne monitorowanie i komunikacja" />
            <ListItem description="Kompatybilny z systemami zarządzania budynkiem" />
            <ListItem description="Wygodny w przemieszczaniu" />
            <ListItem description="Niski poziom hałasu" />
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};

export default InformationView;
