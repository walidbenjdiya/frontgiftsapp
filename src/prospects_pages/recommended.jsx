import { Box, Grid, Grid2, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Recommended = () => {
    const images = [
        '/epic.png',
        '/oracle.png',
        '/amazon.png',
        '/twitchR.png',
        '/xbox.png',
        '/playstation.png',
        '/microsoft.png',
        '/cash-app.png',



        
    ];



    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000); // Change every 2 seconds

        return () => clearInterval(interval); // Clean up the interval on unmount
    }, [images.length]);

    return (
        <div className="row align-items-center" style={{justifyContent:'center', margin:'20px'}}>
            <div className="col-md-3 mb-2 mb-md-0">
                <h5 className="pe-6">Companies trust us</h5>
            </div>

            <div className="col-md-9">
                <div className='row' >
                    <div className='col-md-6'>
                        <Box
                            sx={{
                                width: '100%',
                                height: '100px', // Adjust the height as needed
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                overflow: 'hidden', // Hide overflow to ensure the images fit within the box
                            }}
                        >
                            <img
                                src={images[currentImageIndex]}
                                alt={`Slide ${currentImageIndex}`}
                                style={{
                                    width: '70%',
                                    height: '100%',
                                    objectFit: 'cover', // Cover the box without distorting the image
                                    transition: 'opacity 0.5s ease-in-out',
                                    borderRadius:'10px'
                                }}
                            />
                        </Box>
                    </div>
                    <div className='col-md-6'>
                        <Box
                            sx={{
                                width: '100%',
                                height: '100px', // Adjust the height as needed
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                overflow: 'hidden', // Hide overflow to ensure the images fit within the box
                            }}
                        >
                            <img
                                src={images[currentImageIndex +1]}
                                alt={`Slide ${currentImageIndex}`}
                                style={{
                                    width: '70%',
                                    height: '100%',
                                    objectFit: 'cover', // Cover the box without distorting the image
                                    transition: 'opacity 0.5s ease-in-out',
                                    borderRadius:'10px'
                                }}
                            />
                        </Box>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default Recommended;
