import React from 'react';

import { useVideos } from '~/hooks/home/videos';

import { useAppInfo } from '~/hooks/app';

import Videos, { Cover, FullVideo, VideosThumbs } from './style';

import { Container } from '~/styles/global';

import Image from 'next/image';

import { FaYoutube } from 'react-icons/fa';

import Fade from 'react-reveal/Fade';

const videos: React.FC = () => {
  const { videos } = useVideos();

  const { appInfo } = useAppInfo();

  if (!videos) return null;

  const lastVideo = videos.filter(
    video => video.id.kind === 'youtube#video',
  )[0];

  const thumbList = videos
    .filter(
      video =>
        video.id.videoId !== lastVideo.id.videoId &&
        video.id.kind === 'youtube#video',
    )
    .slice(0, 4);

  return (
    <Videos>
      <Cover>
        <Fade>
          <h1>
            Confira o último
            <br /> vídeo do canal
          </h1>
        </Fade>
      </Cover>

      {lastVideo && (
        <Container className="container">
          <FullVideo>
            <iframe
              src={`https://www.youtube.com/embed/${lastVideo.id.videoId}?autoplay=false`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </FullVideo>
        </Container>
      )}

      <VideosThumbs>
        {thumbList.map(video => (
          <Fade bottom key={video.id.videoId}>
            <article className="video-thumb">
              <a
                href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                title="Assista no YouTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={`https://img.youtube.com/vi/${video.id.videoId}/mqdefault.jpg`}
                  alt={video.snippet.title}
                  title={video.snippet.title}
                  width="320"
                  height="180"
                  layout="responsive"
                />

                <div className="icon-container">
                  <FaYoutube />
                </div>
              </a>
            </article>
          </Fade>
        ))}
      </VideosThumbs>

      {appInfo.youtube && (
        <Fade bottom delay={400}>
          <a
            href={appInfo.youtube}
            title="Inscreva-se no canal do YouTube"
            target="_blank"
            rel="noopener noreferrer"
            className="youtube-link"
          >
            <FaYoutube /> Ver mais vídeos do meu canal
          </a>
        </Fade>
      )}
    </Videos>
  );
};

export default videos;
