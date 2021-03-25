import React from 'react';

import { CurrentPostProvider } from './post';

interface IProps {
  children: React.ReactNode;
}

const PostProvider = ({ children }: IProps) => (
  <CurrentPostProvider>{children}</CurrentPostProvider>
);

export default PostProvider;
