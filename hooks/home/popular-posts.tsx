import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  ReactNode,
} from 'react';

interface IPopularPostsContextData {
  popularPosts: IPopularPostsState[];
  handleSetPopularPosts(posts: IPopularPostsState[]): void;
}

export interface IPopularPostsState {
  id: string;
  slug: string;
  image: {
    url: string;
    width: string;
    height: string;
  };
  old_site_image: string;
  categories: Array<{
    parentSlug: string;
    id: string;
    title: string;
    slug: string;
  }>;
  date: string;
  title: string;
  resume: string;
}

const PostsContext = createContext<IPopularPostsContextData>(
  {} as IPopularPostsContextData,
);

interface IPopularPostsProviderProps {
  children: ReactNode;
}

export const getPopularPostsData = async () => {
  const response = await fetch(`${process.env.API_URL}/cdb/popular-posts`);

  return await response.json();
};

export const PopularPostsProvider = ({
  children,
}: IPopularPostsProviderProps) => {
  const [popularPosts, setPosts] = useState<IPopularPostsState[]>([]);

  const handleSetPopularPosts = useCallback(
    (popularPosts: IPopularPostsState[]) => {
      setPosts(popularPosts);
    },
    [],
  );

  return (
    <PostsContext.Provider
      value={{
        popularPosts,
        handleSetPopularPosts,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export function usePopularPosts(): IPopularPostsContextData {
  const context = useContext(PostsContext);

  if (!context) {
    throw new Error(
      'usePopularPosts must be used within an PopularPostsProvider',
    );
  }

  return context;
}
