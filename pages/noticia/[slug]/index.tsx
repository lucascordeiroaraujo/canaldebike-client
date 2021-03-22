import React from 'react';

import { GetStaticPaths, GetStaticPropsResult } from 'next';

import { useRouter } from 'next/router';

import { IAppInfoState, useAppInfo, getAppInfoData } from '~/hooks/app';

import { IMenuState, useMenu, getMenuData } from '~/hooks/menu';

import {
  ICurrentPostState,
  useCurrentPost,
  getCurrentPostData,
} from '~/hooks/post';

import { Container } from '~/styles/global';

import News, { PostContainer, SidebarContainer } from './style';

import Loader from '~/components/loader';

import Post from './components/post';

import Comments from './components/comments';

import RelatedNews from './components/related-news';

import Sidebar from './components/sidebar';

import { FaLongArrowAltLeft } from 'react-icons/fa';

import Link from 'next/link';

import Fade from 'react-reveal/Fade';

interface IPostProps {
  appInfo: IAppInfoState;
  menuItens: IMenuState[];
  post: ICurrentPostState;
}

export default function IndexPage({ appInfo, menuItens, post }: IPostProps) {
  const { isFallback } = useRouter();

  const { handleSetAppInfo } = useAppInfo();

  const { handleSetMenuData } = useMenu();

  const { handleSetCurrentPost } = useCurrentPost();

  React.useEffect(() => {
    handleSetAppInfo(appInfo);

    handleSetMenuData(menuItens);

    handleSetCurrentPost(post);
  }, [handleSetAppInfo, handleSetMenuData, handleSetCurrentPost]);

  const mountPostUrl = `${process.env.APP_URL}/noticia/${post.slug}`;

  if (isFallback) {
    return <Loader />;
  }

  return (
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
          <Post postUrl={mountPostUrl} />

          <Comments postUrl={mountPostUrl} />
        </PostContainer>

        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>

        <RelatedNews />
      </News>
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`${process.env.API_URL}/cdb/posts-slug`);

  const result = await response.json();

  const paths = result.map((slug: string) => {
    return { params: { slug } };
  });

  return {
    paths,
    fallback: true,
  };
};

interface IStaticProps {
  params: {
    slug: string;
  };
}

export async function getStaticProps({
  params,
}: IStaticProps): Promise<GetStaticPropsResult<IPostProps>> {
  const { slug } = params;

  return {
    props: {
      appInfo: await getAppInfoData(),
      menuItens: await getMenuData(),
      post: await getCurrentPostData(slug),
    },
    revalidate: 10,
  };
}
