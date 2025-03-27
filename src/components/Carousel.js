import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ onSlideChange }) => {
  const images = [
    "/media/projet/hotelZoologie/zz9.avif",
    "/media/IMG_9358.JPG",
    "/media/IMG_9356.jpg",
  ];

  // Configuration du carousel
  const settings = {
    dots: true,             // Affiche les points de navigation
    infinite: true,         // Carousel en boucle infinie
    speed: 500,             // Vitesse de transition en ms
    slidesToShow: 1,        // Nombre de slides affichés à la fois
    slidesToScroll: 1,      // Nombre de slides à défiler à chaque fois
    autoplay: true,         // Défilement automatique
    autoplaySpeed: 3000,    // Délai entre chaque slide en ms
    beforeChange: (oldIndex, newIndex) => onSlideChange(newIndex),
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div className="carusel-parent" key={index}>
            <img className="carusel-img" src={src} alt={`Slide ${index + 1}`}/>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;