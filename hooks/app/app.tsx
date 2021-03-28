import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  ReactNode,
} from 'react';

interface IAppInfoContextData {
  appInfo: IAppInfoState;
  handleSetAppInfo(currentPost: IAppInfoState): void;
}

export interface IAppInfoState {
  facebook: string;
  instagram: string;
  youtube: string;
  twitter: string;
  store_link: string;
  email_address: string;
}

const AppInfoContext = createContext<IAppInfoContextData>(
  {} as IAppInfoContextData,
);

interface IAppInfoProviderProps {
  children: ReactNode;
}

export const getAppInfoData = async () => {
  const response = await fetch(`${process.env.API_URL}/cdb/site-info`);

  return await response.json();
};

export const AppInfoProvider = ({ children }: IAppInfoProviderProps) => {
  const [appInfo, setAppInfo] = useState<IAppInfoState>(() => {
    return {} as IAppInfoState;
  });

  const handleSetAppInfo = useCallback((appInfo: IAppInfoState) => {
    setAppInfo(appInfo);
  }, []);

  return (
    <AppInfoContext.Provider
      value={{
        appInfo,
        handleSetAppInfo,
      }}
    >
      {children}
    </AppInfoContext.Provider>
  );
};

export function useAppInfo(): IAppInfoContextData {
  const context = useContext(AppInfoContext);

  if (!context) {
    throw new Error('useAppInfo must be used within an AppInfoProvider');
  }

  return context;
}
