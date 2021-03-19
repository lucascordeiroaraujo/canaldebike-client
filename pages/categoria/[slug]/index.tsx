import React from 'react';

import { Container } from '~/styles/global';

import CategoryContainer from './style';

import CategoryHeader from './components/header';

import CategoryPosts from './components/posts';

import CategoryPagination from '~/components/pagination';

const category: React.FC = () => {
  return (
    <Container smallContainer>
      <CategoryContainer>
        <CategoryHeader />

        <CategoryPosts />

        <CategoryPagination />
      </CategoryContainer>
    </Container>
  );
};

export default category;
