import React from 'react';
import ILHero1 from '../../assets/images/hero1.webp';
import ILHero2 from '../../assets/images/hero2.webp';
import ILHero3 from '../../assets/images/hero3.webp';
import ILHero4 from '../../assets/images/hero4.webp';

export default function Hero() {
  const imageList = [ILHero1, ILHero2, ILHero3, ILHero4];

  return (
    <section>
      <div className="container-hero">
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-ride="carousel"
          data-touch="false"
          style={{ height: '100%' }}
        >
          <div className="carousel-inner">
            {imageList.map((image, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? 'active' : ''}`}
                data-interval="5000"
              >
                <img
                  src={image}
                  className="d-block w-100"
                  style={{
                    objectFit: 'cover',
                    height: '100vh',
                  }}
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
