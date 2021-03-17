import React from 'react';

import Header from '~/components/header';

import { Container } from '~/styles/global';

import News, { PostContainer, SidebarContainer } from './style';

import Post from './components/post';

import Comments from './components/comments';

import Sidebar from './components/sidebar';

import Footer from '~/components/footer';

import { FaLongArrowAltLeft } from 'react-icons/fa';

import Link from 'next/link';

const news: React.FC = () => (
  <>
    <Header />

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

    <Footer />
  </>
);

export default news;
