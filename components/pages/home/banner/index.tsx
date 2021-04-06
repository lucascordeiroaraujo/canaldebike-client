import React from 'react';

import { useBanners } from '~/hooks/home/banners';

import Banner from './style';

import Slider, { Settings } from 'react-slick';

const banner = () => {
  const { banners } = useBanners();

  if (!banners) return null;

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
        {banners.map(banner => (
          <div className="banner-container" key={banner.id}>
            {banner.link !== '' && (
              <a
                href={banner.link}
                target="_blank"
                rel="noopener noreferrer"
              ></a>
            )}

            <img
              src={banner.image.url}
              alt={banner.title}
              title={banner.title}
              width={banner.image.width}
              height={banner.image.height}
            />
          </div>
        ))}
      </Slider>
    </Banner>
  );
};

export default banner;
