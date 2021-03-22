import React from 'react';

import { GetStaticPropsResult } from 'next';

import { useRouter } from 'next/router';

import { IAppInfoState, useAppInfo, getAppInfoData } from '~/hooks/app';

import { IMenuState, useMenu, getMenuData } from '~/hooks/menu';

import PageHome from './home';

import Loader from '~/components/loader';

interface IHomeProps {
  appInfo: IAppInfoState;
  menuItens: IMenuState[];
}

export default function IndexPage({ appInfo, menuItens }: IHomeProps) {
  const { isFallback } = useRouter();

  const { handleSetAppInfo } = useAppInfo();

  const { handleSetMenuData } = useMenu();

  React.useEffect(() => {
    handleSetAppInfo(appInfo);

    handleSetMenuData(menuItens);
  }, [handleSetAppInfo, handleSetMenuData]);

  if (isFallback) {
    return <Loader />;
  }

  return (
    <>
      <PageHome />
    </>
  );
}

export async function getStaticProps(): Promise<
  GetStaticPropsResult<IHomeProps>
> {
  return {
    props: {
      appInfo: await getAppInfoData(),
      menuItens: await getMenuData(),
    },
    revalidate: 10,
  };
}
