import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import LogoImage from '../assets/images/Logo-1.png';

const Footer = () => {
  return (
    <Box mt='80px' bgcolor='#fff3f4'>
      <Stack gap='40px' alignItems='center' px='40px' pt='24px'>
        <img src={LogoImage} alt='logo' width='200px' height='40px' />
        <Typography>Made by AWSCH with the help of Internet.</Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
