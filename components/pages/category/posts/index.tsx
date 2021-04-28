import React from 'react';

import { useCatPosts } from '~/hooks/category/cat-posts';

import PostsContainer from './style';

import Post from '../../../global/post';

import Fade from 'react-reveal/Fade';

import EmptyState from '~/components/global/empty-state';

const posts = () => {
  const { catPosts } = useCatPosts();

  return (
    <PostsContainer>
      {!catPosts.length ? (
        <EmptyState description="Ainda não temos posts nesta categoria 😔" />
      ) : (
        <>
          {catPosts.map(news => (
            <div key={news.id} className="post-container">
              <Fade>
                <Post {...news} />
              </Fade>
            </div>
          ))}
        </>
      )}
    </PostsContainer>
  );
};

export default posts;
