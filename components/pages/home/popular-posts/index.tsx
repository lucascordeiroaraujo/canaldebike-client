import React, { useRef } from 'react';

import { usePopularPosts } from '~/hooks/home/popular-posts';

import PopularPosts, { Cover } from './style';

import { Container } from '~/styles/global';

import Slider, { Settings } from 'react-slick';

import Post from '~/components/global/post';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import Fade from 'react-reveal/Fade';

const popularPosts = () => {
  const { popularPosts } = usePopularPosts();

  if (!popularPosts) return null;

  const sliderSettings: Settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const sliderRef = useRef<Slider | null>(null);

  const sliderPrevNext = (direction: 'prev' | 'next') => {
    const sliderElement = sliderRef.current;

    if (sliderElement) {
      if (direction === 'prev') {
        sliderRef.current?.slickPrev();
      } else if (direction === 'next') {
        sliderRef.current?.slickNext();
      }
    }
  };

  const showSlideControls = () => {
    return popularPosts && popularPosts.length > 3;
  };

  return (
    <PopularPosts>
      <Cover />

      <Container className="popular-posts">
        <Fade bottom>
          <h1 className="popular-posts-title default-title">
            Os mais populares
          </h1>
        </Fade>

        <div className="popular-posts-container">
          <Slider ref={sliderRef} {...sliderSettings}>
            {popularPosts.map(news => (
              <Post key={news.id} {...news} nextImage={false} slider={true} />
            ))}
          </Slider>
        </div>

        {showSlideControls() && (
          <div className="popular-posts-slider-controls">
            <Fade left>
              <button onClick={() => sliderPrevNext('prev')}>
                <FaChevronLeft />
              </button>
            </Fade>

            <Fade right>
              <button onClick={() => sliderPrevNext('next')}>
                <FaChevronRight />
              </button>
            </Fade>
          </div>
        )}
      </Container>
    </PopularPosts>
  );
};

export default popularPosts;
