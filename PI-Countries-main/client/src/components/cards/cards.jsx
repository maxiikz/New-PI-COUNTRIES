import React from 'react';
import '../cards/cards.css'

const Cards = ({
    flag,
    name,
    region
}) =>{
    return(
        <div id='card'>
            <h1 id='name'>{name}</h1>
            <img id='imgFlag' src={flag} alt="not found ja"></img>
            <h3 id='region'>{region}</h3>


        </div>
    )
}

export default Cards