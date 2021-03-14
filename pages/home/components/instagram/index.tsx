import React from 'react';

import Instagram, { PhotosContainer } from './style';

import { FaInstagram } from 'react-icons/fa';

import Image from 'next/image';

const instagram: React.FC = () => {
  return (
    <Instagram>
      <h1>Siga no Insta!</h1>

      <a
        href="#"
        title="Siga no Instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram />
        @canaldebike
      </a>

      <PhotosContainer>
        <div className="image-container">
          <Image
            src="https://picsum.photos/id/228/320/320"
            alt="Canal de Bike Instagram"
            title="Canal de Bike Instagram"
            width="320"
            height="320"
            layout="responsive"
          />
        </div>

        <div className="image-container">
          <Image
            src="https://picsum.photos/id/227/320/320"
            alt="Canal de Bike Instagram"
            title="Canal de Bike Instagram"
            width="320"
            height="320"
            layout="responsive"
          />
        </div>

        <div className="image-container">
          <Image
            src="https://picsum.photos/id/229/320/320"
            alt="Canal de Bike Instagram"
            title="Canal de Bike Instagram"
            width="320"
            height="320"
            layout="responsive"
          />
        </div>

        <div className="image-container">
          <Image
            src="https://picsum.photos/id/225/320/320"
            alt="Canal de Bike Instagram"
            title="Canal de Bike Instagram"
            width="320"
            height="320"
            layout="responsive"
          />
        </div>

        <div className="image-container">
          <Image
            src="https://picsum.photos/id/231/320/320"
            alt="Canal de Bike Instagram"
            title="Canal de Bike Instagram"
            width="320"
            height="320"
            layout="responsive"
          />
        </div>

        <div className="image-container">
          <Image
            src="https://picsum.photos/id/233/320/320"
            alt="Canal de Bike Instagram"
            title="Canal de Bike Instagram"
            width="320"
            height="320"
            layout="responsive"
          />
        </div>
      </PhotosContainer>
    </Instagram>
  );
};

export default instagram;
