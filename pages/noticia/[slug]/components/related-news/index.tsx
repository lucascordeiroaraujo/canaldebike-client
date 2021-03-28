import React from 'react';

import { useCurrentPost } from '~/hooks/post/post';

import RelatedNews from './style';

import { Container } from '~/styles/global';

import Post from '~/components/post';

import Fade from 'react-reveal/Fade';

const relatedNews: React.FC = () => {
  const { currentPost } = useCurrentPost();

  const { relateds } = currentPost;

  if (!relateds) return null;

  const lessThan3Posts = () => {
    return relateds.length <= 2;
  };

  return (
    <Container>
      <RelatedNews lessThan3Posts={lessThan3Posts()}>
        <h1 className="default-title">Notícias relacionadas</h1>

        {relateds.map((news, index) => (
          <div key={news.id} className="post-container">
            <Fade delay={index * 150}>
              <Post {...news} />
            </Fade>
          </div>
        ))}
      </RelatedNews>
    </Container>
  );
};

export default relatedNews;
