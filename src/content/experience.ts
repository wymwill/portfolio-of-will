export type ExperienceEntry = {
  archiveNo: string;
  side: "technical" | "cultural";
  year: string;
  dateLabel: string;
  organization: string;
  role: string;
  summary: string;
  bullets: string[];
  tags: string[];
};

export const EXPERIENCE: ExperienceEntry[] = [
  {
    archiveNo: "EXP-001",
    side: "technical",
    year: "2026",
    dateLabel: "May 2026 – Aug 2026",
    organization: "The MITRE Corporation",
    role: "Software Engineering Intern · Bedford, MA",
    summary:
      "Built high-throughput translation infrastructure for high-compliance systems inside a secure, production CI/CD environment.",
    bullets: [
      "Decreased translation retrieval latency by 30% by engineering high-throughput RESTful API endpoints, backed by rigorous unit test suites, that ingest streaming data from a Redis priority queue.",
      "Automated real-time data transfers across high-compliance systems by architecting an on-demand microservice translation pipeline with Vue.js, Python, and the BlackSheep asynchronous API framework.",
      "Delivered production-ready features within a secure CI/CD pipeline, collaborating in a 10-person Agile team through Git-based peer code reviews.",
    ],
    tags: ["Python", "Vue.js", "Redis", "REST APIs", "BlackSheep", "CI/CD"],
  },
  {
    archiveNo: "EXP-002",
    side: "technical",
    year: "2025",
    dateLabel: "Sep 2025 – Present",
    organization: "IEEE Intelligent Ground Vehicle Competition",
    role: "Lead Programmer · Rutgers University",
    summary:
      "Directing the autonomy software for a full-scale outdoor ground vehicle — perception, mapping, and navigation across a ROS 2 pipeline.",
    bullets: [
      "Mitigated navigation errors by designing autonomous path-finding and localized spatial mapping systems using OpenCV edge-detection logic to detect physical obstacle fields.",
      "Streamlined sensor integration across complex hardware by deploying custom object perception and LiDAR tracking pipelines with ROS 2 and Gazebo in Linux environments.",
    ],
    tags: ["ROS 2", "Gazebo", "OpenCV", "LiDAR", "Linux"],
  },
  {
    archiveNo: "EXP-003",
    side: "cultural",
    year: "2025",
    dateLabel: "Sep 2025 – Present",
    organization: "Chinese Student Organization",
    role: "Treasurer · Rutgers University",
    summary:
      "Stewarding the finances and large-scale event operations of one of Rutgers' biggest cultural communities.",
    bullets: [
      "Manage $20,000+ of operational budgets, planning, and financial allocations from Rutgers University.",
      "Execute high-capacity community and charity initiatives — running on-site logistics and registration pipelines for 400+ attendees at events year-round.",
    ],
    tags: ["Budgeting", "Event Operations", "Community", "Logistics"],
  },
  {
    archiveNo: "EXP-004",
    side: "cultural",
    year: "2025",
    dateLabel: "Aug 2025 – May 2029 (expected)",
    organization: "Rutgers University — Honors School of Engineering",
    role: "B.S. Electrical & Computer Engineering and Computer Science",
    summary:
      "Joined the honors engineering community in New Brunswick — dual-degree study across hardware and software. GPA 3.72.",
    bullets: [
      "Coursework: Data Structures, Data Management, Linear Algebra, Probability, Discrete Mathematics.",
    ],
    tags: ["Honors College", "ECE", "Computer Science"],
  },
  {
    archiveNo: "EXP-005",
    side: "technical",
    year: "2024",
    dateLabel: "Jul 2024 – Aug 2024",
    organization: "NJ Governor's School of Engineering & Technology",
    role: "Research Scholar · New Brunswick, NJ",
    summary:
      "Path-planning research on autonomous navigation, carried through to a peer-reviewed conference presentation.",
    bullets: [
      "Optimized path-planning vectors against real-world telemetry constraints by evaluating A* and RRT* graph algorithms inside a custom Python and Pygame testing framework.",
      "Validated autonomous navigation simulation models by co-authoring a technical research paper presented at the peer-reviewed MIT Undergraduate Research Technology Conference (URTC).",
    ],
    tags: ["A*", "RRT*", "Python", "Simulation", "Research"],
  },
];
