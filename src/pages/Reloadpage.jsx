import { Box } from '@mui/material';
import React, { useEffect } from 'react';

const Reloadpage = () => {
    useEffect(() => {
      // Recharger la page après un petit délai
      setTimeout(() => {
        window.location.reload();
      }, 1500); // délai de 1 seconde
    }, []);
  
    return (
      <Box>Loading...!</Box>
    );
  
}

export default Reloadpage;
