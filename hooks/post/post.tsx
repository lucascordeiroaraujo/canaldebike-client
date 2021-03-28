import React, { createContext, useCallback, useState, useContext } from 'react';

interface ICurrentPostContextData {
  currentPost: ICurrentPostState;
  handleSetCurrentPost(currentPost: ICurrentPostState): void;
}

export interface ICurrentPostState {
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
  author: {
    id: string;
    name: string;
    slug: string;
  };
  date: string;
  title: string;
  subtitle: string;
  description: string;
  relateds: Array<{
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
  }>;
  seo: {
    title: string;
    description: string;
    image: string;
  };
}

const CurrentPostContext = createContext<ICurrentPostContextData>(
  {} as ICurrentPostContextData,
);

interface ICurrentPostProviderProps {
  children: React.ReactNode;
}

export const getCurrentPostData = async (postSlug: string) => {
  const response = await fetch(`${process.env.API_URL}/cdb/post/${postSlug}`);

  return await response.json();
};

export const CurrentPostProvider = ({
  children,
}: ICurrentPostProviderProps) => {
  const [currentPost, setCurrentPost] = useState<ICurrentPostState>(() => {
    return {} as ICurrentPostState;
  });

  const handleSetCurrentPost = useCallback((currentPost: ICurrentPostState) => {
    setCurrentPost(currentPost);
  }, []);

  return (
    <CurrentPostContext.Provider
      value={{
        currentPost,
        handleSetCurrentPost,
      }}
    >
      {children}
    </CurrentPostContext.Provider>
  );
};

export function useCurrentPost(): ICurrentPostContextData {
  const context = useContext(CurrentPostContext);

  if (!context) {
    throw new Error(
      'useCurrentPost must be used within an CurrentPostProvider',
    );
  }

  return context;
}
