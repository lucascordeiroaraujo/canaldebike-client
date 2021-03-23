import React from 'react';

import { useCatPosts } from '~/hooks/category/catPosts';

import PostsContainer from './style';

import Post from '~/components/post';

import Fade from 'react-reveal/Fade';

const posts: React.FC = () => {
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
