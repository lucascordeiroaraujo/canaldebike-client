import React, { useEffect } from 'react';

import { GetStaticPaths, GetStaticPropsResult } from 'next';

import { useRouter } from 'next/router';

import { IAppInfoState, useAppInfo, getAppInfoData } from '~/hooks/app/app';

import { IMenuState, useMenu, getMenuData } from '~/hooks/app/menu';

import {
  ISearchPostsState,
  useSearchPosts,
  getSearchPostsData,
} from '~/hooks/search/posts';

import Loader from '~/components/global/loader';

import { Container } from '~/styles/global';

import SearchContainer from './style';

import SearchHeader from '~/components/pages/search/header';

import SearchPosts from '~/components/pages/search/posts';

interface ICategoryProps {
  appInfo: IAppInfoState;
  menuItens: IMenuState[];
  searchPosts: ISearchPostsState[];
}

export default function SearchPage({
  appInfo,
  menuItens,
  searchPosts,
}: ICategoryProps) {
  const { isFallback } = useRouter();

  const router = useRouter();

  const { handleSetAppInfo } = useAppInfo();

  const { handleSetMenuData } = useMenu();

  const { handleSetSearchPosts } = useSearchPosts();

  useEffect(() => {
    handleSetAppInfo(appInfo);

    handleSetMenuData(menuItens);

    handleSetSearchPosts(searchPosts);
  }, [
    handleSetAppInfo,
    handleSetMenuData,
    handleSetSearchPosts,
    appInfo,
    menuItens,
    searchPosts,
  ]);

  if (isFallback) {
    return <Loader />;
  }

  return (
    <>
      <Container smallContainer>
        <SearchContainer>
          <SearchHeader searchTerm={router.query.s as string} />

          <SearchPosts />
        </SearchContainer>
      </Container>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { s: 'canal-de-bike' } }],
    fallback: true,
  };
};

interface IStaticProps {
  params: {
    s: string;
  };
}

export async function getStaticProps({
  params,
}: IStaticProps): Promise<GetStaticPropsResult<ICategoryProps>> {
  const { s } = params;

  return {
    props: {
      appInfo: await getAppInfoData(),
      menuItens: await getMenuData(),
      searchPosts: await getSearchPostsData(s),
    },
    revalidate: 10,
  };
}
