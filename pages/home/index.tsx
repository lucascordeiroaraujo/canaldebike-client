import React from 'react';

import Header from '~/components/header';

import News from './components/news';

import Footer from '~/components/footer';

export default function Index() {
  return (
    <>
      <Header />

      <News />

      <Footer />
    </>
  );
}
