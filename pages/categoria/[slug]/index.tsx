import React from 'react';

import Header from '~/components/header';

import { Container } from '~/styles/global';

import CategoryContainer from './style';

import CategoryHeader from './components/header';

import CategoryPosts from './components/posts';

import CategoryPagination from '~/components/pagination';

import Footer from '~/components/footer';

const category: React.FC = () => {
  return (
    <>
      <Header />

      <Container smallContainer>
        <CategoryContainer>
          <CategoryHeader />

          <CategoryPosts />

          <CategoryPagination />
        </CategoryContainer>
      </Container>

      <Footer />
    </>
  );
};

export default category;
