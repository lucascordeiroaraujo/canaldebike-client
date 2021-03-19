import React from 'react';

import PopularPosts from './components/popular-posts';

import News from './components/news';

import Videos from './components/videos';

import Instagram from './components/instagram';

export default function Index() {
  return (
    <>
      <PopularPosts />

      <News />

      <Videos />

      <Instagram />
    </>
  );
}
