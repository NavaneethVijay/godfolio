import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Navaneeth Vijay",
    jobTitle: "Full Stack Web Developer",
    url: "https://www.navaneethvijay.in/",
    sameAs: [
      "https://www.linkedin.com/in/navaneethvijay",
      "https://github.com/navaneethvijay",
    ],
  };

  return (
    <Html lang="en" className="dark">
      <Head>
        <title>
          Navaneeth Vijay | Full Stack Web Developer | UI/UX Design, Responsive
          Websites
        </title>

        <meta
          name="description"
          content="Navaneeth Vijay, a Full Stack Web Developer in Bengaluru, specializing in UI/UX Design, responsive web design, and building interactive websites."
        />
        <meta
          name="keywords"
          content="Full Stack Web Developer, UI/UX Design, Responsive Web Design, Interactive Websites, Bengaluru"
        />

        <meta
          property="og:title"
          content="Navaneeth Vijay | Full Stack Web Developer"
        />
        <meta
          property="og:description"
          content="UI/UX Design, responsive websites, and more by Navaneeth Vijay."
        />
        <meta property="og:image" content="image_url_here" />
        <meta property="og:url" content="https://www.navaneethvijay.in/" />

        <meta
          name="twitter:title"
          content="Navaneeth Vijay | Full Stack Web Developer"
        />
        <meta
          name="twitter:description"
          content="Building responsive websites and interactive user experiences."
        />
        <meta name="twitter:url" content="https://www.navaneethvijay.in/" />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>

        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
