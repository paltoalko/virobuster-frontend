import { Box, Typography, Button } from '@mui/material';
import React from 'react';
import styles from '../assets/styles/Header.module.css';

interface ButtonProps {
  title: string;
  onPress?(event: any): void;
}

interface Iprops {
  contactRef: React.Ref<HTMLElement>;
  aboutUsRef: React.Ref<HTMLInputElement>;
  faqRef: React.Ref<HTMLInputElement>;
  detailsRef: React.Ref<HTMLInputElement | null>;
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

const Header: React.FC<Iprops> = ({
  contactRef,
  aboutUsRef,
  faqRef,
  detailsRef,
}) => {
  return (
    <Box className={styles.header}>
      <MenuButton
        title="Specyfikacja"
        onPress={() => detailsRef.current.scrollIntoView()}
      />
      <MenuButton title="FAQ" onPress={() => faqRef.current.scrollIntoView()} />
      <MenuButton
        title="O nas"
        onPress={() => aboutUsRef.current.scrollIntoView()}
      />
      <MenuButton
        title="Kontakt"
        onPress={() => contactRef.current.scrollIntoView()}
      />
    </Box>
  );
};

export default Header;
