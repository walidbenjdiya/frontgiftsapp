import React, { useEffect, useState } from 'react';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Button, Divider, IconButton, Menu, MenuItem, MenuList, Paper, Stack, Typography } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import { AccountCircle, Delete } from '@mui/icons-material';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { useNavigate } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';


const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const TopBar = ({ open, keycloak, userData, handleDrawerOpen, id }) => {
  const naviagte = useNavigate();

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [auth2, setAuth2] = React.useState(true);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [notif, setNotif] = useState([]);


  useEffect(() => {
    fetch(`https://giftstowin-d4dwgeddf4dfe0av.francecentral-01.azurewebsites.net/notifications/${id}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        setNotif(data);
      })
      .catch(err => {
      });
  }, []);


  let email = '';
  keycloak.loadUserProfile().then(profile => {
    email = profile.email;
  })
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenu2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);

  };
  const handleClose2 = () => {
    setAnchorEl2(null);

  };
  const handleOpen = () => {
    naviagte('/offers/profile'
      // , { state: { userData, email } }
    );

  };



  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'black', width: '100%' }} open={false}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div" sx={{ fontFamily: 'monospace', fontWeight: 'bold', margin: '0px 0px 0px 30px' }}>
                        <img src="/giftsToWin.png" onClick={naviagte('/offers')} alt="" style={{ height: '75px', width: '165px', marginLeft: '-40px' }} />

                        {/* Random number positioned above the image */}

        </Typography>
        <Box flexGrow={1} />
        <Stack direction={"row"}>
          {/* <Button variant="contained"  
                sx={{backgroundColor:'#00b700'
                    ,margin:'10px 20px',width:'30%', height:'30px'

                }}>0.00 <span style={{ fontWeight: 'bold', fontSize:'16px' }}>$</span></Button> */}
          {auth2 && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu2}
                color="inherit"
              >
                <NotificationsNoneOutlinedIcon />

              </IconButton>
              <Paper>
              
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl2}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl2)}
                  onClose={handleClose2}
                  PaperProps={{
                    sx: {
                      width: '250px', // Adjust the width as needed
                      height: '280px', // Adjust the height as needed
                      display: 'flex',
                      margin: '0px 0px',
                      justifyContent: notif.length > 0 ? 'left': 'center', //left or center
                      alignItems:notif.length > 0 ? 'left': 'center',//left or center
                    },
                  }}
                >
                  
                  {notif && notif.length > 0 ? (
                    <Box sx={{ margin: '0px 10px', height: '100%' }}>
                      {notif.map((msg, index) => (
                        <Typography key={index} sx={{ fontSize: '15px', margin: '10px 0px', padding: '0px 07px', backgroundColor: '#a6a6a63b', borderRadius: '8px' }}> {msg} </Typography>
                      ))}
                    </Box>) : (
                    <Box sx={{  width: '100%', margin: '0px 0px' }}>
                      <Typography> No Message yet </Typography>
                    </Box>)
                  }
               
                </Menu>
              </Paper>
            </div>
          )}
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <SettingsIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleOpen}>Profile</MenuItem>
                <MenuItem onClick={() => keycloak.logout()}>Log out</MenuItem>
              </Menu>
            </div>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
