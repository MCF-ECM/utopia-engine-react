import React from 'react';

import Artifacts from './Artifacts/Artifacts';
import Background from '../UI/Background/Background';
import Help from '../UI/Help/Help';


const home = () => {
    return (
        <Background title="Map">
            <Help color="#463424">
                Partez à la recherche des artéfacts pour compléter l'Utopia Engine et arrêter la fin du monde.<br/>
                Choisissez une zone de recherche pour tenter de trouver un artéfact.<br/>
                Si vous trouver un artéfact inactivé, vous pourrez l'activer en le sélectionnant ci-contre.
            </Help>
            <Artifacts />
        </Background>
    );
};

export default home;
