import React from 'react';
import './about.scss';
import foto from './foto.jpg';

const About = () =>{
    return(
        <section id="about" className="about">
            <h1 className="about__title">About</h1>
            <div className="about__box"> 
                <img src={foto} alt="foto" className="about__foto" />
                <p className="about__text"> My name is Adrian and I've always had a passion for cars. I like to maintain them
                     and keep them as clean as possible and thats why I started my own business as auto
                      detailer. When I see the amount of cars that lack a proper care for their paint job
                       or a dirty interior I think that there is always a space for another detailer and specially
                        detailer like me that will pay attention to the tiniest of detail. I have gained my experience
                         through hard work on cars and I'm very knowledgeable when it comes  to detailing a car.
                          I have hours of experience in doing paint corrections and cleaning interiors. I will
                           always do my best so dont hesitate and contact me for a ni obligation qoute today.</p>
            </div>
        </section>
    )
}

export default About;