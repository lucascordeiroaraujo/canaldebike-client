import React, { createContext, useCallback, useState, useContext } from 'react';

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
  children: React.ReactNode;
}

export const getPostsData = async (categorySlug: string) => {
  const response = await fetch(
    `${process.env.API_URL}/cdb/category-posts/${categorySlug}`,
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
