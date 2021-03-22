import React from 'react';

import { AppInfoProvider } from './app';

import { MenuProvider } from './menu';

import { CurrentCategoryProvider } from './category';

import { CatPostsProvider } from './catPosts';

import { CurrentPostProvider } from './post';

interface IProps {
  children: React.ReactNode;
}

const AppProvider = ({ children }: IProps) => (
  <AppInfoProvider>
    <MenuProvider>
      <CurrentCategoryProvider>
        <CatPostsProvider>
          <CurrentPostProvider>{children}</CurrentPostProvider>
        </CatPostsProvider>
      </CurrentCategoryProvider>
    </MenuProvider>
  </AppInfoProvider>
);

export default AppProvider;
