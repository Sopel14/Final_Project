import React, { useState } from "react";
import "./gallery.scss";
import fotos from "./fotos";

const Gallery = () => {
  const [slider, setSlider] = useState(0);

  const handleNext = () => {
    setSlider((prev) => prev + 1);
    console.log(slider);
  };

  const handlePrevious = () => {
    setSlider((prev) => prev - 1);
    console.log(slider);
  };
  return (
    <section id="gallery" className="gallery">
      <p style={{ color: "white" }} onClick={handlePrevious}>
        {" "}
        Previous
      </p>
      mapa images

      <p style={{ color: "white" }} onClick={handleNext}>
        Next
      </p>
    </section>
  );
};

export default Gallery;
