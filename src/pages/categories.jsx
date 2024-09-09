import React, { useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { globalVariable } from '../GlobaleVar';
import { Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Divider, Stack, Typography } from '@mui/material';

const Categories = () => {
    const { keycloak } = useOutletContext();
    const navigate = useNavigate();

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
    
        fetch(`${globalVariable}/categories`, {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
          .then(response => response.json())
          .then(data => {
            setoffersData(data);
          })
          .catch(err => {
          });
          
      }, [val2]);



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
          
          
        </Box>
        {/* <Box>
          <Chat ></Chat>
        </Box> */}
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

              navigate(`/offers`, { state: `${index}` });
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

export default Categories;
