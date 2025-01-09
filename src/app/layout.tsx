import "./globals.css";

export const metadata = {
  metadataBase: new URL('https://kavishambani.in'),
  title: 'Kavish Ambani - Personal Website',
  description: 'Official website of Kavish Ambani.',
  openGraph: {
    type: 'website',
    url: 'https://kavishambani.in',
    title: 'Kavish Ambani - Personal Website',
    description: 'Welcome to the official website of Kavish Ambani.',
    images: [
      {
        url: '/public/globe.svg', // Replace with your actual image URL
        alt: 'Kavish Ambani',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <link rel="canonical" href="https://www.kavishambani.in/" />
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
                "https://www.instagram.com/kavish_ambani_22/"
              ],
              description:
                "Welcome to the official website of Kavish Ambani showcasing projects, blogs, and insights.",
              jobTitle: "Web Developer",
              worksFor: {
                "@type": "Organization",
                name: "Your Current Company or Self-Employed",
              },
              knowsAbout: [
                "Web Development",
                "Stock Analytics",
                "Software Engineering",
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
