import React from 'react';
import './contact.scss';

const Contact = () =>{
    return(
        <section id="contact" className="contact">
            <h1 className="contact__title">Contact</h1>

            <div className="contact__content">
                <h2 className="contact__content__title">Adrian Bator</h2>
                <p className="contact__text">Adress: 8 Liberty Gardens</p>
                <p className="contact__text">City: Bognor Regis</p>
                <p className="contact__text">Zip code: PO21 5FP</p>
                <p className="contact__text">Tel: 07925960857</p>

            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1260.7176752731937!2d-0.6938132416320022!3d50.804572194881494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4875ad005ff616cb%3A0xb4eaef01004b0450!2sBognor%20Regis%20PO21%205FP%2C%20Wielka%20Brytania!5e0!3m2!1spl!2spl!4v1598374195226!5m2!1spl!2spl" className = "contact__map" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </section>
    )
}

export default Contact;