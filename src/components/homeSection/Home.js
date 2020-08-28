import React from 'react';
import './home.scss';
import offer from '../offertSection/offerContent';

const Home = () =>{
    
    return(
        <div className="home">

            <nav className="navigation">
                <ul className="navigation__list">
                    <li className="navigation__list__element"><a className="hyperlink" href="#">Home</a></li>
                    <li className="navigation__list__element"><a className="hyperlink" href="#offer">Offer</a></li>
                    <li className="navigation__list__element"><a className="hyperlink" href="#gallery">Gallery</a></li>
                    <li className="navigation__list__element"><a className="hyperlink" href="#contact">Contact</a></li>
                    <li className="navigation__list__element"><a className="hyperlink" href="#about">About</a></li>
                </ul>
            </nav>
            <div className="title__box">
                <h1 className="title">Diamond Shine Autodetaling</h1>
            </div> 
                {offer.map(({content, dForget})=>{
                    return (
                        <div className="home__box">
                            <p className="home__content">{content}</p>
                            <p className="home__content">{dForget}</p>
                        </div>  
                    )
                })}


        </div>
    )
}

export default Home;