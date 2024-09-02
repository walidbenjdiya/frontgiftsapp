import React, { useEffect, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';
// import { HttpsProxyAgent } from 'https-proxy-agent';
// import axios from 'axios';
import { useKeycloak } from '@react-keycloak/web';
import { Outlet, useNavigate } from 'react-router-dom';
import Notification from './pages/Notification';
import { Alert, Snackbar } from '@mui/material';

const drawerWidth = 240;


const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));



export default function MiniDrawer() {
  const { keycloak, initialized } = useKeycloak();
  const navigate = useNavigate();
  const [open2, setOpen2] = useState(false);
  const [message, setMessage] = useState('');

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen2(false);
  };
  const [open, setOpen] = React.useState(true);
  // const [flash, setflash] = React.useState(false);
  // const [hasFetchedData, setHasFetchedData] = useState(
  //   sessionStorage.getItem('hasFetchedData') === 'true'
  // );
  let id;

  const [userData, usersetData] = useState('');

  useEffect(() => {
    const eventSource = new EventSource('https://giftstowin-d4dwgeddf4dfe0av.francecentral-01.azurewebsites.net/notification');
    console.log("Notification SSE connection established");

    eventSource.onmessage = (event) => {
      console.log("Received event:", event);
      console.log("Event data:", event.data);
      setMessage(event.data);
      setOpen2(true);
    };

    eventSource.onerror = (error) => {
      console.error('Error in SSE connection:', error);
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, []);


  useEffect(() => {
    if (!keycloak.authenticated && initialized) {
      navigate('/');
    }
  }, [keycloak, navigate,initialized]);
 

  // useEffect(() => {
  //   if (initialized) {
  //     console.log("3");
  //     if (!keycloak.authenticated) {
  //       keycloak.login();

  //     }
  //     setflash(true);
  //   }


  // }, [initialized]);




  useEffect(() => {
    if (keycloak.authenticated) {
      localStorage.setItem('userId', keycloak.idTokenParsed.sub);
      localStorage.setItem('token', keycloak.token);
      keycloak.loadUserProfile().then(profile => {
        localStorage.setItem('email', profile.email);
      })
          localStorage.setItem('userId', keycloak.idTokenParsed.sub);
          sessionStorage.setItem('hasLoggedIn', 'false');
      // fetch(`http://localhost:8081/users/${keycloak.idTokenParsed.sub}`, {
      //   method: "GET",
      //   headers: {
      //     'Content-Type': 'application/json',
      //     Authorization: `Bearer ${keycloak.token}`,
      //   },
      // })
      //   .then(response => response.json())
      //   .then(data => {console.log(keycloak);console.log("/////////////");
      //     usersetData(data);
      //     console.log("API response:", data);
      //     setHasFetchedData(true);
      //     localStorage.setItem('userId', keycloak.idTokenParsed.sub);
      //     sessionStorage.setItem('hasLoggedIn', 'true');
      //   })
      //   .catch(err => {
      //     console.error("Failed to fetch user data", err);
      //   });
console.log('1');
      if (!sessionStorage.getItem('hasLoggedIn')) {
        console.log('2');

        fetch(`https://giftstowin-d4dwgeddf4dfe0av.francecentral-01.azurewebsites.net/welcome`, {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${keycloak.token}`,
          },
        })
          .then(response => response.json())
          .then(data => {
            sessionStorage.setItem('hasLoggedIn', 'true');
            console.log("sessionStorage.setItem('hasLoggedIn', 'true'); est appelé");
          })
          .catch(err => {
            console.log('err');

          });
      }

      id = keycloak.idTokenParsed.sub;

    }
  }, [keycloak.token]);


  const handleDrawerOpen = () => {
    setOpen(true);
  };



  return (
    <Box sx={{ display: 'flex', }}>
      <CssBaseline />
      <Snackbar
      sx={{margin:'30px 0px'}}
        open={open2}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          {message}
        </Alert>
      </Snackbar>
      <TopBar handleDrawerOpen={handleDrawerOpen} keycloak={keycloak} userData={userData} id={id} open={open}></TopBar>
      <SideBar open={open} userData={userData} />
      <Box component='main' sx={{ flexGrow: 1, p: 3 }} >
        <DrawerHeader />
        <Outlet context={{ keycloak, userData }} />

      </Box>
    </Box>
  );
}
