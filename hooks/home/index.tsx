import React, { ReactNode } from 'react';

import { PostsProvider } from './posts';

import { VideosProvider } from './videos';

interface IProps {
  children: ReactNode;
}

const HomeProvider = ({ children }: IProps) => (
  <PostsProvider>
    <VideosProvider>{children}</VideosProvider>
  </PostsProvider>
);

export default HomeProvider;
