import React from 'react';

import Header from '~/components/header';

import News from './components/news';

import Videos from './components/videos';

import Instagram from './components/instagram';

import Footer from '~/components/footer';

export default function Index() {
  return (
    <>
      <Header />

      <News />

      <Videos />

      <Instagram />

      <Footer />
    </>
  );
}
