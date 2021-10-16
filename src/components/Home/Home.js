import React from 'react';

import Background from '../UI/Background/Background';
import Help from '../UI/Help/Help';


const home = () => {
    return (
        <Background title="Map">
            <Help color="#463424">
                Veuillez choisir une zone pour partir à la recherche des artéfacts pour compléter
                 l'Utopia Engine et arrêter la fin du monde.
            </Help>
            <h2 style={{color: '#463424'}}>Carte</h2>            
        </Background>
    );
};

export default home;
