import React, { createContext, useCallback, useState, useContext } from 'react';

interface ICurrentCategoryContextData {
  currentCategory: ICurrentCategoryState;
  handleSetCurrentCategory(currentCategory: ICurrentCategoryState): void;
}

export interface ICurrentCategoryState {
  id: string;
  slug: string;
  name: string;
  subcategories: Array<{
    id: string;
    slug: string;
    name: string;
  }>;
}

const CurrentCategoryContext = createContext<ICurrentCategoryContextData>(
  {} as ICurrentCategoryContextData,
);

interface ICurrentCategoryProviderProps {
  children: React.ReactNode;
}

export const getCurrentCategoryData = async (categorySlug: string) => {
  const response = await fetch(
    `${process.env.API_URL}/cdb/category-info/${categorySlug}`,
  );

  return await response.json();
};

export const CurrentCategoryProvider = ({
  children,
}: ICurrentCategoryProviderProps) => {
  const [currentCategory, setCurrentCategory] = useState<ICurrentCategoryState>(
    () => {
      return {} as ICurrentCategoryState;
    },
  );

  const handleSetCurrentCategory = useCallback(
    (currentCategory: ICurrentCategoryState) => {
      setCurrentCategory(currentCategory);
    },
    [],
  );

  return (
    <CurrentCategoryContext.Provider
      value={{
        currentCategory,
        handleSetCurrentCategory,
      }}
    >
      {children}
    </CurrentCategoryContext.Provider>
  );
};

export function useCurrentCategory(): ICurrentCategoryContextData {
  const context = useContext(CurrentCategoryContext);

  if (!context) {
    throw new Error(
      'useCurrentCategory must be used within an CurrentCategoryProvider',
    );
  }

  return context;
}
