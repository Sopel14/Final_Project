import React from 'react';
import './components/main/reset.scss';
import './components/homeSection/Home';
import Home from './components/homeSection/Home';
import Offer from './components/offertSection/Offer';
import Gallery from './components/gallerySection/Gallery';
import Contact from './components/contactSection/Contact';
import About from './components/aboutSection/About';

function App() {
  return (
    <>
      <Home />
        <main>
          <Offer />
          <Gallery />
          <Contact />
          <About />
        </main>
    </>
  )
}

export default App;
