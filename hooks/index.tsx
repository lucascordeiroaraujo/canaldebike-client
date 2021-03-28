import React, { ReactNode } from 'react';

import SiteProvider from './app';

import CategoryProvider from './category';

import HomeProvider from './home';

import PostProvider from './post';

import SearchProvider from './search';

interface IProps {
  children: ReactNode;
}

const AppProvider = ({ children }: IProps) => (
  <SiteProvider>
    <HomeProvider>
      <CategoryProvider>
        <PostProvider>
          <SearchProvider>{children}</SearchProvider>
        </PostProvider>
      </CategoryProvider>
    </HomeProvider>
  </SiteProvider>
);

export default AppProvider;
