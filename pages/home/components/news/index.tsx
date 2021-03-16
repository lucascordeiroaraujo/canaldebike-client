import React from 'react';

import News, { ArticlesContainer } from './style';

import { Container } from '~/styles/global';

import Post from '~/components/post';

const news: React.FC = () => {
  const [newsList, _] = React.useState([
    {
      id: '237',
      slug: 'jaqueline-mourao-entra-para-o-time-da-trek',
      image: 'https://picsum.photos/id/237/430/260',
      tags: [
        {
          title: 'Jaqueline Mourão',
          slug: '#',
        },
        {
          title: 'Trek Bikes',
          slug: '#',
        },
      ],
      title: 'Jaqueline Mourão entra para o time da Trek',
      date: '05/03/2021',
      description:
        'Jaqueline Mourão e a Trek Bikes anunciaram hoje através das redes sociais a nova parceria da atleta com a marca.',
    },
    {
      id: '238',
      slug:
        'canyon-avisa-consumidores-e-equipe-que-parem-de-andar-com-a-nova-eeroad-apos-incidente-com-guidao-de-van-der-poel',
      image: 'https://picsum.photos/id/238/430/260',
      tags: [
        {
          title: 'Canyon 2021',
          slug: '#',
        },
        {
          title: 'Aeroad',
          slug: '#',
        },
        {
          title: 'Van der poel',
          slug: '#',
        },
      ],
      date: '05/03/2021',
      title:
        'Canyon avisa consumidores e equipe que parem de andar com a nova Aeroad após incidente com guidão de Van der Poel',
      description:
        'A marca alemã de bicicletas Canyon pediu aos proprietários de suas novas Aeroad CF SLX e CF aero road bikes que parassem de usá-las após o incidente de terça-feira em Le Samyn, quando uma parte do guidão de Mathieu van der...',
    },
    {
      id: '239',
      slug: 'sram-perde-batalha-de-patentes-com-a-fox-pela-coroa-x-sync',
      image: 'https://picsum.photos/id/239/430/260',
      tags: [
        {
          title: ' fox x-sync',
          slug: '#',
        },
        {
          title: 'x-sync',
          slug: '#',
        },
      ],
      date: '04/03/2021',
      title: 'SRAM perde batalha de patentes com a Fox pela coroa X-Sync',
      description:
        'Uma decisão do US Patent and Trademark Office foi contra a SRAM, depois que a Fox Factory contestou as reinvidicações de patentes relacionadas ao design da coroa X-Sync da SRAM.',
    },
    {
      id: '240',
      slug: 'soul-cycles-lanca-a-vesuvio-e-volcano-edicao-limitada-rudy',
      image: 'https://picsum.photos/id/240/430/260',
      tags: [
        {
          title: ' SOUL CYCLES',
          slug: '#',
        },
        {
          title: 'ciclismo',
          slug: '#',
        },
      ],
      date: '03/03/2021',
      title: 'Soul Cycles lança a Vesuvio e Volcano Edição Limitada Rudy',
      description:
        'Para celebrar a grande parceria com a marca italiana Rudy Project, a Soul Cycles lança a Vesuvio e Volcano Edição limitada Rudy. Lendas do ciclismo e muitos outros esportes representam a Rudy Project, usando capacetes e óculos de sol da marca que é lider.',
    },
  ]);

  return (
    <News>
      <Container smallContainer>
        <h1 className="default-title">
          Tudo sobre o<br /> mundo da bike
        </h1>

        <ArticlesContainer>
          {newsList.map(news => (
            <Post {...news} />
          ))}
        </ArticlesContainer>
      </Container>
    </News>
  );
};

export default news;
