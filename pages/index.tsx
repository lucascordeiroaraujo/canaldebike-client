import React, { useEffect } from 'react';

import { GetStaticPropsResult } from 'next';

import { useRouter } from 'next/router';

import { IAppInfoState, useAppInfo, getAppInfoData } from '~/hooks/app/app';

import { IMenuState, useMenu, getMenuData } from '~/hooks/app/menu';

import { IBannerState, useBanners, getBannerData } from '~/hooks/home/banners';

import { IPostsState, usePosts, getPostsData } from '~/hooks/home/posts';

import {
  IPopularPostsState,
  usePopularPosts,
  getPopularPostsData,
} from '~/hooks/home/popular-posts';

import { IVideosState, useVideos, getVideosData } from '~/hooks/home/videos';

import {
  IInstagramState,
  useInstagram,
  getInstaMedias,
} from '~/hooks/home/instagram';

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
  banners: IBannerState[];
  posts: IPostsState[];
  popularPosts: IPopularPostsState[];
  videos: IVideosState[];
  instagram: IInstagramState[];
  seoInfo: ISeoProps;
}

export default function IndexPage({
  appInfo,
  menuItens,
  banners,
  posts,
  popularPosts,
  videos,
  instagram,
  seoInfo,
}: IHomeProps) {
  const { isFallback } = useRouter();

  const { handleSetAppInfo } = useAppInfo();

  const { handleSetMenuData } = useMenu();

  const { handleSetBanners } = useBanners();

  const { handleSetPosts } = usePosts();

  const { handleSetPopularPosts } = usePopularPosts();

  const { handleSetVideos } = useVideos();

  const { handleSetInstaMedias } = useInstagram();

  useEffect(() => {
    handleSetAppInfo(appInfo);

    handleSetMenuData(menuItens);

    handleSetBanners(banners);

    handleSetPosts(posts);

    handleSetPopularPosts(popularPosts);

    handleSetVideos(videos);

    handleSetInstaMedias(instagram);
  }, [
    handleSetAppInfo,
    handleSetMenuData,
    handleSetBanners,
    handleSetPosts,
    handleSetPopularPosts,
    handleSetVideos,
    handleSetInstaMedias,
    appInfo,
    menuItens,
    banners,
    posts,
    popularPosts,
    videos,
    instagram,
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
      banners: await getBannerData(),
      posts: await getPostsData(),
      popularPosts: await getPopularPostsData(),
      videos: await getVideosData(),
      instagram: await getInstaMedias(),
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
