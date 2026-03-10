import type { Metadata } from "next";
import GrafanaDashboard from "@/components/grafana/GrafanaDashboard";

export const metadata: Metadata = {
  title: "Kavish Ambani - DevOps Engineer | Portfolio",
  description:
    "Welcome to Kavish Ambani's official personal website. Explore web development projects, blogs, and contact info. Also known as kavishambani online.",
  keywords: [
    "Kavish Ambani",
    "kavishambani",
    "DevOps Engineer",
    "Docker",
    "Kubernetes",
    "Grafana",
    "CI/CD",
    "AWS",
    "Portfolio",
  ],
  openGraph: {
    title: "Kavish Ambani — DevOps Portfolio",
    description:
      "Kavish Ambani's portfolio — presented as a Grafana dashboard. Docker, Kubernetes, CI/CD, AWS, and monitoring expertise.",
    url: "https://www.kavishambani.in/",
    siteName: "kavishambani.in",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kavish Ambani — DevOps Portfolio",
    description:
      "Kavish Ambani's portfolio — presented as a Grafana dashboard. Docker, Kubernetes, CI/CD, AWS, and monitoring expertise.",
  },
  alternates: {
    canonical: "https://www.kavishambani.in/",
  },
};

export default function Home() {
  return <GrafanaDashboard />;
}
