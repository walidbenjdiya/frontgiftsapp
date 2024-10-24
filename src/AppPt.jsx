import { useKeycloak } from '@react-keycloak/web';
import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from './prospects_pages/Navbar';
import { Height } from '@mui/icons-material';
// import 'bootstrap/dist/css/bootstrap.css';
const AppPt = () => {
    const { keycloak } = useKeycloak();
    const navigate = useNavigate();
   
// useEffect(() => {
  //   if (initialized) {
  //     console.log("3");
  //     if (!keycloak.authenticated) {
  //       keycloak.login();

  //     }
  //     setflash(true);
  //   }


  // }, [initialized]);
    const handleLogin = () => {
        navigate('/thankyou');
        // keycloak.login();
    };
    const handleLogout = () => {
        keycloak.logout();
    };

    useEffect(() => {
        if (keycloak.authenticated) {
            navigate('/categories'); // Redirect to home if not authenticated
        }
    }, [keycloak.authenticated, navigate]);

    return (
        <div>

            <Navbar handleLogin={handleLogin}/>
            <div style={{marginTop:'110px'}}>
                <Outlet context={{ handleLogin }}/>
            </div>
        </div>

    );
}

export default AppPt;
