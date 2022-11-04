import { AccountCircle, AlternateEmail } from '@mui/icons-material';
import CommentIcon from '@mui/icons-material/Comment';

import {
  Box,
  Button,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import styles from '../assets/styles/Contact.module.css';
import { ReactComponent as ContactUs } from '../assets/svg/contactUs.svg';

const Contact: React.FC<{}> = () => {
  const formValues = {
    name: '',
    message: '',
    email: '',
    subject: '',
    sent: false,
    emailError: false,
  };
  const [formData, setFormData] = useState(formValues);

  return (
    <Box className={styles.container}>
      <form className={styles.form}>
        <Typography
          variant="h4"
          color="#2F2E41"
          fontWeight={200}
          className={styles.header}
        >
          Odezwij się do nas
        </Typography>
        <Typography
          variant="h6"
          color="#2F2E41"
          fontStyle="italic"
          fontWeight={200}
          className={styles.subheader}
        >
          Jesteś zainteresowany produktem? Albo może masz jeszcze jakieś
          pytania?
        </Typography>
        <Box className={styles.formContainer}>
          <Box>
            <Box className={styles.inputSmall}>
              <InputLabel
                htmlFor="input-with-icon-adornment"
                className={styles.label}
              >
                Imię i nazwisko
              </InputLabel>
              <Input
                color="secondary"
                id="input-with-icon-adornment"
                required
                fullWidth
                type="text"
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle className={styles.icon} />
                  </InputAdornment>
                }
              />
            </Box>

            <Box className={styles.inputSmall}>
              <InputLabel
                htmlFor="input-with-icon-adornment"
                className={styles.label}
              >
                Adres Email
              </InputLabel>
              <Input
                color="secondary"
                id="input-with-icon-adornment"
                required
                fullWidth
                type="email"
                startAdornment={
                  <InputAdornment position="start">
                    <AlternateEmail className={styles.icon} />
                  </InputAdornment>
                }
              />
            </Box>
            <Box className={styles.inputTextField}>
              <InputLabel
                htmlFor="input-with-icon-adornment"
                className={styles.label}
              >
                Treść
              </InputLabel>
              <TextField
                color="secondary"
                id="textfield"
                variant="standard"
                required
                type="text"
                fullWidth
                multiline
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CommentIcon className={styles.icon} />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Box>
          <ContactUs className={styles.svg} />
        </Box>

        <Button
          color="success"
          type="submit"
          variant="contained"
          onClick={(e) => e.preventDefault()}
          sx={{ width: '200px', mb: '5vh' }}
        >
          Wyślij
        </Button>
      </form>
    </Box>
  );
};

export default Contact;
