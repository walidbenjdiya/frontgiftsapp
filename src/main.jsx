import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ReactKeycloakProvider } from '@react-keycloak/web';
import Keycloak from 'keycloak-js';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import History from './pages/History.jsx';
import Offers from './pages/Offers.jsx';
import Profile from './pages/Profile.jsx';
import LastStep from './pages/LastStep.jsx';
import NotFound from './pages/NotFound.jsx';
import AppPt from './AppPt.jsx';
import AboutUs from './prospects_pages/AboutUs.jsx';
import Participation from './prospects_pages/Participation.jsx';
import Home from './prospects_pages/Home.jsx';
import Categories from './pages/categories.jsx';
//1060557631608-rli54vnd1rv22j972i9ls1jvdepinmvv.apps.googleusercontent.com
//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
const router = createBrowserRouter(
  
  createRoutesFromElements(
    <>
      <Route path="/" element={<AppPt />} >
        <Route index element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/participation" element={<Participation />} />
        <Route path='*' element={<NotFound />} />
      </Route>
      <Route path='/notfound' element={<NotFound />} />
      <Route path="/categories" element={<App />}>
        <Route index element={<Categories />} />
        <Route path='/categories/offers' element={<Offers />} />
        <Route path='/categories/history' element={<History />} />
        <Route path='/categories/profile' element={<Profile />} />
        <Route path='/categories/offers/lastStep' element={<LastStep />} />
        <Route path='*' element={<NotFound />} />
        
        {/* ... etc. */}
      </Route>
    </>
  )
);
const keycloak = new Keycloak({
  url: 'https://login.giftstowin.com/auth',
  realm: 'giftstowin',
  clientId: 'front-end-reactjs-client'
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ReactKeycloakProvider
    authClient={keycloak}
  >

    <RouterProvider router={router} />
  </ReactKeycloakProvider>
);
