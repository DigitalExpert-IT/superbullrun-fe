import React from "react";
import Header from "next/head";

interface MetadataProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  copyright?: string;
  revisit?: string;
  language?: string;
  webcrawlers?: string;
  rating?: string;
  spider?: string;
  distribution?: string;
  audience?: string;
}

export const Metadata: React.FC<MetadataProps> = props => {
  const {
    title,
    audience,
    author,
    copyright,
    description,
    distribution,
    keywords,
    language,
    rating,
    revisit,
    spider,
    webcrawlers,
  } = props;
  return (
    <Header>
      {title ? (
        <title>{title} | SuperBullrun</title>
      ) : (
        <title>SuperBullrun</title>
      )}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="copyright" content={copyright} />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <meta name="revisit-after" content={revisit ?? "1 days"} />
      <meta name="language" content={language ?? "English"} />
      <meta name="webcrawlers" content={webcrawlers ?? '"all"'} />
      <meta name="audience" content={audience ?? "all"} />
      <meta name="spiders" content={spider ?? '"all"'} />
      <meta name="rating" content={rating ?? '"general"'} />
      <meta name="distribution" content={distribution ?? "global"} />
    </Header>
  );
};
