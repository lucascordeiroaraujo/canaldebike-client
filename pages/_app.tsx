import React, { useState, useEffect } from 'react';

import { AppProps } from 'next/app';

import Head from 'next/head';

import GlobalStyles, { AppBox, SwitchTheme } from '~/styles/global';

import 'react-app-polyfill/ie9';

import NProgress from 'nprogress';

import Router from 'next/router';

import { ThemeProvider } from 'styled-components';

import lightTheme from '~/styles/themes/light';

import darkTheme from '~/styles/themes/dark';

import AppProvider from '~/hooks';

import Header from '~/components/global/header';

import Footer from '~/components/global/footer';

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});

Router.events.on('routeChangeComplete', () => NProgress.done());

Router.events.on('routeChangeError', () => NProgress.done());

export default function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState('light');

  const handleToggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';

    localStorage.setItem('@CanalDeBike:theme', newTheme);

    setTheme(newTheme);
  };

  useEffect(function () {
    const selectedTheme = localStorage.getItem('@CanalDeBike:theme');

    if (selectedTheme) {
      setTheme(selectedTheme);
    }
  }, []);

  const themeLabel = () => {
    if (theme === 'light') {
      return 'Tema<br/> Escuro';
    } else {
      return 'Tema<br/> Claro';
    }
  };

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

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-YYR5QBGCDZ"
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-YYR5QBGCDZ');`,
          }}
        />
      </Head>

      <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
        <>
          <GlobalStyles />

          <AppBox>
            <AppProvider>
              <SwitchTheme
                onClick={handleToggleTheme}
                dangerouslySetInnerHTML={{ __html: themeLabel() }}
              />

              <Header />

              <Component {...pageProps} theme={theme} />

              <Footer />
            </AppProvider>
          </AppBox>
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
        src="https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v10.0&appId=405606819649320&autoLogAppEvents=1"
        nonce="0OUFJuus"
      ></script>
    </>
  );
}
