import React, { createContext, useCallback, useState, useContext } from 'react';

interface IVideosContextData {
  videos: IVideosState[];
  handleSetVideos(videos: IVideosState[]): void;
}

export interface IVideosState {
  id: {
    kind: string;
    videoId: string;
  };
  snippet: {
    title: string;
  };
}

const VideosContext = createContext<IVideosContextData>(
  {} as IVideosContextData,
);

interface IVideosProviderProps {
  children: React.ReactNode;
}

export const getVideosData = async () => {
  const channelId = 'UCaA5e9PJXY3Ci57AP96OUWg';

  const apiKey = 'AIzaSyCV1razBnLkP1fQxNyRZ_wV_-Vcv_nqhqM';

  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=8`,
  );

  const result = await response.json();

  return (result && result.items) || null;
};

export const VideosProvider = ({ children }: IVideosProviderProps) => {
  const [videos, setCatPosts] = useState<IVideosState[]>([]);

  const handleSetVideos = useCallback((videos: IVideosState[]) => {
    setCatPosts(videos);
  }, []);

  return (
    <VideosContext.Provider
      value={{
        videos,
        handleSetVideos,
      }}
    >
      {children}
    </VideosContext.Provider>
  );
};

export function useVideos(): IVideosContextData {
  const context = useContext(VideosContext);

  if (!context) {
    throw new Error('useVideos must be used within an VideosProvider');
  }

  return context;
}
