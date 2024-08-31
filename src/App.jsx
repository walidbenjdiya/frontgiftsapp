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

  const [open, setOpen] = React.useState(true);
  const [flash, setflash] = React.useState(false);
  const [hasFetchedData, setHasFetchedData] = useState(
    sessionStorage.getItem('hasFetchedData') === 'true'
  );
  let id;

  const [userData, usersetData] = useState('');


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
          sessionStorage.setItem('hasLoggedIn', 'true');
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

      if (!sessionStorage.getItem('hasLoggedIn')) {
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
          })
          .catch(err => {
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
      <Notification></Notification>
      <TopBar handleDrawerOpen={handleDrawerOpen} keycloak={keycloak} userData={userData} id={id} open={open}></TopBar>
      <SideBar open={open} userData={userData} />
      <Box component='main' sx={{ flexGrow: 1, p: 3 }} >
        <DrawerHeader />
        <Outlet context={{ keycloak, userData }} />

      </Box>
    </Box>
  );
}
