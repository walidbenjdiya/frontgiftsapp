import React from 'react';
import Navbar from './Navbar';
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useNavigate, useOutletContext } from 'react-router-dom';
const Home = ({ keycloak }) => {
    const navigate=useNavigate();
    const { handleLogin } = useOutletContext();
    return (
        <main>
            <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-label="Slide 1" aria-current="true"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" style={{ height: '32rem' }}>
                        <img className="bd-placeholder-img" width="100%" height="100%" src='/pano1.png' aria-hidden="true" preserveAspectRatio="xMidYMid slice" >

                        </img>
                        <div className="container">
                            <div className="carousel-caption text-start">
                                <h1>Gift Cards Giveaways</h1>
                                <p className="opacity-75">Win exciting gift cards for gaming consoles, mobile apps, and more! Enhance your experience for free—enter now for amazing offers!</p>
                                <p><Button
                                    variant="contained"

                                    sx={{
                                        backgroundColor: 'transparent', border: '2px solid white',
                                        '&:hover': {
                                            backgroundColor: '#ff5722', // Utilise une couleur hexadécimale
                                        },
                                    }}
                                    onClick={handleLogin}
                                >
                                    Join Us
                                </Button></p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" style={{ height: '32rem' }}>
                        <img className="bd-placeholder-img" width="100%" height="100%" src='/pano2.png' aria-hidden="true" preserveAspectRatio="xMidYMid slice" >
                        </img>
                        <div className="container">
                            <div className="carousel-caption">
                                {/* <h1>Participate now to get your Minecraft gift card now!</h1> */}
                                <p style={{fontWeight:'bold'}}>Join now to win a Minecraft gift card! Unlock epic adventures and exclusive content—don&apos;t miss your chance, enter today!</p>
                                <p><Button
                                    variant="contained"

                                    sx={{
                                        backgroundColor: 'transparent', border: '2px solid white',
                                        '&:hover': {
                                            backgroundColor: '#ff5722', // Utilise une couleur hexadécimale
                                        },
                                    }}
                                    onClick={handleLogin}
                                >
                                    Join Us
                                </Button></p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" style={{ height: '32rem' }}>
                        <img className="bd-placeholder-img" width="100%" height="100%" src='/pano3.png' aria-hidden="true" preserveAspectRatio="xMidYMid slice" >
                        </img>
                        <div className="container">
                            <div className="carousel-caption text-end">
                                {/* <h1 style={{ color: '#ff5722', fontWeight: 'bold' }}>Gaming Tournament</h1> */}
                                <p style={{color:'#ff5722', fontWeight:'bold'}}>Join our epic gaming tournament now! Compete globally, showcase your skills, and win incredible prizes. Don’t miss out—register today and prove you're the best!</p>
                                <p><Button
                                    variant="contained"

                                    sx={{
                                        backgroundColor: 'transparent', border: '2px solid white',
                                        '&:hover': {
                                            backgroundColor: '#ff5722', // Utilise une couleur hexadécimale
                                        },
                                    }}
                                    onClick={handleLogin}
                                >
                                    Join Us
                                </Button></p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>



            <hr className="featurette-divider" style={{ margin: '40px' }}></hr>


            <div className='container marketing' style={{ marginTop: '50px' }}>
                <div className="row">
                    <div className="col-lg-4" style={{ textAlign: 'center' }}>
                        <img className="bd-placeholder-img rounded-circle" width="100" height="100" src='/trust.png' title='trust' >
                        </img>
                        <p>We build trust with our community through secure and transparent giveaways. Each experience is crafted to be both thrilling and deeply respectful of you..</p>
                    </div>
                    <div className="col-lg-4" style={{ textAlign: 'center' }}>
                        <img className="bd-placeholder-img rounded-circle" width="100" height="100" src='/diversity.png' title='diversity' >
                        </img>

                        <p>We offer a diverse range of prizes, from in-game assets and consoles to exclusive subscriptions and merchandise. Whatever your passion, there&apos;s something for every gamer on our platform.</p>
                    </div>
                    <div className="col-lg-4" style={{ textAlign: 'center' }}>
                        <img className="bd-placeholder-img rounded-circle" width="100" height="100" src='/24-hours.png' title='daily' >
                        </img>
                        <p>We are committed to delivering your prizes within 24 hours after each giveaway. Soon, our contests will be even more thrilling, with lightning-fast giveaways that last no more than 24 hours!</p>
                    </div>
                </div>
            </div>
            <hr className="featurette-divider" style={{ margin: '40px' }}></hr>
            <div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <ArrowRightIcon sx={{ height: '3%', width: '3%', paddingBottom: '5px' }} />
                    <h4 style={{ fontWeight: 'bold' }}>For Our Community:</h4>
                </div>
                <div className="row" style={{ margin: '30px' }}>
                    <div className="col-md-6" style={{ marginTop: '20px' }}>
                        <Card onClick={handleLogin} sx={{ maxWidth: '100%', position: 'relative' }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="400"
                                    image="/cat1.webp"
                                    alt="green iguana"
                                />
                                <CardContent
                                    sx={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        color: 'white',
                                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                        width: '100%',
                                        padding: '10px',
                                    }}
                                >
                                    <Typography gutterBottom variant="h5" component="div">
                                        Gaming Hardware and Accessories
                                    </Typography>
                                    <Typography variant="body2">
                                        Consoles and Accessories: Gaming consoles, controllers, headsets, and other peripherals.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                    <div className="col-md-6" style={{ marginTop: '20px' }}>
                        <Card sx={{ maxWidth: '100%', position: 'relative' }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="400"
                                    image="/cat2.webp"
                                    alt="green iguana"
                                />
                                <CardContent
                                    sx={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        color: 'white',
                                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                        width: '100%',
                                        padding: '10px',
                                    }}
                                >
                                    <Typography gutterBottom variant="h5" component="div">
                                        Subscriptions and Access
                                    </Typography>
                                    <Typography variant="body2">
                                        Gaming services like Xbox Game Pass, PlayStation Plus, or cloud gaming subscriptions.
                                        Exclusive Access: Early or beta access to games, private servers, or special events.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                    <div className="col-md-6" style={{ marginTop: '20px' }}>
                        <Card sx={{ maxWidth: '100%', position: 'relative' }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="400"
                                    image="/cat3.webp"
                                    alt="green iguana"
                                />
                                <CardContent
                                    sx={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        color: 'white',
                                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                        width: '100%',
                                        padding: '10px',
                                    }}
                                >
                                    <Typography gutterBottom variant="h5" component="div">
                                        Gaming competitions
                                    </Typography>
                                    <Typography variant="body2">
                                        Join exciting tournaments, challenge players of all levels, and prove you&apos;re the best. Whether you&apos;re a casual gamer or a pro, each competition is your chance to shine and win exclusive rewards!
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                    <div className="col-md-6" style={{ marginTop: '20px' }}>
                        <Card sx={{ maxWidth: '100%', position: 'relative' }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="400"
                                    image="/cat4.webp"
                                    alt="green iguana"
                                />
                                <CardContent
                                    sx={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        color: 'white',
                                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                        width: '100%',
                                        padding: '10px',
                                    }}
                                >
                                    <Typography gutterBottom variant="h5" component="div">
                                        In-Game Assets
                                    </Typography>
                                    <Typography variant="body2">
                                        In-Game Currency and Items: Includes virtual currency, skins, and other exclusive in-game assets.
                                        Game Copies: Full game copies, including standard and special editions.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>

                </div>
            </div>
            <hr style={{ margin: '46px' }}></hr>
            <div className="row" style={{ margin: '30px 5px 60px 5px', }}>
                <div className="col-md-7">


                    <div className="card text-bg-dark" style={{ height: '350px' }}>
                        <img src="/lastimg.png" height={'100%'} className="card-img" alt="..." />
                        <div className="card-img-overlay d-flex flex-column justify-content-end align-items-center">
                            <Button
                                variant="contained"

                                sx={{
                                    backgroundColor: '#ff5722', marginBottom: '30px',
                                    '&:hover': {
                                        backgroundColor: '#ff5722', // Utilise une couleur hexadécimale
                                    },
                                }}
                                onClick={handleLogin}
                            >
                                Get it Now
                            </Button>
                        </div>
                    </div>

                </div>
                <div className='col-md-5'>
                    <h4>Follow Us</h4>
                    <Typography variant="body2" style={{ margin: '10px' }}>
                        Join our community on Facebook, Instagram, TikTok, X , and Twitch to participate in exclusive polls. We want to hear your preferences and ideas for our upcoming giveaways! Your feedback matters, and by following us, you can directly influence the prizes we feature on our site. Don’t miss out on the chance to have your voice heard and take part in giveaways reserved for our followers!
                    </Typography>
                    <div className='row' style={{ justifyContent: 'center' }}>
                        <a href='https://www.facebook.com/people/Giftstowin/61565358622357/' style={{ height: '50px', width: '70px', marginTop: '40px', marginRight: '15px', backgroundColor: 'white', border: '0' }}>
                            <img src='/facebook.png' height='100%' width='100%' ></img>
                        </a>
                        <a href='https://www.instagram.com/gifts_towin/' style={{ height: '50px', width: '70px', marginTop: '40px', marginRight: '15px', backgroundColor: 'transparent', border: '0' }}>
                            <img src='/instagram.png' height='100%' width='100%' ></img>
                        </a>
                        <a href='https://www.tiktok.com/@giftstowin' style={{ height: '50px', width: '70px', marginTop: '40px', marginRight: '15px', backgroundColor: 'transparent', border: '0' }}>
                            <img src='/tiktok.png' height='100%' width='100%' ></img>
                        </a>
                        <a href='https://www.twitch.tv/giftstowin' style={{ height: '50px', width: '70px', marginTop: '40px', marginRight: '15px', backgroundColor: 'transparent', border: '0' }}>
                            <img src='/twitch.png' height='100%' width='100%' ></img>
                        </a>
                        <a href='https://x.com/Gifts_To_win' style={{ height: '50px', width: '70px', marginTop: '40px', backgroundColor: 'transparent', border: '0' }}>
                            <img src='/x.png' height='100%' width='100%' ></img>
                        </a>
                    </div>
                </div>
            </div>


        </main>
    );
}

export default Home;
