import React from 'react';

import LatestNews, {
  SliderContainer,
  News,
  NewsImage,
  NewsDescription,
  SliderControls,
} from './style';

import { Container } from '~/styles/global';

import Link from 'next/link';

import Slider, { Settings } from 'react-slick';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const latestNews: React.FC = () => {
  const sliderSettings: Settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
  };

  const sliderRef = React.useRef<Slider | null>(null);

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

  return (
    <Container smallContainer>
      <LatestNews>
        <h1 className="default-title">Últimas notícias</h1>

        <p className="latest-news-description">
          Confira as últimas novidades que aconteceram no mundo da bike.
        </p>

        <SliderContainer>
          <Slider ref={sliderRef} {...sliderSettings}>
            {[0, 1, 2, 3].map(index => (
              <div key={index} className="news-slider-container">
                <News>
                  <NewsImage>
                    <img
                      src="https://canaldebike.com.br/img/uploaded/main_dQ2h3M1614708635.jpeg"
                      alt=""
                      title=""
                      width="980"
                      height="550"
                    />

                    <SliderControls>
                      <button onClick={() => sliderPrevNext('next')}>
                        <FaChevronRight />
                      </button>

                      <button onClick={() => sliderPrevNext('prev')}>
                        <FaChevronLeft />
                      </button>
                    </SliderControls>
                  </NewsImage>

                  <NewsDescription>
                    <div className="news-description">
                      <div className="news-description-categories">
                        <Link href={`/tag/#`}>
                          <a title="Confira a matéria completa">Capacetes</a>
                        </Link>

                        <Link href={`/tag/#`}>
                          <a title="Confira a matéria completa">Segurança</a>
                        </Link>

                        <Link href={`/tag/#`}>
                          <a title="Confira a matéria completa">Proteção</a>
                        </Link>

                        <Link href={`/tag/#`}>
                          <a title="Confira a matéria completa">Dicas</a>
                        </Link>
                      </div>

                      <span className="news-description-date">
                        criado em 02/03/2021
                      </span>

                      <h1 className="news-description-title">
                        Capacetes Giro unem conforto e proteção em todas as
                        modalidades do ciclismo {index}.
                      </h1>

                      <span className="news-description-separator"></span>

                      <p className="news-description-resume">
                        Foi com o desejo de criar o capacete ideal que Jim
                        Gentes criou, há mais de 30 anos, O Giro Prolight, o
                        primeiro capacete moderno, ventilado e que parecia não
                        pesar nada. Desde então a Giro é uma marca conhecida
                        pela maioria dos ciclistas, principalmente pela sua
                        ampla linha de capacetes.
                      </p>

                      <Link href="/noticia/jaqueline-mourao-entra-para-o-time-da-trek">
                        <a
                          className="news-description-call-to-action"
                          title="Confira a matéria completa"
                        >
                          Ver notícia
                        </a>
                      </Link>
                    </div>
                  </NewsDescription>
                </News>
              </div>
            ))}
          </Slider>
        </SliderContainer>
      </LatestNews>
    </Container>
  );
};

export default latestNews;
