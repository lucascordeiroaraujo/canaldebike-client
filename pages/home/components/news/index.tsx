import React from 'react';

import { usePosts } from '~/hooks/home/posts';

import News, { PostsContainer } from './style';

import { Container } from '~/styles/global';

import Post from '~/components/post';

import Link from 'next/link';

import Fade from 'react-reveal/Fade';

import Tada from 'react-reveal/Tada';

const news: React.FC = () => {
  const { posts } = usePosts();

  if (!posts) return null;

  const lastNinePosts = posts.slice(5, 13);

  if (!lastNinePosts.length) return null;

  return (
    <Container smallContainer>
      <News>
        <Fade bottom>
          <h1 className="default-title">
            Tudo sobre o<br /> mundo da bike
          </h1>
        </Fade>

        <PostsContainer>
          {lastNinePosts.map((news, index) => (
            <div key={news.id} className="post-container">
              <Fade delay={index * 150}>
                <Post {...news} />
              </Fade>
            </div>
          ))}
        </PostsContainer>

        <Tada>
          <Link href="/ultimas-noticias">
            <a title="Confira todas as notícias" className="button-all-news">
              ver todas as notícias
            </a>
          </Link>
        </Tada>
      </News>
    </Container>
  );
};

export default news;
