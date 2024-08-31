import React, { useEffect, useState } from 'react';
import { DataGrid,  } from '@mui/x-data-grid';



const columns = [
  { field: 'id', headerName: 'Id', width: 150 },
  { field: 'offer', headerName: 'Offer', width: 250 },
  { field: 'date', headerName: 'Date', width:250  },
  { field: 'heure', headerName: 'Heure', width: 150 },
];
const History = () => {
  const [historyData, sethistoryData]=useState([]);
  useEffect(() => {
    fetch(`https://giftstowin-d4dwgeddf4dfe0av.francecentral-01.azurewebsites.net/history/${localStorage.getItem('userId')}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then(response => response.json())
      .then(data => { sethistoryData(data);
        
        
      })
      .catch(err => {
      });
  }, []);
    return (
        <div style={{ height: 492, width: '100%' }}>
      <DataGrid rows={historyData} columns={columns} />
    </div>
    );
}

export default History;


