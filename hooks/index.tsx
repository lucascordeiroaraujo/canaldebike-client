import React from 'react';

import { AppInfoProvider } from './app';

import { MenuProvider } from './menu';

import { PostsProvider } from './home/posts';

import { VideosProvider } from './home/videos';

import { CurrentCategoryProvider } from './category/category';

import { CatPostsProvider } from './category/catPosts';

import { CurrentPostProvider } from './post/post';

interface IProps {
  children: React.ReactNode;
}

const AppProvider = ({ children }: IProps) => (
  <AppInfoProvider>
    <MenuProvider>
      <PostsProvider>
        <VideosProvider>
          <CurrentCategoryProvider>
            <CatPostsProvider>
              <CurrentPostProvider>{children}</CurrentPostProvider>
            </CatPostsProvider>
          </CurrentCategoryProvider>
        </VideosProvider>
      </PostsProvider>
    </MenuProvider>
  </AppInfoProvider>
);

export default AppProvider;
