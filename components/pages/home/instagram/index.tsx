import React from 'react';

import { useInstagram } from '~/hooks/home/instagram';

import { useAppInfo } from '~/hooks/app/app';

import Instagram, { PhotosContainer } from './style';

import { FaInstagram } from 'react-icons/fa';

import Link from 'next/link';

import Fade from 'react-reveal/Fade';

const instagram = () => {
  const { appInfo } = useAppInfo();

  const { instaMedias } = useInstagram();

  if (!instaMedias) return null;

  return (
    <Instagram>
      <Fade bottom>
        <h1>Siga no Insta!</h1>
      </Fade>

      {appInfo && appInfo.instagram && (
        <Fade bottom delay={200}>
          <a
            href={`https://www.instagram.com/${appInfo.instagram}`}
            title="Siga no Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-link"
          >
            <FaInstagram />@{appInfo.instagram}
          </a>
        </Fade>
      )}

      <PhotosContainer>
        {instaMedias.map(media => (
          <div className="media-container" key={media.id}>
            <Link href={media.permalink}>
              <a
                title="Confira no Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                {media.media_type === 'VIDEO' ? (
                  <video controls src={media.media_url}></video>
                ) : (
                  <img
                    src={media.media_url}
                    alt={media.caption}
                    title={media.caption}
                    width="320"
                    height="320"
                  />
                )}
              </a>
            </Link>
          </div>
        ))}

        <div className="image-container"></div>
      </PhotosContainer>
    </Instagram>
  );
};

export default instagram;
