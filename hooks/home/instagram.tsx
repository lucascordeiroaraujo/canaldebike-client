import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  ReactNode,
} from 'react';

interface IInstagramContextData {
  instaMedias: IInstagramState[];
  handleSetInstaMedias(instaMedias: IInstagramState[]): void;
}

export interface IInstagramState {
  media_url: string;
  permalink: string;
  caption: string;
  media_type: 'IMAGE' | 'CAROUSEL_ALBUM' | 'VIDEO';
  id: string;
}

const InstagramContext = createContext<IInstagramContextData>(
  {} as IInstagramContextData,
);

interface IInstagramProviderProps {
  children: ReactNode;
}

export const getInstaMedias = async () => {
  const response = await fetch(`${process.env.API_URL}/cdb/instagram`);

  return await response.json();
};

export const InstagramProvider = ({ children }: IInstagramProviderProps) => {
  const [instaMedias, setInstaMedias] = useState<IInstagramState[]>([]);

  const handleSetInstaMedias = useCallback((instaMedias: IInstagramState[]) => {
    setInstaMedias(instaMedias);
  }, []);

  return (
    <InstagramContext.Provider
      value={{
        instaMedias,
        handleSetInstaMedias,
      }}
    >
      {children}
    </InstagramContext.Provider>
  );
};

export function useInstagram(): IInstagramContextData {
  const context = useContext(InstagramContext);

  if (!context) {
    throw new Error('useInstagram must be used within an InstagramProvider');
  }

  return context;
}
