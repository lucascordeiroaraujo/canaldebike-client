import React from 'react';

import { GetStaticPropsResult } from 'next';

import { useRouter } from 'next/router';

import { IAppInfoState, useAppInfo, getAppInfoData } from '~/hooks/app';

import { IMenuState, useMenu, getMenuData } from '~/hooks/menu';

import { IPostsState, usePosts, getPostsData } from '~/hooks/home/posts';

import { IVideosState, useVideos, getVideosData } from '~/hooks/home/videos';

import PageHome from './home';

import Loader from '~/components/loader';

interface IHomeProps {
  appInfo: IAppInfoState;
  menuItens: IMenuState[];
  posts: IPostsState[];
  videos: IVideosState[];
}

export default function IndexPage({
  appInfo,
  menuItens,
  posts,
  videos,
}: IHomeProps) {
  const { isFallback } = useRouter();

  const { handleSetAppInfo } = useAppInfo();

  const { handleSetMenuData } = useMenu();

  const { handleSetPosts } = usePosts();

  const { handleSetVideos } = useVideos();

  React.useEffect(() => {
    handleSetAppInfo(appInfo);

    handleSetMenuData(menuItens);

    handleSetPosts(posts);

    handleSetVideos(videos);
  }, [
    handleSetAppInfo,
    handleSetMenuData,
    handleSetPosts,
    handleSetVideos,
    posts,
  ]);

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
      posts: await getPostsData(),
      videos: await getVideosData(),
    },
    revalidate: 10,
  };
}
