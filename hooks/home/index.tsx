import React, { ReactNode } from 'react';

import { PostsProvider } from './posts';

import { PopularPostsProvider } from './popular-posts';

import { VideosProvider } from './videos';

interface IProps {
  children: ReactNode;
}

const HomeProvider = ({ children }: IProps) => (
  <PostsProvider>
    <PopularPostsProvider>
      <VideosProvider>{children}</VideosProvider>
    </PopularPostsProvider>
  </PostsProvider>
);

export default HomeProvider;
