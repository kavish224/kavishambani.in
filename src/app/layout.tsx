import "./globals.css";
import { ReactNode } from "react";
import Head from "next/head";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Head>
        {/* Basic Meta Tags */}
        <title>Kavish Ambani - Personal Website</title>
        <meta
          name="description"
          content="Welcome to the official website of Kavish Ambani showcasing projects, blogs, and insights."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.kavishambani.in/" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/public/vercel.svg" />

        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4213724490364096"
          crossOrigin="anonymous"
        ></script>
        <meta
          name="google-adsense-account"
          content="ca-pub-4213724490364096"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kavishambani.in" />
        <meta property="og:title" content="Kavish Ambani - Personal Website" />
        <meta
          property="og:description"
          content="Welcome to the official website of Kavish Ambani showcasing projects, blogs, and insights."
        />
        <meta property="og:image" content="https://kavishambani.in/globe.svg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kavish Ambani - Personal Website" />
        <meta
          name="twitter:description"
          content="Welcome to the official website of Kavish Ambani showcasing projects, blogs, and insights."
        />
        <meta
          name="twitter:image"
          content="https://kavishambani.in/globe.svg"
        />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Kavish Ambani",
              url: "https://kavishambani.in",
              sameAs: [
                "https://x.com/KavishAmbani",
                "https://www.linkedin.com/in/kavish-ambani/",
                "https://github.com/kavish224",
                "https://www.instagram.com/kavish_ambani_22/",
              ],
              description:
                "Welcome to the official website of Kavish Ambani showcasing projects, blogs, and insights.",
              jobTitle: "Web Developer",
              worksFor: {
                "@type": "Organization",
                name: "Self-Employed",
              },
              knowsAbout: [
                "Web Development",
                "Stock Analytics",
                "Software Engineering",
              ],
            }),
          }}
        />
      </Head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
