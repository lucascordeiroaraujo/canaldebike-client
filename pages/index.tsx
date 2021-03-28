import React, { useEffect } from 'react';

import { GetStaticPropsResult } from 'next';

import { useRouter } from 'next/router';

import { IAppInfoState, useAppInfo, getAppInfoData } from '~/hooks/app/app';

import { IMenuState, useMenu, getMenuData } from '~/hooks/app/menu';

import { IPostsState, usePosts, getPostsData } from '~/hooks/home/posts';

import { IVideosState, useVideos, getVideosData } from '~/hooks/home/videos';

import Loader from '~/components/global/loader';

import Seo, { ISeoProps } from '~/components/Seo';

import Banner from '~/components/pages/home/banner';

import LatestNews from '~/components/pages/home/latest-news';

import PopularPosts from '~/components/pages/home/popular-posts';

import News from '~/components/pages/home/news';

import Videos from '~/components/pages/home/videos';

import Instagram from '~/components/pages/home/instagram';

interface IHomeProps {
  appInfo: IAppInfoState;
  menuItens: IMenuState[];
  posts: IPostsState[];
  videos: IVideosState[];
  seoInfo: ISeoProps;
}

export default function IndexPage({
  appInfo,
  menuItens,
  posts,
  videos,
  seoInfo,
}: IHomeProps) {
  const { isFallback } = useRouter();

  const { handleSetAppInfo } = useAppInfo();

  const { handleSetMenuData } = useMenu();

  const { handleSetPosts } = usePosts();

  const { handleSetVideos } = useVideos();

  useEffect(() => {
    handleSetAppInfo(appInfo);

    handleSetMenuData(menuItens);

    handleSetPosts(posts);

    handleSetVideos(videos);
  }, [
    handleSetAppInfo,
    handleSetMenuData,
    handleSetPosts,
    handleSetVideos,
    appInfo,
    menuItens,
    posts,
    videos,
  ]);

  if (isFallback) {
    return <Loader />;
  }

  return (
    <>
      <Seo {...seoInfo} />

      <Banner />

      <LatestNews />

      <PopularPosts />

      <News />

      <Videos />

      <Instagram />
    </>
  );
}

export async function getStaticProps(): Promise<
  GetStaticPropsResult<IHomeProps>
> {
  const appInfo = await getAppInfoData();

  return {
    props: {
      appInfo,
      menuItens: await getMenuData(),
      posts: await getPostsData(),
      videos: await getVideosData(),
      seoInfo: {
        seo_title: process.env.SEO_TITLE || '',
        seo_description: process.env.SEO_DESCRIPTION || '',
        seo_image: process.env.SEO_IMAGE || '',
        appUrl: process.env.APP_URL || '',
        twitter: appInfo.twitter || '',
      },
    },
    revalidate: 10,
  };
}
