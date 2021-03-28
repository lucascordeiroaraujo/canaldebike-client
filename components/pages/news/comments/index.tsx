import React from 'react';

import { useCurrentPost } from '../../../../hooks/post/post';

import Comments from './style';

import Fade from 'react-reveal/Fade';

const comments = () => {
  const { currentPost } = useCurrentPost();

  const postUrl = `${process.env.APP_URL}/noticia/${currentPost.slug}`;

  return (
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
};

export default comments;
