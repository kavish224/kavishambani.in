import type { Metadata } from "next";
import GrafanaDashboard from "@/components/grafana/GrafanaDashboard";

export const metadata: Metadata = {
  title: "Portfolio — Kavish Ambani | DevOps Dashboard",
  description:
    "Explore Kavish Ambani's DevOps portfolio — presented as a Grafana dashboard. Docker, Kubernetes, CI/CD, AWS, and monitoring expertise.",
};

export default function PortfolioPage() {
  return <GrafanaDashboard />;
}
