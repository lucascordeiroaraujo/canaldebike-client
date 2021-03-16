import React from 'react';

import Post from './style';

import Image from 'next/image';

import Link from 'next/link';

interface IPost {
  id: string;
  tags: Array<{
    slug: string;
    title: string;
  }>;
  slug: string;
  image: string;
  title: string;
  date: string;
  description: string;
}

const post = ({ id, tags, slug, image, title, date, description }: IPost) => {
  return (
    <Post hasCategories={!tags ? false : true} key={id}>
      <Link href={`/noticia/${slug}`}>
        <a title="Confira a matéria completa">
          <Image
            src={image}
            alt={title}
            title={title}
            width="430"
            height="260"
            layout="responsive"
          />
        </a>
      </Link>

      {tags && (
        <div className="category-link">
          {tags.map(tag => (
            <Link href={`/tag/${tag.slug}`}>
              <a title="Confira a matéria completa">{tag.title}</a>
            </Link>
          ))}
        </div>
      )}

      <span>criado em {date}</span>

      <h2>
        <Link href={`/noticia/${slug}`}>
          <a title="Confira a matéria completa">{title}</a>
        </Link>
      </h2>

      <p>
        <Link href={`/noticia/${slug}`}>
          <a title="Confira a matéria completa">{description}</a>
        </Link>
      </p>
    </Post>
  );
};

export default post;
