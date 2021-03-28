import React from 'react';

import { useSearchPosts } from '~/hooks/search/posts';

import PostsContainer from './style';

import Post from '~/components/global/post';

import Fade from 'react-reveal/Fade';

const posts = () => {
  const { searchPosts } = useSearchPosts();

  return (
    <PostsContainer>
      {searchPosts.map((news, index) => (
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
