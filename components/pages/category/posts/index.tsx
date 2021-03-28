import React from 'react';

import { useCatPosts } from '~/hooks/category/cat-posts';

import PostsContainer from './style';

import Post from '../../../global/post';

import Fade from 'react-reveal/Fade';

const posts = () => {
  const { catPosts } = useCatPosts();

  return (
    <PostsContainer>
      {catPosts.map((news, index) => (
        <div key={news.id} className="post-container">
          <Fade delay={index * 150}>
            <Post {...news} />
          </Fade>
        </div>
      ))}
    </PostsContainer>
  );
};

export default posts;
