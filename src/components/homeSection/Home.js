import React from 'react';
import './home.scss';

const Home = () =>{
    
    return(
        <div className="home">  
            <h1 className="title">Diamond Shine Autodetaling</h1>
            <nav className="navigation">
                <ul className="navigation__list">
                    <li className="navigation__list__element"><a className="hyperlink" href="#">Home</a></li>
                    <li className="navigation__list__element"><a className="hyperlink" href="#offer">Offer</a></li>
                    <li className="navigation__list__element"><a className="hyperlink" href="#gallery">Gallery</a></li>
                    <li className="navigation__list__element"><a className="hyperlink" href="#contact">Contact</a></li>
                    <li className="navigation__list__element"><a className="hyperlink" href="#about">About</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Home;