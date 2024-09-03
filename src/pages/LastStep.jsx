import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';
import './profileImg.css'

const offers = [
    { url: "https://smrturl.co/o/s5afeea05fc/53488463?s1=", description: "TrendnDaily - Get 500$ LuluLemon Giftcard" },//$2.40
    { url: "https://smrturl.co/o/s5afeea05fc/53474545?s1=", description: "CTC - Win $100 Chipotle Gift Card" },//$2.56
    { url: "https://smrturl.co/o/s5afeea05fc/53456454?s1=", description: "TopSurveySpot - Get $1000 Gift Card" },//$1.92
    { url: "https://smrturl.co/o/s5afeea05fc/53380771?s1=", description: "CreditAmerica - Get $1,000 Credit Line" },//$3.52
    { url: "https://smrturl.co/o/s5afeea05fc/53480237?s1=", description: "FreesamplesProusa - Get Buffalo Wild Wings" },//$1.92
    { url: "https://smrturl.co/o/s5afeea05fc/53466558?s1=", description: "CTC - Win $100 Dunkin Donuts Gift Card" },//$2.56
    { url: "https://smrturl.co/o/s5afeea05fc/53483025?s1=", description: "CTConnect - Win $100 Starbucks Gift Card" },//$2.56
    { url: "https://smrturl.co/o/s5afeea05fc/53449328?s1=", description: "FreeSamples - Get Starbucks Samples" },//$1.92
    { url: "https://smrturl.co/o/s5afeea05fc/53391324?s1=", description: "TAS - Win iPhone 15" },//$1.92
    { url: "https://smrturl.co/o/s5afeea05fc/53481870?s1=", description: "CTConnect - CostCo 100" },//$3.20
    { url: "https://smrturl.co/o/s5afeea05fc/53488462?s1=", description: "TheAmericanSweepstakes - Win a Carribean Getaway for Two" },//$1.80
    { url: "https://smrturl.co/o/s5afeea05fc/53460081?s1=", description: "FreesamplesProusa - Get Free Sephora Samples" },//$1.92
    { url: "https://smrturl.co/o/s5afeea05fc/53383209?s1=", description: "CTConnect - iPhone 14" },//$3.00
    { url: "https://smrturl.co/o/s5afeea05fc/53470801?s1=", description: "CTConnect - Taco Bell 100" },//$3.20
    { url: "https://smrturl.co/o/s5afeea05fc/53477600?s1=", description: "Prizegrab - 7 Eleven Giftcard" },//$3.32
    { url: "https://smrturl.co/o/s5afeea05fc/53356127?s1=", description: "FreeSamples - Win McDonalds Samples" },//$1.92
    { url: "https://smrturl.co/o/s5afeea05fc/53177516?s1=", description: "Rewards US - Cash $750" },//$1.80
    { url: "https://smrturl.co/o/s5afeea05fc/53483297?s1=", description: "Everydaywinner - Walmart July Black Friday" },//$2.08
    { url: "https://smrturl.co/o/s5afeea05fc/53289138?s1=", description: "DeluxeBucks - Chance To Win $25,000" },//$2.56
    { url: "https://smrturl.co/o/s5afeea05fc/53477899?s1=", description: "CTC - Win $100 Amazon Gift Card to Your Account" },//$2.56
    { url: "https://smrturl.co/o/s5afeea05fc/53455010?s1=", description: "CTCon - Roblox $50" },//$3.20
    { url: "https://smrturl.co/o/s5afeea05fc/53491202?s1=", description: "FreeSamples - Get Wendy's Sample" },//$1.92
    { url: "https://smrturl.co/o/s5afeea05fc/53484844?s1=", description: "EverydayWinner - 500 DAILY" },//$2.48
    { url: "https://smrturl.co/o/s5afeea05fc/53487321?s1=", description: "Prizegrab - Cash Prize" },//$3.20
    { url: "https://smrturl.co/o/s5afeea05fc/53491437?s1=", description: "CTConnect - Paypal 100" },//$3.28
    { url: "https://smrturl.co/o/s5afeea05fc/53488461?s1=", description: "NCC - Earn $750 Towards Best Buy" },//$2.24
    { url: "https://smrturl.co/o/s5afeea05fc/53486155?s1=", description: "Everydaywinner - Dunkin" },//$2.08
    { url: "https://smrturl.co/o/s5afeea05fc/53483300?s1=", description: "Prizegrab - SouthWest Giftcard" },//$3.28
    { url: "https://smrturl.co/o/s5afeea05fc/53478998?s1=", description: "Prizegrab - Restaurant Giftcard" },//$3.20
    { url: "https://smrturl.co/o/s5afeea05fc/53486156?s1=", description: "Prizegrab - Uber 25" },//$3.20
    { url: "https://smrturl.co/o/s5afeea05fc/1196338?s1=", description: "Rewards US - Walmart $100" },//$1.80
]

const LastStep = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const [itemName, setItemName] = useState('');
    const handlclick = () => {
        navigate('/notfound');
    }
    // useEffect(() => {
    //     if (location.state !== null) {
    //         console.log("location.state: ", location.state);
    //         a.current = location.state;
    //     }
    // }, [location.state]);

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
                        margin: '150px 5%',
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        flexDirection: 'row',  // S'assure que les cartes sont alignées horizontalement
                        justifyContent: 'center', // Centre les cartes horizontalement
                        gap: '16px' // Espacement entre les cartes
                    }}
                >
                    {offers.sort(() => 0.5 - Math.random()).slice(0, 9).map((item, index) => (
                        <Card className="hover-image"
                            onClick={() => window.open(`${item.url}${localStorage.getItem('data')}`, '_blank')}
                            key={index}
                            sx={{
                                position: 'relative', // Nécessaire pour positionner l'image de survol
                                maxWidth: 'calc(120px - 66px)', // 5 cartes par ligne
                                minWidth: 'calc(30% - 16px)',
                                boxSizing: 'border-box', // S'assure que le padding est inclus dans la largeur totale
                                overflow: 'hidden', // Assure que l'image de survol ne dépasse pas les limites de la carte
                                '&:hover ': {
                                    opacity: 1, // L'image devient visible lors du survol
                                }
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
                                    <img
                                        src="/DefaultImg.jpg" // Remplacez par le chemin vers l'image à afficher
                                        alt="Hover"
                                        style={{
                                            position: 'absolute',
                                            top: '0',
                                            left: '0',
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            opacity: '0',
                                            transition: 'opacity 0.3s ease-in-out',
                                        }}
                                        className="hover-image"
                                    />
                                </CardContent>
                            </CardActionArea>
                        </Card>

                    ))}
                </Stack>


            </Box>

        </Box >
    );
}

export default LastStep;
