import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Divider, Stack, styled, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import Chat from './chat';
import { globalVariable } from '../GlobaleVar';


const Offers = () => {
  const { keycloak } = useOutletContext();
  console.log(localStorage.getItem("data"));

  const [val, setval] = useState('');
  const [val2, setval2] = useState(false);
  const [offersData, setoffersData] = useState([]);

  useEffect(() => {
    if (keycloak.profile) {
      setval(keycloak.profile.username.split('@')[0]);
      setval2(true);
    }
  }, [keycloak.profile]);
  useEffect(() => {
    
    fetch(`${globalVariable}/listoffres/${localStorage.getItem('data')}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setoffersData(data);
      })
      .catch(err => {
        console.log(err);
      });
      
  }, [val2]);
  const [color, setColor] = useState('black');
  // const offerurl = (offerurl) => {
  //window.open(offerurl, '_blank');
  //     };

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
  const navigate = useNavigate();


  useEffect(() => {
    const colors = ['red', 'blue', 'green', 'orange', 'purple'];
    let index = 0;

    const intervalId = setInterval(() => {
      setColor(colors[index]);
      index = (index + 1) % colors.length;
    }, 800); // Change color every 0.8 seconds

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []);
  return (
    <Box>
    {val2 && offersData.length !==0 ? (
    <Box >

      <Stack sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between', // Espace entre les éléments
        alignItems: 'flex-start', // Aligner les éléments verticalement au centre
        
      }}>
        {/* <DrawerHeader /> */}
        <Box sx={{ marginTop: '40px' , maxWidth:'55%'}}>
          <Typography paragraph sx={{ fontWeight: 'bold', fontSize: '20px' }}>
            Welcome <span>{keycloak.profile ? val : "Username"}</span>,
          </Typography>
          <Typography paragraph sx={{ fontWeight: 'bold', fontSize: '30px' }}>
            The <span style={{ color: color }}>GiveAways</span>  Of This Week
          </Typography>
          <Box sx={{ backgroundColor:'#94D0FF', borderRadius:'20px', border:'1px solid white;'}}>
          <Typography sx={{padding:'10px', color:'black', fontStyle:'oblique'}}>
           🚀 Didn’t find the giveaway of your dreams? 🎁 Reach out to us on social media! If enough of you request the same gift, 🎉 we'll gladly add it! 🎮🎧 Your opinion matters, so speak up and stay tuned for exciting updates! ✨
            </Typography>
          </Box>
        </Box>
        <Box>
          <Chat ></Chat>
        </Box>
      </Stack>
      <Box
        sx={{
          // center aligns buttons horizontally
          // space between buttons
          margin: '40px 0px', // margin around the box

        }}
      >
        <Stack
          padding={'0px 3%'}
          justifyContent={'flex-start'}
          gap="16px"
          direction="row"
          flexWrap="wrap"
          sx={{
            '& > *': {
              flex: '1 1 calc(32%  )',
              boxSizing: 'border-box',
            },
            width: '100%',               // S'assure que le Stack occupe toute la largeur disponible
            height: '100%',

          }}
        >
          {offersData.map((item, index) => (
            <Card key={index} sx={{ maxWidth: 345, minWidth: 295 }} onClick={() => {
              localStorage.setItem('data', `${item.name}-${val}`);

              navigate(`laststep?offer=${item.name}-${val}`, { state: `${item.name}-${val}` });
            }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200px"
                  width="100%"
                  image={item.image}
                  alt={item.name}

                />
                <CardContent >
                  <Typography gutterBottom variant="h6" sx={{ fontWeight: 'bold' }} component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>

              </CardActionArea>
              <Divider />
              <CardActions sx={{ justifyContent: 'center', alignItems: 'center' }}>
                <Typography size="small" fontWeight={'bold'}>
                  The Draw {item.raffledraw}
                </Typography>
              </CardActions>
            </Card>
          ))}
        </Stack>

      </Box>

     

    </Box>
  ) :(
    <Box>Loading...!</Box>
)}
</Box>
  );
}

export default Offers;
