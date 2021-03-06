import React, { ReactNode } from 'react';

import { CurrentCategoryProvider } from './category';

import { CatPostsProvider } from './cat-posts';

interface IProps {
  children: ReactNode;
}

const CategoryProvider = ({ children }: IProps) => (
  <CurrentCategoryProvider>
    <CatPostsProvider>{children}</CatPostsProvider>
  </CurrentCategoryProvider>
);

export default CategoryProvider;
