import React, { useEffect } from 'react';

import { GetStaticPaths, GetStaticPropsResult } from 'next';

import { useRouter } from 'next/router';

import { IAppInfoState, useAppInfo, getAppInfoData } from '~/hooks/app/app';

import { IMenuState, useMenu, getMenuData } from '~/hooks/app/menu';

import {
  ICurrentCategoryState,
  useCurrentCategory,
  getCurrentCategoryData,
} from '~/hooks/category/category';

import {
  ICatPostsState,
  useCatPosts,
  getPostsData,
} from '~/hooks/category/catPosts';

import Loader from '~/components/global/loader';

import { Container } from '~/styles/global';

import CategoryContainer from './style';

import CategoryHeader from '~/components/pages/category/header';

import CategoryPosts from '~/components/pages/category/posts';

import CategoryPagination from '~/components/global/pagination';

interface ICategoryProps {
  appInfo: IAppInfoState;
  menuItens: IMenuState[];
  category: ICurrentCategoryState;
  posts: ICatPostsState[];
}

export default function SubCategoryPage({
  appInfo,
  menuItens,
  category,
  posts,
}: ICategoryProps) {
  const { isFallback } = useRouter();

  const { handleSetAppInfo } = useAppInfo();

  const { handleSetMenuData } = useMenu();

  const { handleSetCurrentCategory } = useCurrentCategory();

  const { handleSetCatPosts } = useCatPosts();

  useEffect(() => {
    handleSetAppInfo(appInfo);

    handleSetMenuData(menuItens);

    handleSetCurrentCategory(category);

    handleSetCatPosts(posts);
  }, [
    handleSetAppInfo,
    handleSetMenuData,
    handleSetCurrentCategory,
    handleSetCatPosts,
    appInfo,
    menuItens,
    category,
    posts,
  ]);

  if (isFallback) {
    return <Loader />;
  }

  return (
    <>
      <Container smallContainer>
        <CategoryContainer>
          <CategoryHeader />

          <CategoryPosts />

          <CategoryPagination />
        </CategoryContainer>
      </Container>
    </>
  );
}

interface ICategoriesList {
  parentSlug: string;
  id: Number;
  slug: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`${process.env.API_URL}/cdb/sub-categories/mtb`);

  const result = await response.json();

  const paths = result.map((category: ICategoriesList) => {
    return {
      params: {
        categorySlug: category.parentSlug,
        subcategorySlug: category.slug,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

interface IStaticProps {
  params: {
    subcategorySlug: string;
  };
}

export async function getStaticProps({
  params,
}: IStaticProps): Promise<GetStaticPropsResult<ICategoryProps>> {
  const { subcategorySlug } = params;

  return {
    props: {
      appInfo: await getAppInfoData(),
      menuItens: await getMenuData(),
      category: await getCurrentCategoryData(subcategorySlug),
      posts: await getPostsData(subcategorySlug),
    },
    revalidate: 10,
  };
}
