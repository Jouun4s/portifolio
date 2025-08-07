import React, { useRef } from 'react';
import './Services.css';

import img1 from '../assets/Gabinete Pc.png';
import img2 from '../assets/Cadeira.png';
import img3 from '../assets/Churrasqueira.png';
import img4 from '../assets/Pistola de ar quente.png';

const services = [
  { id: 1, title: 'Pistola de Ar Quente', image: img4 },
  { id: 2, title: 'Cadeira Autoregulável', image: img2 },
  { id: 3, title: 'Churrasqueira Portátil', image: img3 },
  { id: 4, title: 'Gabinete Gamer', image: img1 },
  { id: 4, title: 'Gabinete Gamer', image: img1 },
  { id: 4, title: 'Gabinete Gamer', image: img1 },
  { id: 4, title: 'Gabinete Gamer', image: img1 },
  { id: 4, title: 'Gabinete Gamer', image: img1 },
];

export default function Services() {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    const scrollAmount = 350;
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="services-section">
      <div className="container">
        <div className="services-header">
          <h2><span>Portfólio</span> | Exemplos</h2>
          <p>Aqui estão alguns exemplos do que posso oferecer para sua empresa.</p>
        </div>

        <div className="carousel-controls">
          <button onClick={() => scroll('left')} className="carousel-btn">←</button>
          <button onClick={() => scroll('right')} className="carousel-btn">→</button>
        </div>

        <div className="services-carousel" ref={carouselRef}>
          {services.map(service => (
            <div className="service-card" key={service.id}>
              <img src={service.image} alt={service.title} />
              <h3>{service.title}</h3>
              <button>→</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
