import React from 'react';

import Post from './style';

import Image from 'next/image';

import Link from 'next/link';

interface IPost {
  id?: string;
  tags: Array<{
    id: number;
    title: string;
    slug: string;
  }>;
  slug: string;
  image: string;
  title: string;
  date: string;
  description: string;
  nextImage?: boolean;
  slider?: boolean;
}

const post = ({
  tags,
  slug,
  image,
  title,
  date,
  description,
  nextImage = true,
  slider = false,
}: IPost) => {
  return (
    <Post hasCategories={!tags ? false : true} isSlider={slider}>
      <div className="post-image-container">
        <span className="call-to-action">Ver notícia</span>

        <Link href={`/noticia/${slug}`}>
          <a title="Confira a matéria completa">
            {nextImage ? (
              <Image
                src={image}
                alt={title}
                title={title}
                width="430"
                height="260"
                layout="responsive"
                className="post-image"
              />
            ) : (
              <img
                src={image}
                alt={title}
                title={title}
                width="430"
                height="260"
                className="post-image"
              />
            )}
          </a>
        </Link>
      </div>

      {tags && (
        <div className="category-link">
          {tags.map(tag => (
            <Link key={tag.id} href={`/tag/${tag.slug}`}>
              <a title="Confira a matéria completa">{tag.title}</a>
            </Link>
          ))}
        </div>
      )}

      <span className="post-date">criado em {date}</span>

      <h2 className="post-title">
        <Link href={`/noticia/${slug}`}>
          <a title="Confira a matéria completa">{title}</a>
        </Link>
      </h2>

      <p className="post-description">
        <Link href={`/noticia/${slug}`}>
          <a title="Confira a matéria completa">{description}</a>
        </Link>
      </p>
    </Post>
  );
};

export default post;
