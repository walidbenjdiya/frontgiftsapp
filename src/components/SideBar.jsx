import React from 'react';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import List from '@mui/material/List';
import { Avatar, Box, styled, Typography, useTheme } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import HistoryIcon from '@mui/icons-material/History';
import { useLocation, useNavigate } from 'react-router-dom';
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  // backgroundColor:"black",
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  backgroundColor:"black",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',

  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const array1 = [
  { text: "Offers", icon: <LocalOfferIcon sx={{color:'white'}} />, path: "/offers" },
  { text: "History", icon: <HistoryIcon sx={{color:'white'}}/>, path: "/offers/history" },
]
const array2 = [
  { text: "facebook", icon: "/facebook.png", path: "https://www.facebook.com" },
  { text: "instagram", icon: "/instagram.png", path: "https://www.instagram.com" },
  { text: "tiktok", icon: "/tiktok.png", path: "https://www.tiktok.com" },
  { text: "twitch", icon: "/twitch.png", path: "https://www.twitch.tv/" },
  { text: "x", icon: "/x2.png", path: "https://x.com/" },
]

const SideBar = ({ open }) => {
  let location= useLocation();
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Drawer variant="permanent" open={false} >
      <DrawerHeader>
      </DrawerHeader>


      {/* <Avatar sx={{
        mx: "auto", width: open ? 88 : 44, height: open ? 88 : 44, my: 1, border: "2px solid grey"
      }} src='' /> */}
      {/* <Typography align='center' sx={{
        fontSize: open ? 17 : 0,
      }} >{userData ? userData.username : 'Username'}</Typography> */}
      <Divider />
      <List>
        {array1.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: 'block'}}>
            <ListItemButton
              onClick={() => {
                navigate(item.path);
              }}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                bgcolor: location.pathname === item.path ? '#2a72ba': 'black'
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {array2.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block'}}>
          <ListItemButton
            onClick={() => window.open(`${item.path}`, '_blank')}
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
              bgcolor: location.pathname === item.path ? '#2a72ba': 'black'
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
            <img src={item.icon} style={{height:'35px', width:'35px', margin:'0px -7px'}} alt="" />  
            </ListItemIcon>
            {/* <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} /> */}
          </ListItemButton>
        </ListItem>
        ))}
      </List>
    </Drawer>

  );
}

export default SideBar;
