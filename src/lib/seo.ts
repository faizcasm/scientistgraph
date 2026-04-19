import type { Metadata } from "next";

const baseUrl = "https://scholarixa.com";

export function buildMetadata({
  title,
  description,
  path = "/",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  return {
    title,
    description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      title,
      description,
      url: `${baseUrl}${path}`,
      siteName: "Scholarixa",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function buildArticleJsonLd({
  title,
  description,
  image,
  datePublished,
  author,
  path,
}: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  author: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: [`${baseUrl}${image}`],
    datePublished,
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: "Scholarixa",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/images/logo-mark.svg`,
      },
    },
    mainEntityOfPage: `${baseUrl}${path}`,
  };
}
