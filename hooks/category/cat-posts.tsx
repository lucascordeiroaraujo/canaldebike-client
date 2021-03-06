import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  ReactNode,
} from 'react';

interface ICatPostsContextData {
  catPosts: ICatPostsState[];
  handleSetCatPosts(catPosts: ICatPostsState[]): void;
}

export interface ICatPostsState {
  id: string;
  slug: string;
  image: {
    url: string;
    width: string;
    height: string;
  };
  old_site_image: string;
  categories: Array<{
    id: string;
    title: string;
    slug: string;
  }>;
  date: string;
  title: string;
  resume: string;
}

const CatPostsContext = createContext<ICatPostsContextData>(
  {} as ICatPostsContextData,
);

interface ICatPostsProviderProps {
  children: ReactNode;
}

interface IPostsData {
  slug: string;
  page?: string;
}

export const getPostsData = async ({ slug, page }: IPostsData) => {
  const withPage = page !== '' ? `/${page}` : '1';

  const response = await fetch(
    `${process.env.API_URL}/cdb/category-posts/${slug}${withPage}`,
  );

  return await response.json();
};

export const CatPostsProvider = ({ children }: ICatPostsProviderProps) => {
  const [catPosts, setCatPosts] = useState<ICatPostsState[]>([]);

  const handleSetCatPosts = useCallback((catPosts: ICatPostsState[]) => {
    setCatPosts(catPosts);
  }, []);

  return (
    <CatPostsContext.Provider
      value={{
        catPosts,
        handleSetCatPosts,
      }}
    >
      {children}
    </CatPostsContext.Provider>
  );
};

export function useCatPosts(): ICatPostsContextData {
  const context = useContext(CatPostsContext);

  if (!context) {
    throw new Error('useCatPosts must be used within an CatPostsProvider');
  }

  return context;
}
