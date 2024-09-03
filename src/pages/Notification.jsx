import { Alert, Snackbar } from '@mui/material';
import React, { useEffect, useState } from 'react';

import { globalVariable } from './GlobaleVar';


const Notification = () => {

    const [open2, setOpen2] = useState(false);
  const [message, setMessage] = useState('');

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen2(false);
  };

  useEffect(() => {
    const eventSource = new EventSource(`${globalVariable}/notification`);
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

  return (
    <div>
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
    </div>
  );
}

export default Notification;
