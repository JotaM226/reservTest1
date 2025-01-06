import React from 'react';
import Slider from 'react-slick';
import CustomArrow from './CustomArrow';

const BannerCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <CustomArrow direction="right" />,
    prevArrow: <CustomArrow direction="left" />,
  };

  const banners = [
    {
      id: 1,
      desktopImage: 'https://via.placeholder.com/1200x400?text=Banner+1',
      mobileImage: 'https://via.placeholder.com/300x400?text=Banner+3+Mobile',
      alt: 'Banner 1',
    },
    {
      id: 2,
      desktopImage: 'https://via.placeholder.com/1200x400?text=Banner+2',
      mobileImage: 'https://via.placeholder.com/300x400?text=Banner+3+Mobile',
      alt: 'Banner 2',
    },
    {
      id: 3,
      desktopImage: 'https://via.placeholder.com/1200x400?text=Banner+3',
      mobileImage: 'https://via.placeholder.com/300x400?text=Banner+3+Mobile',
      alt: 'Banner 3',
    },
  ];

  return (
    <div className="w-full mb-8">
      <Slider {...settings}>
        {banners.map((banner) => (
          <div
            key={banner.id}
            className="relative w-full"
            style={{
              height: '400px', // Altura estándar para pantallas grandes
              '@media (max-width: 768px)': {
                height: '50vh', // Altura dinámica para pantallas pequeñas
              },
            }}
          >
            <picture>
              {/* Imagen para móviles */}
              <source media="(max-width: 768px)" srcSet={banner.mobileImage} />
              {/* Imagen para escritorio */}
              <img
                src={banner.desktopImage}
                alt={banner.alt}
                className="w-full h-full object-cover"
              />
            </picture>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerCarousel;
