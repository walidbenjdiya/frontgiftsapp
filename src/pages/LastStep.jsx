import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './profileImg.css'
import fetchJsonp from 'fetch-jsonp';



const LastStep = () => {
    const [offers, setOffers] = useState([]);

    const location = useLocation();
    const navigate = useNavigate();
    const [itemName, setItemName] = useState('');
    const handlclick = () => {
        navigate('/notfound');
    }
    useEffect(() => {
        const numOffers = 9; // Nombre maximum d'offres à afficher

        // Effectuer une requête GET pour récupérer les offres
        fetchJsonp('https://d1s282k6wlfspe.cloudfront.net/public/offers/feed.php?user_id=626243&api_key=47d1f1da55272db2e62d30e041449eb7&s1=&s2=', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('data');
                console.log(data);
                // Limiter le nombre d'offres affichées
                const trimmedOffers = data.splice(0, 9);
                setOffers(trimmedOffers);
            })
            .catch((error) => {
                console.error('Error fetching offers:', error);
            });
    }, []);


    useEffect(() => {
        const storedData = localStorage.getItem('data');
        const queryParams = new URLSearchParams(location.search);

        const target = queryParams.get('offer');

        if (storedData === target) {
            const v = target.split('-');
            setItemName(v[0]); // v[0] correspond à la valeur de item.name
            // Cela affichera la valeur de item.name
        }
        else {
            handlclick(); // Appelle directement la fonction pour naviguer vers '/notfound'
        }
    }, [location.search, navigate]);




    return (
        <Box >
            <Box >
                <img src={itemName === '' ? 'handlclick()' : `/${itemName}Hd.png`} alt="" style={{ height: '270px', width: '100%', margin: '-25px 0px 0px 0px', padding: '0px' }} />

                <span style={{ fontWeight: 'bold', fontSize: '30px', color: '#14385b' }}> Last Step</span>

                <br></br>
                <span style={{ fontWeight: 'inherit', fontSize: '20px', color: '#64686c' }}>You&apos;re almost there! Complete these quick offers to confirm your participation. Each step brings you closer to your reward. Finish them to secure your spot in the giveaway.
                    Luck is on your side—just one final step to go! </span><br></br>
                <img src={itemName ? `/${itemName}.png` : ''} alt="" style={{ height: '40%', width: '50%' }} />
                <div style={{ margin: '20px 0px' }}>
                    <span style={{ fontWeight: 'bold', fontSize: '26px', color: 'black' }}> **</span><span style={{ fontWeight: 'bold', fontSize: '20px', color: 'black', backgroundColor: '#e5b80b' }}> More Offers Completed, More Chances to Win! </span><span style={{ fontWeight: 'bold', fontSize: '26px', color: 'black' }}> **</span><br></br>
                    <span style={{ fontWeight: 'bold', fontSize: '25px', color: 'black' }}> **</span><span style={{ fontWeight: 'bold', fontSize: '20px', color: 'black', backgroundColor: '#e5b80b' }}> More Participants, More Winners! </span><span style={{ fontWeight: 'bold', fontSize: '25px', color: 'black' }}> **</span>
                </div>
            </Box>
            <Box sx={{ margin: '70px 0px' }}>
                <Box >
                    <Typography sx={{ fontWeight: 'bold', fontSize: '30px', color: '#14385b' }}> Offers:</Typography>
                    <Typography sx={{ fontSize: '20px', color: '#64686c' }}> Boost your chances of winning by joining our giveaway! Complete the offers below to confirm your entry. Once an offer is successfully completed, you&apos;ll receive a notification, and your participation will be added to your giveaway history.
                        <br></br>
                        <span style={{ backgroundColor: '#e5b80b', fontWeight: 'bold', color: 'black' }}> The more offers you complete, the better your chances of scoring amazing rewards!</span></Typography>

                </Box>
                {/* <img src="/cadeau.png" alt="" style={{ height: '50px', width: '50px', margin: '0px 20px 0px 0px ' }} />
                        <Button variant="contained" sx={{ fontSize: '90%', fontWeight: 'bold', height: '50px', width: '100%', backgroundColor: '#14385b', borderRadius: '20px' }} onClick={() => window.open(`${item.url}${localStorage.getItem('data')}`, '_blank')}>{item.description}</Button>
                     */}
                <Stack
                    sx={{
                        margin: '150px 0%',
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        flexDirection: 'row',  // S'assure que les cartes sont alignées horizontalement
                         justifyContent: 'center', // Centre les cartes horizontalement
                        gap: '16px' // Espacement entre les cartes
                    }}
                >
                    {offers.length > 0 ? (
                        offers.map((item, index) => (
                            <Card 
                                onClick={() => window.open(`${item.url}&s1=${localStorage.getItem('data')}`, '_blank')}
                                key={index}
                                sx={{
                                    position: 'relative', // Nécessaire pour positionner l'image de survol
                                    maxWidth: '27%', // 5 cartes par ligne
                                    minWidth: '120px',
                                    boxSizing: 'border-box', // S'assure que le padding est inclus dans la largeur totale
                                    overflow: 'hidden', // Assure que l'image de survol ne dépasse pas les limites de la carte

                                }}
                            >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        image="/cadeau.png"
                                        alt="green iguana"
                                        sx={{ width: '100%', height: 'auto' }} // Assurez-vous que l'image s'adapte correctement
                                    />
                                    <CardContent sx={{ margin: '0px', padding: '14px', justifyContent: 'center', textAlign: 'center' }}>
                                        <Typography
                                            gutterBottom
                                            sx={{
                                                fontWeight: 'bold',
                                                fontSize: '1.6vw', // Utilisez des unités relatives pour une meilleure adaptation
                                                display: 'flex',
                                                overflow: 'auto',
                                                justifyContent: 'center',
                                                marginBottom: '8px', // Ajoutez un espace entre les lignes si nécessaire
                                            }}
                                            component="div"
                                        >
                                            {itemName.toUpperCase()} Gift
                                        </Typography>
                                        <span
                                            style={{
                                                color: '#b9babc',
                                                fontSize: '0.75rem', // Utilisez des unités relatives pour plus de flexibilité
                                                display: 'block', // Utilisez block pour s'assurer que le texte s'affiche correctement
                                                margin: '0 auto', // Centrez le texte horizontalement
                                            }}
                                        >
                                            TOKE ME NOW
                                        </span>
                                        {/* Image à afficher lors du survol */}
                                        <Box
                                            component="img"
                                            src={`/${itemName}C.png`} // Remplacez par le chemin vers l'image à afficher
                                            alt="Hover"
                                            sx={{
                                                position: 'absolute',
                                                top: '0',
                                                left: '0',
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                opacity: '0',
                                                '&:hover': {
                                                    opacity: '1',
                                                },
                                                transition: 'opacity 0.3s ease-in-out',
                                                zIndex: 0,
                                            }}
                                        // className="hoverImage"
                                        />
                                    </CardContent>
                                </CardActionArea>
                            </Card>

                        ))
                    ) : (
                        <Typography
                            sx={{
                                textAlign: 'center',
                                marginTop: '20px',
                                fontWeight: 'bold',
                                fontSize: '1.5rem',
                                color: '#ff5722',
                            }}
                        >
                            Unfortunately, your country not supported
                        </Typography>
                    )}
                </Stack>


            </Box>

        </Box >
    );
}

export default LastStep;
