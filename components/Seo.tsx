import React from 'react';

import Head from 'next/head';

import { useRouter } from 'next/router';

export interface ISeoProps {
  seo_title?: string;
  seo_description?: string;
  seo_image?: string;
  appUrl: string;
  twitter: string;
}

const Seo = ({
  seo_title,
  seo_description,
  seo_image,
  appUrl,
  twitter,
}: ISeoProps) => {
  const router = useRouter();

  console.log(appUrl, router);

  return (
    <Head>
      <title>{seo_title}</title>

      <meta name="description" content={seo_description} />

      {/* <link rel="canonical" href={`${appUrl}${router.asPath}`} /> */}

      <meta property="og:locale" content="pt_BR" />

      <meta property="og:type" content="website" />

      <meta property="og:title" content={seo_title} />

      <meta property="og:description" content={seo_description} />

      {/* <meta property="og:url" content={`${appUrl}${router.asPath}`} /> */}

      <meta property="og:site_name" content="Canal de Bike" />

      <meta property="og:image" content={seo_image} />

      <meta property="og:image:secure_url" content={seo_image} />

      <meta property="og:image:width" content="484" />

      <meta property="og:image:height" content="252" />

      <meta property="fb:admins" content="1161828768" />

      <meta property="fb:app_id" content="405606819649320" />

      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:title" content={seo_title} />

      <meta name="twitter:description" content={seo_description} />

      <meta name="twitter:image" content={seo_image} />

      <meta name="twitter:site" content={`@${twitter}`} />

      <meta name="twitter:creator" content="@revistaridebike" />
    </Head>
  );
};

export default Seo;
