import React from 'react';

import Post from './style';

import Image from 'next/image';

import Link from 'next/link';

interface IPost {
  id: string;
  categories: Array<{
    id: string;
    title: string;
    slug: string;
  }>;
  slug: string;
  image: {
    url: string;
    width: string;
    height: string;
  };
  old_site_image: string;
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
  old_site_image,
  title,
  date,
  resume,
  nextImage = true,
  slider = false,
}: IPost) => {
  const postImage = () => {
    return old_site_image ? old_site_image : image.url;
  };

  const postWidth = () => {
    return old_site_image ? '460' : image.width;
  };

  const postHeight = () => {
    return old_site_image ? '280' : image.height;
  };

  return (
    <Post hasCategories={!categories ? false : true} isSlider={slider}>
      <div className="post-image-container">
        <span className="call-to-action">Ver notícia</span>

        <Link href={`/noticia/${slug}`}>
          <a title="Confira a matéria completa">
            {nextImage ? (
              <Image
                src={postImage()}
                alt={title}
                title={title}
                width={postWidth()}
                height={postHeight()}
                layout="responsive"
                className="post-image"
              />
            ) : (
              <img
                src={postImage()}
                alt={title}
                title={title}
                width={postWidth()}
                height={postHeight()}
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
              key={category.id}
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
