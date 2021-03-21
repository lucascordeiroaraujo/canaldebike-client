import React from 'react';

import { Container } from '~/styles/global';

import News, { PostContainer, SidebarContainer } from './style';

import Post from './components/post';

import Comments from './components/comments';

import RelatedNews from './components/related-news';

import Sidebar from './components/sidebar';

import { FaLongArrowAltLeft } from 'react-icons/fa';

import Link from 'next/link';

import Fade from 'react-reveal/Fade';

const news: React.FC = () => (
  <Container smallContainer>
    <News>
      <Fade>
        <div className="back-to-home-link-container">
          <Link href="/">
            <a title="Voltar para a página inicial">
              <FaLongArrowAltLeft />

              <span>Voltar para o ínicio</span>
            </a>
          </Link>
        </div>
      </Fade>

      <PostContainer>
        <Post />

        <Comments />
      </PostContainer>

      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>

      <RelatedNews />
    </News>
  </Container>
);

export default news;
