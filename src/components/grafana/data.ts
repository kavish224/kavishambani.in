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
  // Exact Grafana palette.ts: greenDarkText, blueDarkText, fade2a (yellow), orangeDarkMain
  { label: "Projects Deployed", sublabel: "total", value: 10, color: "#6ccf8e", suffix: "+" },
  { label: "CI/CD Pipelines", sublabel: "pipelines built", value: 10, color: "#6e9fff", suffix: "+" },
  { label: "Uptime Achieved", sublabel: "avg availability", value: 99.9, color: "#fade2a", suffix: "%" },
  { label: "Containers Managed", sublabel: "docker + k8s pods", value: 50, color: "#ff9900", suffix: "+" },
];

export const SKILLS = [
  // Colors from Grafana's classic visualization palette (palette-classic series)
  { name: "Docker", pct: 85, color: "#5794F2" }, // classic blue series 5
  { name: "Kubernetes", pct: 75, color: "#73BF69" }, // classic green series 2
  { name: "Grafana Stack", pct: 90, color: "#FF9830" }, // Grafana brand orange
  { name: "GitLab CI/CD", pct: 80, color: "#F2495C" }, // classic red series 4
  { name: "AWS", pct: 70, color: "#FADE2A" }, // classic yellow series 1
  { name: "Linux", pct: 85, color: "#8AB8FF" }, // classic light-blue series 6
  { name: "Prometheus", pct: 80, color: "#FF780A" }, // orangeDarkText (Prometheus red-orange)
  { name: "Bash / Python", pct: 70, color: "#B877D9" }, // classic purple series 7
];

export const PROJECTS = [
  { ts: "2025-03-08 14:23:01", level: "deploy" as const, msg: "K8s Multi-Node Cluster — Production-grade cluster with EKS as well as Baremetal K0s, Cilium CNI, Ingress controllers, HPA auto-scaling", tag: "kubernetes" },
  { ts: "2025-03-05 10:15:42", level: "build" as const, msg: "GitLab CI/CD Pipeline — Lint → Test → Docker build → ECR push → EKS deploy with rolling updates and rollback", tag: "gitlab-ci" },
  { ts: "2025-02-28 09:30:15", level: "success" as const, msg: "Grafana Monitoring Stack — Prometheus + Loki + Tempo + Pyroscope Grafana dashboards with custom alerting and SLO tracking", tag: "monitoring" },
  { ts: "2025-02-20 16:45:33", level: "deploy" as const, msg: "AWS Infrastructure — EC2, RDS, S3, EKS, Security groups, IAM roles, cost optimization", tag: "aws" },
  { ts: "2025-02-14 11:20:08", level: "info" as const, msg: "Docker Compose Microservices — Containerized multi-service app: frontend, backend, Redis, PostgreSQL", tag: "docker" },
  { ts: "2025-01-18 13:40:51", level: "success" as const, msg: "Log Metrics and Traces Aggregation Pipeline — Alloy → Loki, Prometheus, Tempo → Grafana, 1Million+ log lines/day, structured parsing, anomaly alerts", tag: "observability" },
  { ts: "2025-01-05 07:10:39", level: "deploy" as const, msg: "Nginx Reverse Proxy — SSL termination, rate limiting, load balancing, custom error pages", tag: "networking" },
];

export const EXPERIENCE = [
  {
    date: "July 2025 — Present",
    role: "DevOps Intern",
    org: "Meditab Software Inc., Ahmedabad, Gujarat",
    desc: "Docker, Kubernetes, Grafana stack monitoring, GitLab CI/CD pipelines, AWS cloud infrastructure. Building and maintaining production-grade deployment workflows.",
    status: "active" as const,
  },
  {
    date: "2022 — 2026",
    role: "B.Tech Computer Science",
    org: "Parul University, Vadodara, Gujarat",
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
  { name: "Ansible", badge: "ansible", category: "Config Management", level: "Beginner", active: false },
  { name: "Linux", badge: "linux", category: "OS", level: "Advanced", active: true },
];

export const AVAILABILITY = [
  { name: "Learning", pct: "100%", segments: Array(30).fill("up" as const) },
  { name: "Collaboration", pct: "99.5%", segments: (() => { const a = Array(30).fill("up" as const); a[11] = "partial"; a[23] = "partial"; return a; })() },
  { name: "Coffee Intake", pct: "200%", segments: Array(30).fill("down" as const) },
];

export const CONTACT = {
  email: "kavishkkambani@gmail.com",
  github: { url: "https://github.com/kavish224", handle: "kavish224" },
  linkedin: { url: "https://www.linkedin.com/in/kavish-ambani", handle: "kavish-ambani" },
  location: "Ahmedabad, Gujarat, India",
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
