import React, { ReactNode } from 'react';

import { SearchPostsProvider } from './posts';

interface IProps {
  children: ReactNode;
}

const SearchProvider = ({ children }: IProps) => (
  <SearchPostsProvider>{children}</SearchPostsProvider>
);

export default SearchProvider;
