import { Head, Html, Main, NextScript } from "next/document";

import PlausibleProvider from "next-plausible";
import React from "react";

export default function Document() {
  return (
    <Html lang="nl" className="overflow-x-hidden scroll-smooth">
      <Head>
        <PlausibleProvider domain="blackhippo.be" />
        <meta property="og:title" content="Black hippo: Software development" />
        <meta property="og:url" content="https://blackhippo.be" />
        <meta
          property="og:description"
          content="Black Hippo begeleidt ondernemingen bij het digitaliseren en optimaliseren van hun bedrijfsprocessen."
        />
        <meta property="og:image" content="https://blackhippo.be/logo.svg" />
      </Head>
      <body className="overflow-x-hidden relative scroll-smooth">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
