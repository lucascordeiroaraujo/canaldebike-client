import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  ReactNode,
} from 'react';

interface IPostsContextData {
  posts: IPostsState[];
  handleSetPosts(posts: IPostsState[]): void;
}

export interface IPostsState {
  id: string;
  slug: string;
  image: {
    url: string;
    width: string;
    height: string;
  };
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

const PostsContext = createContext<IPostsContextData>({} as IPostsContextData);

interface IPostsProviderProps {
  children: ReactNode;
}

export const getPostsData = async () => {
  const response = await fetch(`${process.env.API_URL}/cdb/home-posts`);

  return await response.json();
};

export const PostsProvider = ({ children }: IPostsProviderProps) => {
  const [posts, setPosts] = useState<IPostsState[]>([]);

  const handleSetPosts = useCallback((posts: IPostsState[]) => {
    setPosts(posts);
  }, []);

  return (
    <PostsContext.Provider
      value={{
        posts,
        handleSetPosts,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export function usePosts(): IPostsContextData {
  const context = useContext(PostsContext);

  if (!context) {
    throw new Error('usePosts must be used within an PostsProvider');
  }

  return context;
}
