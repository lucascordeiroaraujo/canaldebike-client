import React from 'react';

import Comments from './style';

import Fade from 'react-reveal/Fade';

interface IComments {
  postUrl: string;
}

const comments = ({ postUrl }: IComments) => (
  <Comments>
    <Fade bottom>
      <strong className="title">Escreva um comentário</strong>
    </Fade>

    <div
      className="fb-comments"
      data-href={postUrl}
      data-width="100%"
      data-numposts="5"
    ></div>
  </Comments>
);

export default comments;
