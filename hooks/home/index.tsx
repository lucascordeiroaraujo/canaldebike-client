import React from 'react';

import { PostsProvider } from './posts';

import { VideosProvider } from './videos';

interface IProps {
  children: React.ReactNode;
}

const HomeProvider = ({ children }: IProps) => (
  <PostsProvider>
    <VideosProvider>{children}</VideosProvider>
  </PostsProvider>
);

export default HomeProvider;
