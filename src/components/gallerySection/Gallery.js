import React from 'react';
import './gallery.scss';
import fotos from './fotos';

const Gallery = () =>{


    return(
        <section id="gallery" className="gallery">
            <h1 className="gallery__title">Gallery</h1>
            {fotos.map((element, index)=>{
                return <img className="gallery__foto" src={element} key={index} data-index={index} />
            })}
        </section>
    )
}

export default Gallery;