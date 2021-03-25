import React, { createContext, useCallback, useState, useContext } from 'react';

interface IMenuContextData {
  menuData: IMenuState[];
  handleSetMenuData(menuItens: IMenuState[]): void;
}

export interface IMenuState {
  id: string;
  title: string;
  classes: Array<string>;
  attr_title: string;
  category_info: {
    id: string;
    name: string;
  };
  slug: string;
  target: string;
}

const MenuContext = createContext<IMenuContextData>({} as IMenuContextData);

interface IMenuProviderProps {
  children: React.ReactNode;
}

export const getMenuData = async () => {
  const response = await fetch(`${process.env.API_URL}/cdb/menu`);

  return await response.json();
};

export const MenuProvider = ({ children }: IMenuProviderProps) => {
  const [menuData, setMenuData] = useState<IMenuState[]>([]);

  const handleSetMenuData = useCallback((menuItens: IMenuState[]) => {
    setMenuData(menuItens);
  }, []);

  return (
    <MenuContext.Provider
      value={{
        menuData,
        handleSetMenuData,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export function useMenu(): IMenuContextData {
  const context = useContext(MenuContext);

  if (!context) {
    throw new Error('useMenu must be used within an MenuProvider');
  }

  return context;
}
