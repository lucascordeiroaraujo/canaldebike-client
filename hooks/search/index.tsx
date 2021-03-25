import React from 'react';

import { SearchPostsProvider } from './posts';

interface IProps {
  children: React.ReactNode;
}

const SearchProvider = ({ children }: IProps) => (
  <SearchPostsProvider>{children}</SearchPostsProvider>
);

export default SearchProvider;
