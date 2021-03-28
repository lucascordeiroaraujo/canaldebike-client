import React, { ReactNode } from 'react';

import { AppInfoProvider } from './app';

import { MenuProvider } from './menu';

interface IProps {
  children: ReactNode;
}

const SiteProvider = ({ children }: IProps) => (
  <AppInfoProvider>
    <MenuProvider>{children}</MenuProvider>
  </AppInfoProvider>
);

export default SiteProvider;
