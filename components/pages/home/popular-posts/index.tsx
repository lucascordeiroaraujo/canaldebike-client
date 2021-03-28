import React, { useState, useRef } from 'react';

import PopularPosts, { Cover } from './style';

import { Container } from '~/styles/global';

import Slider, { Settings } from 'react-slick';

import Post from '~/components/global/post';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import Fade from 'react-reveal/Fade';

const popularPosts = () => {
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

  const [newsList, _] = useState([
    {
      id: '237',
      slug: 'jaqueline-mourao-entra-para-o-time-da-trek',
      image: {
        url: 'https://picsum.photos/id/237/430/260',
        width: '460',
        height: '280',
      },
      categories: [
        {
          id: '1',
          title: 'Jaqueline Mourão',
          slug: '#',
        },
        {
          id: '2',
          title: 'Trek Bikes',
          slug: '#',
        },
      ],
      title: 'Jaqueline Mourão entra para o time da Trek',
      date: '05/03/2021',
      resume:
        'Jaqueline Mourão e a Trek Bikes anunciaram hoje através das redes sociais a nova parceria da atleta com a marca.',
    },
    {
      id: '238',
      slug:
        'canyon-avisa-consumidores-e-equipe-que-parem-de-andar-com-a-nova-eeroad-apos-incidente-com-guidao-de-van-der-poel',
      image: {
        url: 'https://picsum.photos/id/238/430/260',
        width: '460',
        height: '280',
      },
      categories: [
        {
          id: '1',
          title: 'Canyon 2021',
          slug: '#',
        },
        {
          id: '2',
          title: 'Aeroad',
          slug: '#',
        },
        {
          id: '3',
          title: 'Van der poel',
          slug: '#',
        },
      ],
      date: '05/03/2021',
      title:
        'Canyon avisa consumidores e equipe que parem de andar com a nova Aeroad após incidente com guidão de Van der Poel',
      resume:
        'A marca alemã de bicicletas Canyon pediu aos proprietários de suas novas Aeroad CF SLX e CF aero road bikes que parassem de usá-las após o incidente de terça-feira em Le Samyn, quando uma parte do guidão de Mathieu van der...',
    },
    {
      id: '239',
      slug: 'sram-perde-batalha-de-patentes-com-a-fox-pela-coroa-x-sync',
      image: {
        url: 'https://picsum.photos/id/239/430/260',
        width: '460',
        height: '280',
      },
      categories: [
        {
          id: '1',
          title: ' fox x-sync',
          slug: '#',
        },
        {
          id: '2',
          title: 'x-sync',
          slug: '#',
        },
      ],
      date: '04/03/2021',
      title: 'SRAM perde batalha de patentes com a Fox pela coroa X-Sync',
      resume:
        'Uma decisão do US Patent and Trademark Office foi contra a SRAM, depois que a Fox Factory contestou as reinvidicações de patentes relacionadas ao design da coroa X-Sync da SRAM.',
    },
    {
      id: '240',
      slug: 'soul-cycles-lanca-a-vesuvio-e-volcano-edicao-limitada-rudy',
      image: {
        url: 'https://picsum.photos/id/240/430/260',
        width: '460',
        height: '280',
      },
      categories: [
        {
          id: '1',
          title: ' SOUL CYCLES',
          slug: '#',
        },
        {
          id: '2',
          title: 'ciclismo',
          slug: '#',
        },
      ],
      date: '03/03/2021',
      title: 'Soul Cycles lança a Vesuvio e Volcano Edição Limitada Rudy',
      resume:
        'Para celebrar a grande parceria com a marca italiana Rudy Project, a Soul Cycles lança a Vesuvio e Volcano Edição limitada Rudy. Lendas do ciclismo e muitos outros esportes representam a Rudy Project, usando capacetes e óculos de sol da marca que é lider.',
    },
  ]);

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
            {newsList.map(news => (
              <Post key={news.id} {...news} nextImage={false} slider={true} />
            ))}
          </Slider>
        </div>

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
      </Container>
    </PopularPosts>
  );
};

export default popularPosts;
