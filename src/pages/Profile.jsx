import { Box, Button, Snackbar, Stack, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './profileImg.css'
import { useForm, } from "react-hook-form";
// import { Password } from '@mui/icons-material';
import { useLocation, useOutletContext } from 'react-router-dom';

const Profile = () => {
  // const location = useLocation();
  // console.log(location.state);
  const { keycloak } = useOutletContext();

const [userData, setuserData]=useState('');
  useEffect(() => {
    fetch(`https://giftstowin-d4dwgeddf4dfe0av.francecentral-01.azurewebsites.net/users/${localStorage.getItem('userId')}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then(response => response.json())
      .then(data => { setuserData(data);
        
        if(data.dateNaissance){
          setchange(true);
        }else{
        setchange(false);
        }
      })
      .catch(err => {
      });
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    data.id = userData.id;
    data.username = userData.username;
    // console.log(data);
    fetch(`https://giftstowin-d4dwgeddf4dfe0av.francecentral-01.azurewebsites.net/addUser`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(data),
    })
      .then(response => {
        response.json();
      })
      .then(data => {
        setchange(true);
        handleClick();
      })
      .catch(err => {
      });
    // handleClick();
    // setchange(!change)
  }

  const [open, setOpen] = React.useState(false);


  const [imagePreview, setImagePreview] = useState(null);
  const [imageURL, setImageURL] = useState(null);

  const [change, setchange] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleClick = () => {
    setOpen(true);
  };
  const handleblock = () => {
    setchange(false);
  }


  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"

    >
      <div style={{ width: '100%' }}>
        <Typography sx={{ fontSize: '30px', fontWeight: 'bold', fontFamily: '-moz-initial', color: '#14385b' }}>
          PROFILE
        </Typography>
        <h3>
          Add Your Personnal Information
        </h3>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '100%', margin: '90px 0px' }} >
        {/* <div className="app">
          <div className="parent">
            <div className="file-upload">
              <h3>Click box to upload img</h3>
              <input style={{backgroundColor:'green',display: 'block',
            height: '100%',
            width: '100%',
            position: 'absolute',
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
            opacity: '0',
            cursor: 'pointer',}} type="file" accept="image/*" onChange={handleImageChange} />
            {imagePreview && <img src={imagePreview} alt="Preview" style={{ maxHeight: '200px' }} />}
            {imageURL && <img src={imageURL} alt="Uploaded" style={{ maxHeight: '200px' }} />}
            </div>
          </div>
        </div> */}
        <Stack sx={{ gap: 3, margin: '30px 0px 0px 0px' }} direction='row'>
          <TextField InputLabelProps={{
              shrink: true, // Assure que le label ne se superpose pas
            }} {...register("prenom", { required: true })} error={errors.prenom} helperText={errors.prenom ? "This Field Is Required" : null} sx={{ flex: 1 }} value={userData?.prenom} label="First Name" disabled={change} variant="outlined" />
          <TextField InputLabelProps={{
              shrink: true, // Assure que le label ne se superpose pas
            }}  {...register("nom", { required: true })} error={errors.nom} helperText={errors.nom ? "This Field Is Required" : null} sx={{ flex: 1 }} label="Last Name" value={userData?.nom} disabled={change} variant="outlined" />
        </Stack>
        <TextField InputLabelProps={{
              shrink: true, // Assure que le label ne se superpose pas
            }} value={localStorage.getItem('email')}  {...register("email")} error={errors.email} helperText={errors.email ? "This Field Is Required" : null} id="outlined-basic" label="Email" type='email' disabled={true} variant="outlined" />


        <TextField InputLabelProps={{
              shrink: true, // Assure que le label ne se superpose pas
            }} value={userData?.adresse} disabled={change} {...register("adresse", { required: true })} error={errors.adresse} helperText={errors.adresse ? "This Field Is Required" : null} label="Street Adresse" variant="outlined" />
        <Stack sx={{ gap: 3, margin: '30px 0px 0px 0px' }} direction='row'>
          <TextField InputLabelProps={{
              shrink: true, // Assure que le label ne se superpose pas
            }} value={userData?.ville} disabled={change} {...register("ville", { required: true })} error={errors.ville} helperText={errors.ville ? "This Field Is Required" : null} label="city" sx={{ flex: 1 }} type='text' variant="outlined" />
          <TextField value={userData?.dateNaissance}
            disabled={change}
            {...register("dateNaissance", {
              required: true,
              validate: {
                isUnder10: value => {
                  const enteredYear = new Date(value).getFullYear(); // Extrait l'année de la date entrée
                  const currentYear = new Date().getFullYear(); // L'année actuelle

                  const age = currentYear - enteredYear; // Calcul de l'âge

                  // Vérifie si l'âge est inférieur ou égal à 10 ans
                  return age >= 10 || "L'âge doit être inférieur ou égal à 10 ans";
                }
              }
            })}
            error={errors.dateNaissance}
            helperText={errors.dateNaissance ? errors.dateNaissance.message : null}
            sx={{ flex: 1 }}
            label="Date de Naissance"
            InputLabelProps={{
              shrink: true, // Assure que le label ne se superpose pas
            }}
            type="date"
          />
        </Stack>
        <Stack sx={{ gap: 3, margin: '30px 0px 0px 0px' }} direction='row'>
          <TextField InputLabelProps={{
              shrink: true, // Assure que le label ne se superpose pas
            }} {...register("state", { required: true })} error={errors.state} helperText={errors.state ? "This Field Is Required" : null} sx={{ flex: 1 }} label="state" disabled={change} variant="outlined" value={userData?.state}/>
          <TextField InputLabelProps={{
              shrink: true, // Assure que le label ne se superpose pas
            }} sx={{ flex: 1 }} disabled={change} {...register("numero_Tele", { required: true })} error={Boolean(errors.numero_Tele)} helperText={errors.numero_Tele ? "This Field Is Required" : null} label="Phone Number" value={userData?.numero_Tele} type='tel' variant="outlined" />
        </Stack>
        <Box sx={{ textAlign: 'right', margin: '70px 0px' }}>
          <Button type='submit' disabled={change} variant='contained' sx={{ backgroundColor: 'black', textTransform: 'capitalize', width: '20%', margin: '0px 50px' }}>
            Save
          </Button>


          {/* <Button onClick={handleblock} variant='contained' sx={{ backgroundColor: 'black', width: '20%', textTransform: 'capitalize' }}>
            edit
          </Button> */}

          <Snackbar
            open={open}
            autoHideDuration={5000}
            onClose={handleClose}
            message="informations saved with succes."
          />

        </Box>
      </div>
    </Box>
  );
}

export default Profile;
