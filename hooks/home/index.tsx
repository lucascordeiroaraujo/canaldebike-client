import React, { ReactNode } from 'react';

import { PostsProvider } from './posts';

import { PopularPostsProvider } from './popular-posts';

import { VideosProvider } from './videos';

import { InstagramProvider } from './instagram';

interface IProps {
  children: ReactNode;
}

const HomeProvider = ({ children }: IProps) => (
  <PostsProvider>
    <PopularPostsProvider>
      <VideosProvider>
        <InstagramProvider>{children}</InstagramProvider>
      </VideosProvider>
    </PopularPostsProvider>
  </PostsProvider>
);

export default HomeProvider;
