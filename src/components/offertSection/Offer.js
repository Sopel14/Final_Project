import React from 'react';
import './offer.scss';
import offer from './offerContent';

const Offer = () =>{
    return(
        <section id="offer" className="offer">
            <h1 className="offer__title">Offer</h1>
            {offer.map(({content, dForget, basic, silver, gold, exterior, wheels, interior, windows, paint, smallCars, mediumCars, largeCars, extraLarge, contact})=>{
                return (
                <>
                    <p className="offer__content">{content}</p>
                    <p className="offer__content">{dForget}</p>
                    <p className="offer__content basic">{basic}</p>
                    <p className="offer__content silver">{silver}</p>
                    <p className="offer__content gold">{gold}</p>
                    <p className="offer__content">{exterior}</p>
                    <p className="offer__content">{wheels}</p>
                    <p className="offer__content">{interior}</p>
                    <p className="offer__content">{windows}</p>
                    <p className="offer__content">{paint}</p>
                    <p className="offer__content">{smallCars}</p>
                    <p className="offer__content">{mediumCars}</p>
                    <p className="offer__content">{largeCars}</p>
                    <p className="offer__content">{extraLarge}</p>
                    <p className="offer__content">{contact}</p>
                </>
                )
            })}
        </section>
    )
}

export default Offer;