import React from 'react';

import { Container } from '~/styles/global';

import News, { PostContainer, SidebarContainer } from './style';

import Post from './components/post';

import Comments from './components/comments';

import Sidebar from './components/sidebar';

import { FaLongArrowAltLeft } from 'react-icons/fa';

import Link from 'next/link';

const news: React.FC = () => (
  <Container smallContainer>
    <News>
      <div className="back-to-home-link-container">
        <Link href="/">
          <a title="Voltar para a página inicial">
            <FaLongArrowAltLeft />

            <span>Voltar para o ínicio</span>
          </a>
        </Link>
      </div>

      <PostContainer>
        <Post />

        <Comments />
      </PostContainer>

      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
    </News>
  </Container>
);

export default news;
