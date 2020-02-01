import React from 'react';
import './card.component.css';

const Card = ({monster}) => {
    return (
        <div className="card">
            <div className="card__icon">
                <img src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} alt={`monster-${monster.id}`} />
            </div>
            <div className="card__desc">
                <h2>{monster.name}</h2>
                <p>{monster.email}</p>
            </div>
        </div>
    );
}

export default Card;
