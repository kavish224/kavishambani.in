import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import { ReactNode } from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kavishambani.in"),
  title: {
    default: "Kavish Ambani | DevOps Engineer",
    template: "%s | Kavish Ambani",
  },
  description:
    "Kavish Ambani — DevOps Engineer specializing in Docker, Kubernetes, Grafana, Prometheus, GitLab CI/CD, and AWS. Explore Kavish's portfolio, projects, and open-source work.",
  keywords: [
    "Kavish Ambani",
    "Kavish",
    "kavishambani",
    "kavish ambani portfolio",
    "DevOps Engineer",
    "DevOps Intern",
    "Docker",
    "Kubernetes",
    "Grafana",
    "Prometheus",
    "GitLab CI/CD",
    "AWS",
    "Terraform",
    "Ansible",
    "Linux",
    "Ahmedabad",
    "Gujarat",
    "India",
  ],
  authors: [{ name: "Kavish Ambani", url: "https://www.kavishambani.in" }],
  creator: "Kavish Ambani",
  publisher: "Kavish Ambani",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://www.kavishambani.in/",
  },
  openGraph: {
    type: "website",
    url: "https://www.kavishambani.in",
    siteName: "Kavish Ambani",
    title: "Kavish Ambani | DevOps Engineer",
    description:
      "Kavish Ambani — DevOps Engineer specializing in Docker, Kubernetes, Grafana, Prometheus, GitLab CI/CD, and AWS. Explore Kavish's portfolio, projects, and open-source work.",
    images: [
      {
        url: "/grafana.svg",
        width: 1200,
        height: 630,
        alt: "Kavish Ambani — DevOps Engineer Portfolio",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    site: "@KavishAmbani",
    creator: "@KavishAmbani",
    title: "Kavish Ambani | DevOps Engineer",
    description:
      "Kavish Ambani — DevOps Engineer specializing in Docker, Kubernetes, Grafana, Prometheus, GitLab CI/CD, and AWS.",
    images: ["/grafana.svg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/grafana.svg",
  },
  other: {
    "google-adsense-account": "ca-pub-4213724490364096",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kavish Ambani",
  alternateName: ["kavishambani", "Kavish", "kavish ambani"],
  givenName: "Kavish",
  familyName: "Ambani",
  url: "https://www.kavishambani.in",
  image: "https://www.kavishambani.in/grafana.svg",
  sameAs: [
    "https://x.com/KavishAmbani",
    "https://www.linkedin.com/in/kavish-ambani/",
    "https://github.com/kavish224",
    "https://www.instagram.com/kavish_ambani_22/",
  ],
  description:
    "Kavish Ambani is a DevOps Engineer specializing in Docker, Kubernetes, Grafana monitoring stack, Prometheus, GitLab CI/CD pipelines, and AWS cloud infrastructure.",
  jobTitle: "DevOps Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Meditab Software Inc.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  knowsAbout: [
    "DevOps",
    "Docker",
    "Kubernetes",
    "Grafana",
    "Prometheus",
    "GitLab CI/CD",
    "AWS",
    "Terraform",
    "Ansible",
    "Linux",
    "Infrastructure as Code",
    "Observability",
    "CI/CD Pipelines",
    "Containerization",
    "Site Reliability Engineering",
  ],
  email: "kavishkkambani@gmail.com",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <main>{children}</main>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4213724490364096"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
