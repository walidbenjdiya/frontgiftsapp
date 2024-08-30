import React, { useEffect, useRef, useState } from 'react';

const generateMessage = () => {
    const users = [
        'ShadowPhoenix23', 'ThunderStrikeX', 'LunarNinja9', 'MysticFalcon42', 'VortexViperX',
        'CyberKnight7', 'NebulaWarrior8', 'PhantomRanger5', 'FrostByte54', 'InfernoDragon88',
        'EclipseGamer14', 'BlazeStorm99', 'StarHunter2024', 'SilentPredator1', 'StormBreakerX',
        'ArcaneVortex33', 'SpectralKnight21', 'NovaEcho7', 'QuantumFuryX', 'RogueAssassin5',
        'CelestialSaber4', 'DarkRiderX', 'GalacticPhantom9', 'MysticPulse7', 'ViperShadow23',
        'SolarBlaze11', 'IronFist77', 'NightfallWarrior', 'LuminousDragon8', 'VenomStrike42',
        'StormChaser33', 'DigitalGuardian1', 'FrostRanger88', 'NebulaEcho9', 'VortexMageX',
        'PhantomGamer22', 'EclipseKnight77', 'BlazePhoenix4', 'ShadowSpecter5', 'ArcaneStorm14',
        'GalacticRangerX', 'InfernoEcho6', 'CelestialFury9', 'MysticHunter23', 'QuantumRider7',
        'DarkStorm8', 'NebulaBlade1', 'LunarEcho33', 'PhantomStrikeX', 'SolarKnight88',
        'VortexAssassin21', 'RogueDragonX', 'SpectralFury42', 'BlazeKnight5', 'EclipseMage99',
        'FortniteHeroX', 'RobloxMaster21', 'LeagueChampion7', 'ValorantAce9', 'MinecraftBuilder14',
        'EpicGamerY23', 'PixelWarrior88', 'DragonSlayerX5', 'NinjaRanger33', 'ArcaneMageX1',
        'VortexKnight77', 'GalacticHunter42', 'ShadowAssassin9', 'LuminousPhoenix8', 'StormMaster99',
        'NebulaGamer21', 'CyberMage5', 'QuantumBlaze7', 'SpectralRider8', 'InfernoWarrior33'
    ];
    const offers = ['Fortnite', 'Roblox', 'LoL', 'Valorant', 'Minecraft'];
    const user = users[Math.floor(Math.random() * users.length)];
    const offer = offers[Math.floor(Math.random() * offers.length)];
    return `${user} has successfully completed an offer in the ${offer} giveaway.`;
  };
const Chat = () => {
    const [messages, setMessages] = useState([]);
  
    useEffect(() => {
      // Fonction pour ajouter un message avec un délai aléatoire
      const addMessage = () => {
        setMessages(prevMessages => {
          // Ajoute le nouveau message en haut
          const newMessages = [
            { text: generateMessage(), time: new Date().toLocaleTimeString() },
            ...prevMessages
          ];
  
          // Garder seulement les 10 derniers messages
          return newMessages.slice(0, 10);
        });
      };
  
      // Fonction pour gérer les messages
      const handleMessageGeneration = () => {
        addMessage();
        const randomDelay = Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000; // entre 2s et 25s
        setTimeout(handleMessageGeneration, randomDelay);
      };
  
      handleMessageGeneration(); // Démarrer le processus
  
      return () => {
        // Nettoyer les timers lorsque le composant est démonté
        // Aucun nettoyage spécifique nécessaire ici, car setTimeout se nettoie automatiquement
      };
    }, []);
  
    return (
        <div style={{ height: '300px', padding: '10px', overflow: 'auto', maxHeight: '100%' }}>
        <div>
          {messages.map((message, index) => (
            <div 
              key={index} 
              style={{
                backgroundColor: '#f6f6f6', 
                margin: '5px 0px', 
                borderRadius: '10px',
                padding: '0px 8px', 
                fontSize: '80%'
              }}
            >
              <strong style={{ color: '#000000ad', fontSize:'80%' }}>{message.text}</strong>
              <em style={{ fontSize: '10px' }}>{message.time}</em>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default Chat;