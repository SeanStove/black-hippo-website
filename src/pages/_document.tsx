import { Head, Html, Main, NextScript } from "next/document";

import React from "react";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="nl" className="scroll-smooth">
      <Head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=UA-162764110-1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-162764110-1');
        `}
        </Script>
        <meta property="og:title" content="Black hippo: Software development" />
        <meta property="og:url" content="https://blackhippo.be" />
        <meta
          property="og:description"
          content="Black Hippo begeleidt ondernemingen bij het digitaliseren en optimaliseren van hun bedrijfsprocessen."
        />
        <meta property="og:image" content="https://blackhippo.be/logo.svg" />
      </Head>
      <body className="overflow-x-hidden scroll-smooth">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
