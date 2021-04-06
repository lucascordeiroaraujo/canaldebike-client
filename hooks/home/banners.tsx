import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  ReactNode,
} from 'react';

interface IBannersContextData {
  banners: IBannerState[];
  handleSetBanners(banners: IBannerState[]): void;
}

export interface IBannerState {
  id: string;
  title: string;
  image: {
    url: string;
    width: string;
    height: string;
  };
  link: string;
}

const BannersContext = createContext<IBannersContextData>(
  {} as IBannersContextData,
);

interface IBannersProviderProps {
  children: ReactNode;
}

export const getBannerData = async () => {
  const response = await fetch(`${process.env.API_URL}/cdb/banners-home`);

  return await response.json();
};

export const BannersProvider = ({ children }: IBannersProviderProps) => {
  const [banners, setBanners] = useState<IBannerState[]>([]);

  const handleSetBanners = useCallback((banners: IBannerState[]) => {
    setBanners(banners);
  }, []);

  return (
    <BannersContext.Provider
      value={{
        banners,
        handleSetBanners,
      }}
    >
      {children}
    </BannersContext.Provider>
  );
};

export function useBanners(): IBannersContextData {
  const context = useContext(BannersContext);

  if (!context) {
    throw new Error('useBanners must be used within an BannersProvider');
  }

  return context;
}
