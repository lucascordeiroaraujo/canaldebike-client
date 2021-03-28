import React, { ReactNode } from 'react';

import { CurrentPostProvider } from './post';

interface IProps {
  children: ReactNode;
}

const PostProvider = ({ children }: IProps) => (
  <CurrentPostProvider>{children}</CurrentPostProvider>
);

export default PostProvider;
