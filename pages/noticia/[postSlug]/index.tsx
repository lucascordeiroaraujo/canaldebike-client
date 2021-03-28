import React, { useEffect } from 'react';

import { GetStaticPaths, GetStaticPropsResult } from 'next';

import { useRouter } from 'next/router';

import { IAppInfoState, useAppInfo, getAppInfoData } from '~/hooks/app/app';

import { IMenuState, useMenu, getMenuData } from '~/hooks/app/menu';

import {
  ICurrentPostState,
  useCurrentPost,
  getCurrentPostData,
} from '~/hooks/post/post';

import { Container } from '~/styles/global';

import News, { PostContainer, SidebarContainer } from './style';

import Loader from '~/components/global/loader';

import Seo, { ISeoProps } from '~/components/Seo';

import Post from '~/components/pages/news/post';

import Comments from '~/components/pages/news/comments';

import Sidebar from '~/components/pages/news/sidebar';

import RelatedNews from '~/components/pages/news/related-news';

import { FaLongArrowAltLeft } from 'react-icons/fa';

import Link from 'next/link';

import Fade from 'react-reveal/Fade';

interface IPostProps {
  appInfo: IAppInfoState;
  menuItens: IMenuState[];
  post: ICurrentPostState;
  postUrl: string;
  seoInfo: ISeoProps;
}

export default function IndexPage({
  appInfo,
  menuItens,
  post,
  postUrl,
  seoInfo,
}: IPostProps) {
  const { isFallback } = useRouter();

  const { handleSetAppInfo } = useAppInfo();

  const { handleSetMenuData } = useMenu();

  const { handleSetCurrentPost } = useCurrentPost();

  useEffect(() => {
    handleSetAppInfo(appInfo);

    handleSetMenuData(menuItens);

    handleSetCurrentPost(post);
  }, [
    handleSetAppInfo,
    handleSetMenuData,
    handleSetCurrentPost,
    appInfo,
    menuItens,
    post,
  ]);

  const hasRelatedNews = () => {
    return post && post.relateds && post.relateds.length;
  };

  if (isFallback) {
    return <Loader />;
  }

  return (
    <>
      <Seo {...seoInfo} />

      <Container smallContainer>
        <News>
          <Fade>
            <div className="back-to-home-link-container">
              <Link href="/">
                <a title="Voltar para a página inicial">
                  <FaLongArrowAltLeft />

                  <span>Voltar para o ínicio</span>
                </a>
              </Link>
            </div>
          </Fade>

          <PostContainer>
            <Post postUrl={postUrl} />

            <Comments postUrl={postUrl} />
          </PostContainer>

          <SidebarContainer>
            <Sidebar />
          </SidebarContainer>

          {hasRelatedNews() && <RelatedNews />}
        </News>
      </Container>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`${process.env.API_URL}/cdb/posts-slug`);

  const result = await response.json();

  const paths = result.map((postSlug2: string) => {
    return { params: { postSlug: postSlug2 } };
  });

  return {
    paths,
    fallback: true,
  };
};

interface IStaticProps {
  params: {
    postSlug: string;
  };
}

export async function getStaticProps({
  params,
}: IStaticProps): Promise<GetStaticPropsResult<IPostProps>> {
  const { postSlug } = params;

  const post = await getCurrentPostData(postSlug);

  const appInfo = await getAppInfoData();

  interface ISeoProps {
    propName: string;
    defaultPropName: string;
  }

  const seoProp = ({ propName, defaultPropName }: ISeoProps) => {
    return post && post.seo && post.seo[propName]
      ? post.seo[propName]
      : process.env[defaultPropName];
  };

  fetch(`${process.env.API_URL}/cdb/post-views`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ postSlug: post.slug || '' }),
    redirect: 'follow',
  });

  return {
    props: {
      appInfo,
      menuItens: await getMenuData(),
      post,
      postUrl: `${process.env.APP_URL}/noticia/${post.slug}`,
      seoInfo: {
        seo_title: seoProp({ propName: 'title', defaultPropName: 'SEO_TITLE' }),
        seo_description: seoProp({
          propName: 'description',
          defaultPropName: 'SEO_DESCRIPTION',
        }),
        seo_image: seoProp({ propName: 'image', defaultPropName: 'SEO_IMAGE' }),
        appUrl: process.env.APP_URL || '',
        twitter: appInfo.twitter || '',
      },
    },
    revalidate: 10,
  };
}
