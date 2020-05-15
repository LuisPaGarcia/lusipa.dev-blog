import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

type TitleAndMetaTagsProps = {
  url?: string;
  pathname?: string;
  title?: string;
  description?: string;
};

export default function TitleAndMetaTags({
  url = 'https://ped.ro',
  pathname,
  title = 'LuisPa',
  description = 'software gardener interested in design systems, jamstack, user/dev experience and engineering hacks.',
}: TitleAndMetaTagsProps) {
  const router = useRouter();

  const path = pathname || router.pathname;
  const domain = `${url}${path}`;
  
  const screenshotUrl = 'https://i.microlink.io/';
  const cardUrl = `https://cards.microlink.io/?preset=pedro&title=${description}&domain=${domain}`;
  const image = `${screenshotUrl}${encodeURIComponent(cardUrl)}`;

  return (
    <Head>
      <title>
        {title} — {description}
      </title>
      
      <meta name="robots" content="noindex" />

      <meta property="og:url" content={domain} />
      <meta property="og:image" content={image} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      <meta name="twitter:url" content={domain} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content="@peduarte" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@peduarte" />
    </Head>
  );
}
