import React from 'react';

import Banner from './components/banner';

import LatestNews from './components/latest-news';

import PopularPosts from './components/popular-posts';

import News from './components/news';

import Videos from './components/videos';

import Instagram from './components/instagram';

export default function Index() {
  return (
    <>
      <Banner />

      <LatestNews />

      <PopularPosts />

      <News />

      <Videos />

      <Instagram />
    </>
  );
}
