// ═══ All portfolio data in one place — edit this to update your dashboard ═══

export const PROFILE = {
  name: "Kavish Ambani",
  title: "DevOps Intern",
  dashboardSlug: "kavish-ambani-portfolio",
  tags: [
    { text: "devops", color: "blue" as const },
    { text: "open-to-work", color: "green" as const },
    { text: "intern-2025", color: "orange" as const },
  ],
  variable: "env = production",
};

export const STATS = [
  { label: "Projects Deployed", sublabel: "total", value: 12, color: "var(--gf-green)", suffix: "" },
  { label: "CI/CD Pipelines", sublabel: "pipelines built", value: 25, color: "var(--gf-blue)", suffix: "" },
  { label: "Uptime Achieved", sublabel: "avg availability", value: 99.9, color: "var(--gf-yellow)", suffix: "%" },
  { label: "Containers Managed", sublabel: "docker + k8s pods", value: 50, color: "var(--gf-orange)", suffix: "+" },
];

export const SKILLS = [
  { name: "Docker", pct: 85, color: "#2496ed" },
  { name: "Kubernetes", pct: 75, color: "#326ce5" },
  { name: "Grafana Stack", pct: 90, color: "#ff6600" },
  { name: "GitLab CI/CD", pct: 80, color: "#fc6d26" },
  { name: "AWS", pct: 70, color: "#ff9900" },
  { name: "Linux", pct: 85, color: "#fade2a" },
  { name: "Prometheus", pct: 80, color: "#e6522c" },
  { name: "Bash / Python", pct: 70, color: "#b877d9" },
];

export const PROJECTS = [
  { ts: "2025-03-08 14:23:01", level: "deploy" as const, msg: "K8s Multi-Node Cluster — Production-grade cluster with Kubeadm, Calico CNI, Ingress controllers, HPA auto-scaling", tag: "kubernetes" },
  { ts: "2025-03-05 10:15:42", level: "build" as const, msg: "GitLab CI/CD Pipeline — Lint → Test → Docker build → ECR push → EKS deploy with rolling updates and rollback", tag: "gitlab-ci" },
  { ts: "2025-02-28 09:30:15", level: "success" as const, msg: "Grafana Monitoring Stack — Prometheus + Loki + Grafana dashboards with custom alerting and SLO tracking", tag: "monitoring" },
  { ts: "2025-02-20 16:45:33", level: "deploy" as const, msg: "AWS Infrastructure — VPC, EC2, RDS, S3, CloudFront via IaC. Security groups, IAM roles, cost optimization", tag: "aws" },
  { ts: "2025-02-14 11:20:08", level: "info" as const, msg: "Docker Compose Microservices — Containerized multi-service app: API gateway, backend, Redis, PostgreSQL", tag: "docker" },
  { ts: "2025-02-01 08:55:27", level: "build" as const, msg: "Automated Backup System — Cron pipeline for DB + volume backups, S3 lifecycle, encryption, Slack alerts", tag: "automation" },
  { ts: "2025-01-18 13:40:51", level: "success" as const, msg: "Log Aggregation Pipeline — Fluentd → Loki → Grafana, 100k+ log lines/day, structured parsing, anomaly alerts", tag: "logging" },
  { ts: "2025-01-05 07:10:39", level: "deploy" as const, msg: "Nginx Reverse Proxy — SSL termination, rate limiting, load balancing, custom error pages", tag: "networking" },
];

export const EXPERIENCE = [
  {
    date: "2024 — Present",
    role: "DevOps Intern",
    org: "Current Organization",
    desc: "Docker, Kubernetes, Grafana stack monitoring, GitLab CI/CD pipelines, AWS cloud infrastructure. Building and maintaining production-grade deployment workflows.",
    status: "active" as const,
  },
  {
    date: "2023 — 2024",
    role: "Learning & Building",
    org: "Self-directed / Coursework",
    desc: "Deep-dived into containerization, IaC, Linux administration, and cloud-native technologies. Built personal lab environments.",
    status: "done" as const,
  },
  {
    date: "2022 — 2026",
    role: "B.Tech Computer Science",
    org: "Parul University, Gujarat",
    desc: "Linux fundamentals, networking, Bash/Python scripting, Git version control, DSA, full-stack development.",
    status: "done" as const,
  },
];

export const TECH_STACK = [
  { name: "Docker", badge: "docker", category: "Containerization", level: "Advanced", active: true },
  { name: "Kubernetes", badge: "k8s", category: "Orchestration", level: "Intermediate", active: true },
  { name: "Grafana", badge: "grafana", category: "Monitoring", level: "Advanced", active: true },
  { name: "Prometheus", badge: "prometheus", category: "Metrics", level: "Intermediate", active: true },
  { name: "GitLab CI/CD", badge: "gitlab", category: "Pipelines", level: "Advanced", active: true },
  { name: "AWS", badge: "aws", category: "Cloud", level: "Intermediate", active: true },
  { name: "Terraform", badge: "terraform", category: "IaC", level: "Beginner", active: false },
  { name: "Ansible", badge: "ansible", category: "Config Mgmt", level: "Beginner", active: false },
  { name: "Linux", badge: "linux", category: "OS", level: "Advanced", active: true },
];

export const AVAILABILITY = [
  { name: "Hiring", pct: "99.9%", segments: Array(30).fill("up" as const) },
  { name: "Learning", pct: "100%", segments: Array(30).fill("up" as const) },
  { name: "Collaboration", pct: "99.5%", segments: (() => { const a = Array(30).fill("up" as const); a[11] = "partial"; a[23] = "partial"; return a; })() },
  { name: "Coffee Intake", pct: "100%", segments: Array(30).fill("up" as const) },
];

export const CONTACT = {
  email: "kavish@kavishambani.in",
  github: { url: "https://github.com/kavish224", handle: "kavish224" },
  linkedin: { url: "https://www.linkedin.com/in/kavish-ambani", handle: "kavish-ambani" },
  location: "Gujarat, India",
};

export const TIME_RANGES = [
  "Last 5 minutes",
  "Last 15 minutes",
  "Last 30 minutes",
  "Last 1 hour",
  "Last 3 hours",
  "Last 6 hours",
  "Last 12 hours",
  "Last 24 hours",
  "Last 2 days",
  "Last 7 days",
  "Last 30 days",
  "Since first docker run",
  "Since first kubectl",
  "All time ∞",
];
