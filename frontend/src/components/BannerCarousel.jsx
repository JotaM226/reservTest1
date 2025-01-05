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
    { id: 1, image: 'https://via.placeholder.com/1200x400?text=Banner+1', alt: 'Banner 1' },
    { id: 2, image: 'https://via.placeholder.com/1200x400?text=Banner+2', alt: 'Banner 2' },
    { id: 3, image: 'https://via.placeholder.com/1200x400?text=Banner+3', alt: 'Banner 3' },
  ];

  return (
    <div className="w-full mb-8">
      <Slider {...settings}>
        {banners.map((banner) => (
          <div key={banner.id}>
            <img
              src={banner.image}
              alt={banner.alt}
              className="w-full h-auto"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerCarousel;
