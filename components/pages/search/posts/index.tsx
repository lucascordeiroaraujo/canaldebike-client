import React from 'react';

import { useSearchPosts } from '~/hooks/search/posts';

import PostsContainer from './style';

import Post from '~/components/global/post';

import Fade from 'react-reveal/Fade';

import EmptyState from '~/components/global/empty-state';

const posts = () => {
  const { searchPosts } = useSearchPosts();

  return (
    <PostsContainer>
      {!searchPosts.length ? (
        <EmptyState description="Não encontramos nenhuma notícia com o termo digitado 😔" />
      ) : (
        <>
          {searchPosts.map(news => (
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
