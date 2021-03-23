import React from 'react';

import { usePosts } from '~/hooks/home/posts';

import LatestNews, {
  SliderContainer,
  News,
  NewsImage,
  NewsDescription,
  SliderControls,
} from './style';

import { Container } from '~/styles/global';

import Link from 'next/link';

import Slider, { Settings } from 'react-slick';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const latestNews: React.FC = () => {
  const { posts } = usePosts();

  if (!posts) return null;

  const sliderSettings: Settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
  };

  const sliderRef = React.useRef<Slider | null>(null);

  const sliderPrevNext = (direction: 'prev' | 'next') => {
    const sliderElement = sliderRef.current;

    if (sliderElement) {
      if (direction === 'prev') {
        sliderRef.current?.slickPrev();
      } else if (direction === 'next') {
        sliderRef.current?.slickNext();
      }
    }
  };

  const lastFourPosts = posts.slice(0, 4);

  return (
    <Container smallContainer>
      <LatestNews>
        <h1 className="default-title">Últimas notícias</h1>

        <p className="latest-news-description">
          Confira as últimas novidades que aconteceram no mundo da bike.
        </p>

        <SliderContainer>
          <Slider ref={sliderRef} {...sliderSettings}>
            {lastFourPosts.map(post => (
              <div key={post.id} className="news-slider-container">
                <News>
                  <NewsImage>
                    <img
                      src={post.image.url}
                      alt={post.title}
                      title={post.title}
                      width={post.image.width}
                      height={post.image.height}
                    />

                    <SliderControls>
                      <button onClick={() => sliderPrevNext('next')}>
                        <FaChevronRight />
                      </button>

                      <button onClick={() => sliderPrevNext('prev')}>
                        <FaChevronLeft />
                      </button>
                    </SliderControls>
                  </NewsImage>

                  <NewsDescription>
                    <div className="news-description">
                      {post.categories && post.categories.length >= 1 && (
                        <div className="news-description-categories">
                          {post.categories.map(category => (
                            <Link
                              href={`/categoria/${category.parentSlug}/${category.slug}`}
                            >
                              <a
                                title={`Confira as notícias da categoria ${category.title}`}
                              >
                                {category.title}
                              </a>
                            </Link>
                          ))}
                        </div>
                      )}

                      <span className="news-description-date">
                        criado em {post.date}
                      </span>

                      <h1 className="news-description-title">{post.title}</h1>

                      <span className="news-description-separator"></span>

                      <p className="news-description-resume">{post.resume}</p>

                      <Link href={`/noticia/${post.slug}`}>
                        <a
                          className="news-description-call-to-action"
                          title="Confira a matéria completa"
                        >
                          Ver notícia
                        </a>
                      </Link>
                    </div>
                  </NewsDescription>
                </News>
              </div>
            ))}
          </Slider>
        </SliderContainer>
      </LatestNews>
    </Container>
  );
};

export default latestNews;
