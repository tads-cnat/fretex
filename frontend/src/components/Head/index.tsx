import React from 'react';
import { Helmet } from 'react-helmet';

interface IHead {
  title: string;
  description?: string;
  image?: string;
  url?: string;
  alt?: string;
}

const Head = ({ title, description, image, url, alt }: IHead): JSX.Element => {
  return (
    <Helmet>
      <title>{`${title} | Fretex`}</title>
      <meta property="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image:url" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="300" />
      <meta property="og:image:height" content="300" />
      <meta property="og:image:alt" content={alt} />
      <meta itemProp="image" content={image} />
    </Helmet>
  );
};

export default Head;
