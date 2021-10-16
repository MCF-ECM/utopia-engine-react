import React from 'react';

import Artifacts from './Artifacts/Artifacts';
import Background from '../UI/Background/Background';
import Help from '../UI/Help/Help';


const home = () => {
    return (
        <Background title="Map">
            <Help color="#463424">
                Veuillez choisir une zone pour partir à la recherche des artéfacts pour compléter
                 l'Utopia Engine et arrêter la fin du monde.
            </Help>
            <Artifacts />
        </Background>
    );
};

export default home;
