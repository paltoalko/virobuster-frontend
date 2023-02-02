import { Box, Link, Typography } from '@mui/material';
import React from 'react';
import styles from '../assets/styles/Contact.module.css';
import Background from '../assets/img/footer-bkg.png';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
const stylesImg = {
  container: {
    backgroundImage: `url(${Background})`,
    height: `100%`,
    width: `100%`,
    backgroundSize: `cover`,
  },
};

const Contact: React.FC<{}> = () => {
  return (
    <Box style={stylesImg.container} className={styles.container}>
      <Box className={styles.overlay} boxShadow={2}>
        <Typography
          variant="h4"
          color="secondary"
          fontWeight={300}
          className={styles.header}
        >
          Odezwij się do nas
        </Typography>
        <Typography
          variant="h6"
          fontStyle="italic"
          color="secondary"
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
              <Link
                href="tel:+48-123-456-789"
                underline="none"
                color="secondary"
              >
                <Typography
                  variant="subtitle1"
                  color="secondary"
                  fontWeight={300}
                >
                  Zadzwoń do nas!
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="secondary"
                  fontWeight={400}
                >
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
                color="secondary"
              >
                <Typography
                  variant="subtitle1"
                  color="secondary"
                  fontWeight={300}
                >
                  Wyślij do nas maila
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="secondary"
                  fontWeight={400}
                >
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
              <Typography
                variant="subtitle1"
                color="secondary"
                fontWeight={300}
              >
                Köhlershohner Str. 60, D-53578 Windhagen
              </Typography>
              <Typography
                variant="subtitle1"
                color="secondary"
                fontWeight={400}
              >
                <Link
                  href="https://www.virobuster.com/en"
                  target="_blank"
                  underline="none"
                  color="secondary"
                >
                  https://www.virobuster.com/en
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={styles.footer}>
        <Typography
          className={styles.text}
          color="black"
          fontWeight={300}
          sx={{ mr: 'auto' }}
        >
          Virobuster®
        </Typography>
        <Typography className={styles.text} color="black" fontWeight={300}>
          Copyright 2022 MWES
        </Typography>
      </Box>
    </Box>
  );
};

export default Contact;
