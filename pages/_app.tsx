import React from 'react';

import App from 'next/app';

import Head from 'next/head';

import GlobalStyles from '~/styles/global';

import 'react-app-polyfill/ie9';

import NProgress from 'nprogress';

import Router from 'next/router';

import { ThemeProvider } from 'styled-components';

import lightTheme from '~/styles/themes/light';

import Header from '~/components/header';

import Footer from '~/components/footer';

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});

Router.events.on('routeChangeComplete', () => NProgress.done());

Router.events.on('routeChangeError', () => NProgress.done());

interface StoreProps {
  Component: React.Component;
  store: any;
}

class MyApp extends App<StoreProps> {
  static async getInitialProps({
    Component,
    ctx,
  }: {
    Component: any;
    ctx: any;
  }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Canal de Bike</title>

          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href={require('~/public/images/icons/apple-icon-57x57.png')}
          />

          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href={require('~/public/images/icons/apple-icon-60x60.png')}
          />

          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href={require('~/public/images/icons/apple-icon-72x72.png')}
          />

          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href={require('~/public/images/icons/apple-icon-76x76.png')}
          />

          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href={require('~/public/images/icons/apple-icon-114x114.png')}
          />

          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href={require('~/public/images/icons/apple-icon-120x120.png')}
          />

          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href={require('~/public/images/icons/apple-icon-144x144.png')}
          />

          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href={require('~/public/images/icons/apple-icon-152x152.png')}
          />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={require('~/public/images/icons/apple-icon-180x180.png')}
          />

          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href={require('~/public/images/icons/android-icon-192x192.png')}
          />

          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={require('~/public/images/icons/favicon-32x32.png')}
          />

          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href={require('~/public/images/icons/favicon-96x96.png')}
          />

          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={require('~/public/images/icons/favicon-16x16.png')}
          />

          <meta
            name="msapplication-TileImage"
            content={require('~/public/images/icons/ms-icon-144x144.png')}
          />

          <meta name="msapplication-TileColor" content="#81b228" />

          <meta name="theme-color" content="#81b228" />

          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
        </Head>

        <ThemeProvider theme={lightTheme}>
          <>
            <GlobalStyles />

            <Header />

            <Component {...pageProps} />

            <Footer />
          </>
        </ThemeProvider>

        <noscript>
          <style
            dangerouslySetInnerHTML={{
              __html: '.react-reveal {opacity: 1}',
            }}
          />
        </noscript>

        <div id="fb-root"></div>

        <script
          async
          defer
          crossOrigin="anonymous"
          src="https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v10.0&appId=1015663685120991&autoLogAppEvents=1"
          nonce="0OUFJuus"
        ></script>
      </>
    );
  }
}

export default MyApp;
