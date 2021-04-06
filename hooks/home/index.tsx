import React, { ReactNode } from 'react';

import { PostsProvider } from './posts';

import { BannersProvider } from './banners';

import { PopularPostsProvider } from './popular-posts';

import { VideosProvider } from './videos';

import { InstagramProvider } from './instagram';

interface IProps {
  children: ReactNode;
}

const HomeProvider = ({ children }: IProps) => (
  <BannersProvider>
    <PostsProvider>
      <PopularPostsProvider>
        <VideosProvider>
          <InstagramProvider>{children}</InstagramProvider>
        </VideosProvider>
      </PopularPostsProvider>
    </PostsProvider>
  </BannersProvider>
);

export default HomeProvider;
