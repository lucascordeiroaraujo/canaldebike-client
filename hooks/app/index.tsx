import React from 'react';

import { AppInfoProvider } from './app';

import { MenuProvider } from './menu';

interface IProps {
  children: React.ReactNode;
}

const SiteProvider = ({ children }: IProps) => (
  <AppInfoProvider>
    <MenuProvider>{children}</MenuProvider>
  </AppInfoProvider>
);

export default SiteProvider;
