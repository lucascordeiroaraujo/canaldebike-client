import React from 'react';

import Comments from './style';

import Fade from 'react-reveal/Fade';

interface IProps {
  postUrl: string;
}

const comments = ({ postUrl }: IProps) => (
  <Comments>
    <Fade bottom>
      <strong className="title">Escreva um comentário</strong>
    </Fade>

    <div
      className="fb-comments"
      data-href={`https://developers.facebook.com/docs/plugins/comments#configurator`}
      data-width="100%"
      data-numposts="5"
    ></div>
  </Comments>
);

export default comments;
