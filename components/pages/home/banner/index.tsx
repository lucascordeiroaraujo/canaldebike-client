import React from 'react';

import Banner from './style';

import Slider, { Settings } from 'react-slick';

const banner = () => {
  const sliderSettings: Settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
  };

  return (
    <Banner>
      <Slider {...sliderSettings}>
        <div>
          <img
            src={require('~/public/images/placeholders/loja-do-canal.jpg')}
            alt="Confira nossa loja do canal"
            title="Confira nossa loja do canal"
            width="1920"
            height="612"
          />
        </div>

        <div>
          <img
            src={require('~/public/images/placeholders/loja-do-canal.jpg')}
            alt="Confira nossa loja do canal"
            title="Confira nossa loja do canal"
            width="1920"
            height="612"
          />
        </div>
      </Slider>
    </Banner>
  );
};

export default banner;
