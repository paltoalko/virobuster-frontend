import { Box, Link, Typography } from '@mui/material';
import React from 'react';
import styles from '../assets/styles/Contact.module.css';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import { ReactComponent as Logo } from '../assets/svg/logo.svg';

const Contact: React.FC<{}> = () => {
  return (
    <Box className={styles.container}>
      <Box className={styles.overlay} boxShadow={5}>
        <Logo className={styles.logo} />
        <Typography
          variant="h4"
          color="black"
          fontWeight={300}
          className={styles.header}
        >
          Odezwij się do nas
        </Typography>
        <Typography
          variant="h6"
          fontStyle="italic"
          color="black"
          fontWeight={300}
          className={styles.subheader}
        >
          Jesteś zainteresowany produktem? Albo może masz jeszcze jakieś
          pytania?
        </Typography>
        <Box className={styles.contactBox}>
          <Box className={styles.contactCol}>
            <CallIcon
              color="secondary"
              fontSize="large"
              className={styles.icon}
            />
            <Box>
              <Link href="tel:+48-123-456-789" underline="none" color="black">
                <Typography variant="subtitle1" color="black" fontWeight={300}>
                  Zadzwoń do nas!
                </Typography>
                <Typography variant="subtitle1" color="black" fontWeight={400}>
                  +48 123 456 789
                </Typography>
              </Link>
            </Box>
          </Box>
          <Box className={styles.contactCol}>
            <EmailIcon
              color="secondary"
              fontSize="large"
              className={styles.icon}
            />
            <Box>
              <Link
                href="mailto:virobuster@virobuster.pl"
                underline="none"
                color="black"
              >
                <Typography variant="subtitle1" color="black" fontWeight={300}>
                  Wyślij do nas maila
                </Typography>
                <Typography variant="subtitle1" color="black" fontWeight={400}>
                  virobuster@virobuster.pl
                </Typography>
              </Link>
            </Box>
          </Box>
          <Box className={styles.contactCol}>
            <FmdGoodIcon
              color="secondary"
              fontSize="large"
              className={styles.icon}
            />
            <Box>
              <Typography variant="subtitle1" color="black" fontWeight={300}>
                Strasse Ein Zwei 3, DE
              </Typography>
              <Typography variant="subtitle1" color="black" fontWeight={400}>
                <Link href="" target="_blank" underline="none" color="black">
                  https://yourlink.com
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={styles.footer}>
        <Typography
          className={styles.text}
          color="primary"
          fontWeight={300}
          sx={{ mr: 'auto' }}
        >
          Virobuster®
        </Typography>
        <Typography className={styles.text} color="primary" fontWeight={300}>
          Copyright 2022 MWES
        </Typography>
      </Box>
    </Box>
  );
};

export default Contact;
