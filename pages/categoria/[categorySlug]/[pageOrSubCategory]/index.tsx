import React, { useEffect } from 'react';

import { GetStaticPaths, GetStaticPropsResult } from 'next';

import { slugType } from '~/utils/slug-type';

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
} from '~/hooks/category/cat-posts';

import Loader from '../../../../components/global/loader';

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

export default function CategoryPage({
  appInfo,
  menuItens,
  category,
  posts,
}: ICategoryProps) {
  const router = useRouter();

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

  if (router.isFallback) {
    return <Loader />;
  }

  const { type } = slugType({
    parentCategorySlug: router.query.categorySlug,
    currentCategorySlug: router.query.pageOrSubCategory,
  });

  console.log('type', type);

  const includeParentCat =
    type === 'subcategory' ? `${router.query.categorySlug}/` : '';

  return (
    <>
      <Container smallContainer>
        <CategoryContainer>
          <CategoryHeader />

          <CategoryPosts />

          <CategoryPagination
            {...category.pagination}
            slug={`categoria/${includeParentCat}${
              category.slug === 'cdb' ? 'ultimas-noticias' : category.slug
            }`}
          />
        </CategoryContainer>
      </Container>
    </>
  );
}

// interface ICategoriesList {
//   id: string;
//   slug: string;
//   totalPages: number;
// }

// interface IPaths {
//   params: {
//     categorySlug: string;
//     pageOrSubCategory: string;
//   };
// }

export const getStaticPaths: GetStaticPaths = async () => {
  // const response = await fetch(`${process.env.API_URL}/cdb/categories`);

  // const result = await response.json();

  // const paths = [] as IPaths[];

  // result.forEach((category: ICategoriesList) => {
  //   const limitPages = 5;

  //   const pages =
  //     category.totalPages < limitPages ? category.totalPages : limitPages;

  //   for (let index = 1; index <= pages; index++) {
  //     paths.push({
  //       params: { categorySlug: category.slug, page: index.toString() },
  //     });
  //   }
  // });

  return {
    paths: [],
    fallback: true,
  };
};

interface IStaticProps {
  params: {
    categorySlug: string;
    pageOrSubCategory: string;
  };
}

export async function getStaticProps({
  params,
}: IStaticProps): Promise<GetStaticPropsResult<ICategoryProps>> {
  const { categorySlug, pageOrSubCategory } = params;

  const { page, catSlug } = slugType({
    parentCategorySlug: categorySlug,
    currentCategorySlug: pageOrSubCategory,
  });

  return {
    props: {
      appInfo: await getAppInfoData(),
      menuItens: await getMenuData(),
      category: await getCurrentCategoryData({ categorySlug: catSlug, page }),
      posts: await getPostsData({ slug: catSlug, page }),
    },
    revalidate: 10,
  };
}
