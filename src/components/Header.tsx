import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  Fade,
  Slide,
} from '@mui/material';
import React, { MutableRefObject, useState, useRef, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import styles from '../assets/styles/Header.module.css';

interface ButtonProps {
  title: string;
  onPress?(event: any): void;
}

interface Iprops {
  contactRef: MutableRefObject<HTMLButtonElement>;
  aboutUsRef: MutableRefObject<HTMLButtonElement>;
  faqRef: MutableRefObject<HTMLButtonElement>;
  detailsRef: MutableRefObject<HTMLButtonElement>;
}

const MenuButton: React.FC<ButtonProps> = ({ title, onPress }) => {
  return (
    <Button variant="text" onClick={onPress}>
      <Typography variant="h6" fontWeight="light" className={styles.headerText}>
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
  const matches = useMediaQuery('(min-width:426px)');
  const [open, setOpen] = useState(true);
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setOpen(!open);
    }
  };
  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return matches ? (
    <Box className={styles.header}>
      <Box className={styles.menuButtons}>
        <MenuButton
          title="Specyfikacja"
          onPress={() => detailsRef.current.scrollIntoView()}
        />
        <MenuButton
          title="FAQ"
          onPress={() => faqRef.current.scrollIntoView()}
        />
        <MenuButton
          title="O nas"
          onPress={() => aboutUsRef.current.scrollIntoView()}
        />
        <MenuButton
          title="Kontakt"
          onPress={() => contactRef.current.scrollIntoView()}
        />
      </Box>
    </Box>
  ) : (
    <Box className={styles.headerSmall} ref={ref}>
      {open ? (
        <MenuIcon
          color="primary"
          className={styles.menuButton}
          onClick={() => handleClick()}
        />
      ) : (
        <Fade in={!open}>
          <CloseIcon
            color="primary"
            className={styles.menuButton}
            onClick={() => handleClick()}
          />
        </Fade>
      )}
      <Slide in={!open} direction="left" mountOnEnter unmountOnExit>
        <Box className={styles.menuContainer}>
          <Button onClick={() => detailsRef.current.scrollIntoView()}>
            Specyfikacja
          </Button>
          <Button onClick={() => faqRef.current.scrollIntoView()}>FAQ</Button>
          <Button onClick={() => aboutUsRef.current.scrollIntoView()}>
            O nas
          </Button>
          <Button onClick={() => contactRef.current.scrollIntoView()}>
            Kontakt
          </Button>
        </Box>
      </Slide>
    </Box>
  );
};

export default Header;
