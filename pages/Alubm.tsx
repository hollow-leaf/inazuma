//mui template
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { GitHub, Instagram, Close } from "@mui/icons-material";
//Connect BTN
import { ConnectButton } from '@rainbow-me/rainbowkit';
//Transfer assets
import { useSendTransaction } from 'wagmi';
import { useState } from 'react';
import { SignTypedData } from '../component/SignTypedData';

function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  // TODO remove, this demo shouldn't need to reset the theme.
  const defaultTheme = createTheme();
  

export default function Album() {
    return (
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <AppBar position="sticky" style={{backgroundColor: 'rgba(230,245,231,0.05)'}} >
          <Toolbar >
            <Typography variant="h6" color="white" >
                <Link href='/' color="rgba(31,120,0)">
                    CACAHACK
                </Link>
            </Typography>
            <Grid container justifyContent="space-around" >
                <Link href='#banner' color="rgba(31,120,0)">
                    Home
                </Link>
            </Grid>
            <Grid container justifyContent="space-around" >
                <Link href='#user' color="rgba(31,120,0)">
                    User
                </Link>
            </Grid>
            <Grid container justifyContent="space-around" >
                <Link href='#mechanism' color="rgba(31,120,0)">
                    Mechanism
                </Link>
            </Grid>
            <Grid container justifyContent="flex-end" >
                <ConnectButton/>
            </Grid>
          </Toolbar>
        </AppBar>
        <main id='banner'>
          {/* Hero unit */}
          <Box
            sx={{
              bgcolor: 'rgba(217,234,211,0.7)',
              pt: 20,
              pb: 8,
            }}
          >
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                Introduction
              </Typography>
              <Typography variant="h5" align="left" color="text.secondary" paragraph>
              We are Cathay company, dedicated to providing the enviroment carbon reduce service to our customers.
              </Typography>
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              >
                <Button variant="contained">User get Hypercert</Button>
                <SignTypedData/>
              </Stack>
            </Container>
          </Box>
          <Box
            sx={{
              bgcolor: 'rgba(217,234,211)',
              pt: 20,
              pb: 8,
            }}
            id='user'
          >
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                User Usee Case
              </Typography>
              <Typography variant="h5" align="center" color="text.secondary" paragraph>
            
              </Typography>
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              >
                <Button variant="contained">User mint a Hypercert</Button>
                <Button variant="outlined">Mechainism set Co2.Storage</Button>
              </Stack>
            </Container>
          </Box>
          <Box
            sx={{
              bgcolor: 'rgba(217,234,211)',
              pt: 30,
              pb: 8,
            }}
            id='mechanism'
          >
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                Introduction
              </Typography>
              <Typography variant="h5" align="center" color="text.secondary" paragraph>
              We are Cathay company, dedicated to providing the enviroment carbon reduce service to our
              customers.
              </Typography>
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              >
                <Button variant="contained">User mint a Hypercert</Button>
                <Button variant="outlined">Mechainism set Co2.Storage</Button>
              </Stack>
            </Container>
          </Box>
        </main>
        {/* Footer */}
        <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Grid container spacing={3}> 
          <Grid item xs={15} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              We are Cathay company, dedicated to providing the enviroment carbon reduce service to our
              customers.
            </Typography>
          </Grid>
          <Grid item xs={15} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              123 Main Street, Taipei, Taiwan
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <a  href="mailto:jake0627a1@gmail.com">Email: jake0627a1@gmail.com</a>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: +886 123456789
            </Typography>
          </Grid>
          <Grid item xs={15} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              <GitHub />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Close />
            </Link>
            <Box mt={5}>
              <Typography variant="body2" color="text.secondary" align="left">
                {"Copyright © "}
                <Link color="inherit" href="https://your-website.com/">
                  Your Website
                </Link>{" "}
                {new Date().getFullYear()}
                {"."}
              </Typography>
            </Box>
          </Grid>
          </Grid>
        </Box>
        {/* End footer */}
      </ThemeProvider>
    );
  }