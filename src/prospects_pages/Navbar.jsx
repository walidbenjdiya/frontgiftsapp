import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Navbar = ({ handleLogin }) => {
    const [randomNumber, setRandomNumber] = useState(null);
    const [color, setColor] = useState('#000000'); // Default color

    useEffect(() => {
        // Generate a random number between 50 and 100
        const generateRandomNumber = () => Math.floor(Math.random() * 51) + 50;

        // Generate a random color
        const generateRandomColor = () => {
            let color = '#ff5722';

            return color;
        };

        // Set initial random number and color
        setRandomNumber(generateRandomNumber());
        setColor(generateRandomColor());

        // Update the random number and color every second
        const interval = setInterval(() => {
            setRandomNumber(generateRandomNumber());
            setColor(generateRandomColor());
        }, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <nav className="fixed-top navbar navbar-expand-sm" style={{ backgroundColor: 'black' }}>
            <div className="container-fluid justify-content-between align-items-center" style={{ margin: '0px' }}>
                <a href='/' style={{ fontSize: '30px', fontWeight: 'bold', color: 'white', backgroundColor: 'transparent', border: '0', display: 'flex', textDecoration: 'none', }} >
                    {/* <span>GiftsToWin</span> */}
                    <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src="/giftsToWin.png" alt="" style={{ height: '95px', width: '205px', marginLeft: '-20px' }} />

                        {/* Random number positioned above the image */}

                    </div><div      
                    style={{
                        display: 'inline-block', marginLeft: '-21%', marginBottom: '45px',
                        // transform: 'skew(15deg,-15deg)',
                        // position: 'absolute',
                        // top: '10%', // Adjust this value based on where you want the number to appear
                        // left: '14%',
                        // transform: 'translate(-50%, -50%)',
                        fontSize: '22px', // Adjust the font size as needed
                        fontWeight: 'bold',
                        color: "#f9e39b",
                        fontStyle: 'italic', opacity: '0.9'
                    }}
                >{randomNumber}


                </div>                <div className="blinking-circle" style={{ marginBottom: '50px', marginLeft: '5px' }}></div>


                </a>
                <button className="navbar-toggler" style={{ backgroundColor: '#ff5722' }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarsExample03" style={{ margin: '0px 0px 0px 0%' }}>

                    <ul className="navbar-nav" >
                        <li className="nav-item">
                            <a className="nav-link active" style={{ color: 'white' }} href='/'>Home</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" aria-disabled="true" href="/participation" style={{ color: 'white' }}>Participation</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: 'white' }}>Follow us</a>
                            <ul className="dropdown-menu">
                                <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '5px' }}>
                                    <img src='/src/assets/facebook.png' height='23px' width='23px' ></img>
                                    <a className="dropdown-item" href="#" style={{ color: '#ff5722' }}>GiftToWin</a></li>
                                <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '5px' }}>
                                    <img src='/src/assets/instagram.png' height='23px' width='23px' ></img>
                                    <a className="dropdown-item" href="#" style={{ color: '#ff5722' }}>GiftToWin</a></li>
                                <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '5px' }}>
                                    <img src='/src/assets/tiktok.png' height='23px' width='23px' ></img>
                                    <a className="dropdown-item" href="#" style={{ color: '#ff5722' }}>GiftToWin</a></li>
                                <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '5px' }}>
                                    <img src='/src/assets/twitch.png' height='23px' width='23px' ></img>
                                    <a className="dropdown-item" href="#" style={{ color: '#ff5722' }}>GiftToWin</a></li>
                                <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '5px' }}>
                                    <img src='/src/assets/x.png' height='23px' width='23px' ></img>
                                    <a className="dropdown-item" href="#" style={{ color: '#ff5722' }}>GiftToWin</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Button
                                variant="contained"

                                sx={{
                                    backgroundColor: 'transparent', marginTop: '5px', border: '1px solid white',
                                    '&:hover': {
                                        backgroundColor: '#ff5722', // Utilise une couleur hexadécimale
                                    },
                                }}
                                onClick={handleLogin}
                            >
                                Join Us
                            </Button>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;
