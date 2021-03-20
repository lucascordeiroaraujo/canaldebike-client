import React from 'react';

import Comments from './style';

import Fade from 'react-reveal/Fade';

const comments: React.FC = () => (
  <Comments>
    <Fade bottom>
      <strong className="title">Escreva um comentário</strong>
    </Fade>

    <div
      className="fb-comments"
      data-href="https://canaldebike.com.br/2021/03/02/capacetes-giro-unem-conforto-e-protecao-em-todas-as-modalidades-do-ciclismo"
      data-width="100%"
      data-numposts="5"
    ></div>
  </Comments>
);

export default comments;