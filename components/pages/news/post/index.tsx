import React from 'react';

import { useCurrentPost } from '../../../../hooks/post/post';

import Post, {
  FeaturedImage,
  CategoriesAndShared,
  PostDateAuthor,
  PostContent,
} from './style';

import Link from 'next/link';

import Fade from 'react-reveal/Fade';

import { FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';

interface IProps {
  postUrl: string;
}

const post = ({ postUrl }: IProps) => {
  const { currentPost } = useCurrentPost();

  if (!currentPost) return null;

  const {
    old_site_image,
    image,
    categories,
    author,
    date,
    title,
    subtitle,
    description,
  } = currentPost;

  const hasCategories = () => {
    return categories && categories.length >= 1;
  };

  const replacedDescription = description
    ? description.replace(/<p><iframe/gi, '<p class="video-content"><iframe')
    : '';

  const postImage = () => {
    return old_site_image
      ? old_site_image
      : image && image.url
      ? image.url
      : '';
  };

  return (
    <Post>
      <Fade>
        {postImage() && (
          <FeaturedImage>
            <Fade>
              <img src={postImage()} alt={title} title="" />
            </Fade>
          </FeaturedImage>
        )}
      </Fade>

      <CategoriesAndShared>
        {hasCategories() && (
          <div className="categories-container">
            {categories.map(category => (
              <Fade key={category.id}>
                <Link
                  href={`/categoria/${category.parentSlug}/${category.slug}`}
                >
                  <a
                    title={`Confira as notícias da categoria ${category.title}`}
                  >
                    {category.title}
                  </a>
                </Link>
              </Fade>
            ))}
          </div>
        )}

        <div
          className={`share-container${
            !hasCategories() ? ' empty-categories' : ''
          }`}
        >
          <Fade>
            <strong>Compartilhar</strong>
          </Fade>

          <Fade delay={50}>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${postUrl}`}
              title="Compartilhe no Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="facebook"
            >
              <FaFacebook />
            </a>
          </Fade>

          <Fade delay={100}>
            <a
              href={`https://twitter.com/intent/tweet?text=${postUrl}`}
              title="Compartilhe no Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </Fade>

          <Fade delay={150}>
            <a
              href={`https://api.whatsapp.com/send?text=${postUrl}`}
              title="Compartilhe no WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </Fade>
        </div>
      </CategoriesAndShared>

      <Fade bottom>
        <PostDateAuthor>
          <span>criado em {date} por</span>

          {author && (
            <Link href={`/autor/${author.slug}`}>
              <a title="Confira os posts do Autor">{author.name}</a>
            </Link>
          )}
        </PostDateAuthor>
      </Fade>

      <PostContent>
        <Fade bottom delay={100}>
          <h1>{title}</h1>
        </Fade>

        <Fade bottom delay={150}>
          <h2 className="sub-title">{subtitle}</h2>
        </Fade>

        <span className="title-separator"></span>

        <Fade delay={200}>
          <div dangerouslySetInnerHTML={{ __html: replacedDescription }} />
        </Fade>
      </PostContent>
    </Post>
  );
};

export default post;
