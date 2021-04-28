interface IRequest {
  parentCategorySlug: string;
  currentCategorySlug: string;
}

interface IResponse {
  type: 'subcategory' | 'page';
  page: string;
  catSlug: string;
}

export const slugType = function ({
  parentCategorySlug,
  currentCategorySlug,
}: IRequest): IResponse {
  const isPage = parseInt(currentCategorySlug);

  const type = isNaN(isPage) ? 'subcategory' : 'page';

  const page = type === 'page' ? currentCategorySlug : '';

  const catSlug = type === 'page' ? parentCategorySlug : currentCategorySlug;

  return {
    type,
    page,
    catSlug,
  };
};
