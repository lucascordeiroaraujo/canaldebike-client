import React from 'react';

import Post from './style';

import Image from 'next/image';

import Link from 'next/link';

interface IPost {
  id: Number;
  categories: Array<{
    id: number;
    title: string;
    slug: string;
  }>;
  slug: string;
  image: string;
  title: string;
  date: string;
  resume: string;
  nextImage?: boolean;
  slider?: boolean;
}

const post = ({
  categories,
  slug,
  image,
  title,
  date,
  resume,
  nextImage = true,
  slider = false,
}: IPost) => {
  return (
    <Post hasCategories={!categories ? false : true} isSlider={slider}>
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

      {categories && (
        <div className="category-link">
          {categories.map(category => (
            <Link
              key={category.id.toString()}
              href={`/categoria/${'current-category'}/${category.slug}`}
            >
              <a title={`Confira as notícias da categoria ${category.title}`}>
                {category.title}
              </a>
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

      <p className="post-resume">
        <Link href={`/noticia/${slug}`}>
          <a title="Confira a matéria completa">{resume}</a>
        </Link>
      </p>
    </Post>
  );
};

export default post;
