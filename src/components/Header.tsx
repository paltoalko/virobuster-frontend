import { Box, Typography, Button } from '@mui/material';
import React from 'react';
import styles from '../assets/styles/Header.module.css';

interface ButtonProps {
  title: string;
  onPress?(event: any): void;
}

const MenuButton: React.FC<ButtonProps> = ({ title, onPress }) => {
  return (
    <Button variant="text" onClick={onPress}>
      <Typography variant="h6" fontWeight="light">
        {title}
      </Typography>
    </Button>
  );
};

const Header: React.FC<{}> = ({}) => {
  const handlePress = (e) => {
    console.log(e);
  };
  return (
    <Box className={styles.header}>
      <MenuButton
        title="Specyfikacja"
        onPress={(e) => handlePress(e.target.innerText)}
      />
      <MenuButton
        title="Oferta"
        onPress={(e) => handlePress(e.target.innerText)}
      />
      <MenuButton
        title="O nas"
        onPress={(e) => handlePress(e.target.innerText)}
      />
      <MenuButton
        title="Kontakt"
        onPress={(e) => handlePress(e.target.innerText)}
      />
    </Box>
  );
};

export default Header;
