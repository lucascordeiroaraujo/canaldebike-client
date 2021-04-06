import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  ReactNode,
} from 'react';

interface ISearchPostsContextData {
  searchPosts: ISearchPostsState[];
  handleSetSearchPosts(searchPosts: ISearchPostsState[]): void;
}

export interface ISearchPostsState {
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

const SearchPostsContext = createContext<ISearchPostsContextData>(
  {} as ISearchPostsContextData,
);

interface ISearchPostsProviderProps {
  children: ReactNode;
}

export const getSearchPostsData = async (searchTerm: string) => {
  const response = await fetch(
    `${process.env.API_URL}/cdb/search&s=${searchTerm}`,
  );

  return await response.json();
};

export const SearchPostsProvider = ({
  children,
}: ISearchPostsProviderProps) => {
  const [searchPosts, setCatPosts] = useState<ISearchPostsState[]>([]);

  const handleSetSearchPosts = useCallback(
    (searchPosts: ISearchPostsState[]) => {
      setCatPosts(searchPosts);
    },
    [],
  );

  return (
    <SearchPostsContext.Provider
      value={{
        searchPosts,
        handleSetSearchPosts,
      }}
    >
      {children}
    </SearchPostsContext.Provider>
  );
};

export function useSearchPosts(): ISearchPostsContextData {
  const context = useContext(SearchPostsContext);

  if (!context) {
    throw new Error(
      'useSearchPosts must be used within an SearchPostsProvider',
    );
  }

  return context;
}
