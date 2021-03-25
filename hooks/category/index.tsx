import React from 'react';

import { CurrentCategoryProvider } from './category';

import { CatPostsProvider } from './catPosts';

interface IProps {
  children: React.ReactNode;
}

const CategoryProvider = ({ children }: IProps) => (
  <CurrentCategoryProvider>
    <CatPostsProvider>{children}</CatPostsProvider>
  </CurrentCategoryProvider>
);

export default CategoryProvider;
