import React from 'react';

import Videos, { Cover, FullVideo, VideosThumbs } from './style';

import { Container } from '~/styles/global';

import Image from 'next/image';

import { FaYoutube } from 'react-icons/fa';

import Fade from 'react-reveal/Fade';

const videos: React.FC = () => {
  return (
    <Videos>
      <Cover>
        <Fade>
          <h1>
            Confira o último
            <br /> vídeo do canal
          </h1>
        </Fade>
      </Cover>

      <Container className="container">
        <FullVideo>
          <iframe
            src={`https://www.youtube.com/embed/RexGXRvk6QY?autoplay=false`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </FullVideo>
      </Container>

      <VideosThumbs>
        <Fade bottom>
          <article className="video-thumb">
            <Image
              src="https://img.youtube.com/vi/YlhEU4IC2hA/mqdefault.jpg"
              alt="CAVALETE PARA MANUTENÇÃO DE BIKE, COMPACTO PRA SE TER EM CASA - BY NOMAD | Canal de Bike"
              title="CAVALETE PARA MANUTENÇÃO DE BIKE, COMPACTO PRA SE TER EM CASA - BY NOMAD | Canal de Bike"
              width="320"
              height="180"
              layout="responsive"
            />

            <div className="icon-container">
              <FaYoutube />
            </div>
          </article>
        </Fade>

        <Fade bottom delay={100}>
          <article className="video-thumb">
            <Image
              src="https://img.youtube.com/vi/9dewRHAwnNc/mqdefault.jpg"
              alt="ENTREVISTA COM ZÉ GABRIEL - MUITA DEDICAÇÃO DEFINE ESSE ATLETA | Canal de Bike"
              title="ENTREVISTA COM ZÉ GABRIEL - MUITA DEDICAÇÃO DEFINE ESSE ATLETA | Canal de Bike"
              width="320"
              height="180"
              layout="responsive"
            />

            <div className="icon-container">
              <FaYoutube />
            </div>
          </article>
        </Fade>

        <Fade bottom delay={200}>
          <article className="video-thumb">
            <Image
              src="https://img.youtube.com/vi/Mrj8Za1Je9E/mqdefault.jpg"
              alt="5 PIORES ERROS NA HORA DE SALTAR COM A BIKE | Canal de Bike"
              title="5 PIORES ERROS NA HORA DE SALTAR COM A BIKE | Canal de Bike"
              width="320"
              height="180"
              layout="responsive"
            />

            <div className="icon-container">
              <FaYoutube />
            </div>
          </article>
        </Fade>

        <Fade bottom delay={300}>
          <article className="video-thumb">
            <Image
              src="https://img.youtube.com/vi/FHkznLwNtSQ/mqdefault.jpg"
              alt="COMO ESCOLHER A SAPATILHA CERTA PARA PEDALAR? | Canal de Bike"
              title="COMO ESCOLHER A SAPATILHA CERTA PARA PEDALAR? | Canal de Bike"
              width="320"
              height="180"
              layout="responsive"
            />

            <div className="icon-container">
              <FaYoutube />
            </div>
          </article>
        </Fade>
      </VideosThumbs>

      <Fade bottom delay={400}>
        <a
          href="#"
          title="Inscreva-se no canal do YouTube"
          target="_blank"
          rel="noopener noreferrer"
          className="youtube-link"
        >
          <FaYoutube /> Ver mais vídeos do meu canal
        </a>
      </Fade>
    </Videos>
  );
};

export default videos;