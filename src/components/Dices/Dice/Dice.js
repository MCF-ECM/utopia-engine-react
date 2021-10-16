import React from 'react';


const dice = (props) => {
    return (
        <img src={`/images/Dices/Dice ${props.value}.png`} alt={`${props.value}`} style={{width: 50, height:50}} />
    );
}

export default dice;
