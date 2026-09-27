import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  ArrowLeft,
  Github,
  Linkedin,
  Check,
  ChevronDown,
  Diamond,
  BookOpen,
  BriefcaseBusiness,
  ChevronRight,
  Code2,
  Cpu,
  Crown,
  Database,
  Download,
  ExternalLink,
  FlaskConical,
  GraduationCap,
  Mail,
  Network,
  Search,
  Shield,
  Sparkles,
  Swords,
  Trophy,
  Users,
  UserRound,
  Plus,
  X,
  Zap,
} from "lucide-react";
export const Route = createFileRoute("/")({ component: Portfolio });
const projects = [
  {
    name: "Teamfight Tactics Teacher",
    short: "TFT Teacher",
    type: "Systems",
    icon: Swords,
    color: "cyan",
    date: "May 2026",
    tag: "50+ metrics / match",
    tech: ["C++", "Python", "Redis", "REST APIs"],
    desc: "A real-time companion that turns match data into better decisions.",
    details:
      "Architected a C++ ingestion pipeline with a custom Redis-style in-memory store, strict API rate limits, and an asynchronous analytics engine. Processes 50+ statistical fields per match and serves computed metrics over a JSON/HTTP socket interface to a Python dashboard.",
  },
  {
    name: "RUOnCampus",
    short: "RUOnCampus",
    type: "Full stack",
    icon: Network,
    color: "gold",
    date: "Jan 2026 – May 2026",
    tag: "< 40ms search",
    tech: ["React", "Express.js", "Supabase", "PostgreSQL"],
    desc: "Making the search for a place at Rutgers feel a little more like home.",
    details:
      "Built a full-stack off-campus housing marketplace with token-based authentication and relational schemas across eight tables. Search queries run in under 40ms; a unified listing composer with React Context and debounced lookups reduced onboarding drop-offs by 25%.",
  },
  {
    name: "Angry Signing Llama",
    short: "Signing Llama",
    type: "Computer vision",
    icon: Sparkles,
    color: "violet",
    date: "Feb 2026",
    tag: "97% recognition",
    tech: ["Python", "FastAPI", "TensorFlow", "MediaPipe"],
    desc: "Bringing sign recognition to life through real-time computer vision.",
    details:
      "Trained convolutional neural networks to recognize 35 unique signs with 97% accuracy. MediaPipe extracts structural body nodes, while low-latency web sockets connect computer vision microservices to a JavaScript frontend for sub-second inference.",
  },
  {
    name: "Imposture",
    short: "Imposture",
    type: "Hardware",
    icon: Cpu,
    color: "green",
    date: "Mar 2026",
    tag: "Real-time feedback",
    tech: ["Python", "OpenCV", "Arduino", "C++"],
    desc: "Computer vision meets physical computing. Better posture follows.",
    details:
      "Built a streaming computer-vision system that detects ergonomic slouching thresholds and triggers physical correction alerts. A synchronous C++ serial interface sends MediaPipe coordinate flags to an external Arduino hardware network.",
  },
  {
    name: "Viand",
    short: "Viand",
    type: "Full stack",
    icon: Users,
    color: "green",
    date: "Jul 2026",
    tag: "Group dining assistant",
    tech: ["Next.js", "TypeScript", "React", "Claude API", "Telegram Bot API"],
    desc: "Helping group chats decide where to eat together.",
    details:
      "Built a Next.js and React TypeScript dining messaging service for iMessage and Telegram groups. Uses OpenStreetMap's Overpass API and Claude APIs to find dining options within a five-mile radius.",
  },
];
const experiences = [
  {
    name: "The MITRE Corporation",
    role: "Software Engineering Intern",
    date: "May – Aug 2026",
    icon: Shield,
    stat: "30%",
    label: "lower retrieval latency",
    text: "Engineered high-throughput REST APIs and a Redis streaming-data pipeline. Built an on-demand translation microservice with Vue.js, Python, and BlackSheep, delivering tested features with a 12-engineer Agile team.",
    skills: "Python · Vue.js · Redis · CI/CD",
  },
  {
    name: "Governor’s School",
    role: "Research Scholar",
    date: "Jul – Aug 2024",
    icon: FlaskConical,
    stat: "MIT URTC",
    label: "research presentation",
    text: "Evaluated A* and RRT* path-planning algorithms against real-world telemetry in a custom Python and Pygame framework. Co-authored a technical paper presented at MIT’s Undergraduate Research Technology Conference.",
    skills: "Python · Pygame · Graph algorithms",
  },
  {
    name: "IEEE · IGVC",
    role: "Lead Programmer",
    date: "Sep 2025 – Present",
    icon: Cpu,
    stat: "Autonomy",
    label: "perception to navigation",
    text: "Designing autonomous path-finding and localized spatial mapping for the Intelligent Ground Vehicle Competition. Integrating OpenCV obstacle detection, LiDAR tracking, ROS 2, and Gazebo on Linux.",
    skills: "ROS 2 · OpenCV · Linux · Gazebo",
  },
  {
    name: "Chinese Student Org.",
    role: "Treasurer",
    date: "Sep 2025 – Present",
    icon: Users,
    stat: "400+",
    label: "event attendees",
    text: "Managing $20,000+ in budget planning and financial allocations at Rutgers. Coordinating registration and on-site logistics for community and charity events throughout the year.",
    skills: "Leadership · Operations · Budgeting",
  },
];
const skills = [
  {
    name: "Python",
    group: "Languages",
    icon: Code2,
    proof: "MITRE · TFT Teacher · Computer vision",
    text: "Asynchronous APIs, analytics, research simulations, and real-time vision pipelines.",
  },
  {
    name: "C++",
    group: "Languages",
    icon: Code2,
    proof: "TFT Teacher · Imposture",
    text: "In-memory storage, socket interfaces, concurrent analytics, and Arduino serial communication.",
  },
  {
    name: "React",
    group: "Frameworks",
    icon: Network,
    proof: "RUOnCampus",
    text: "Multi-step user flows, shared state with Context, and debounced search interfaces.",
  },
  {
    name: "PostgreSQL",
    group: "Infrastructure",
    icon: Database,
    proof: "RUOnCampus",
    text: "Relational design across eight tables, with search query speeds under 40ms.",
  },
  {
    name: "OpenCV",
    group: "Frameworks",
    icon: Sparkles,
    proof: "Signing Llama · Imposture · IGVC",
    text: "TensorFlow, MediaPipe, and OpenCV for sign recognition, pose estimation, and obstacle detection.",
  },
  {
    name: "Redis",
    group: "Infrastructure",
    icon: Database,
    proof: "MITRE · TFT Teacher",
    text: "Streaming priority queues and custom Redis-style in-memory data ingestion.",
  },
  {
    name: "TypeScript",
    group: "Systems",
    icon: Network,
    proof: "Viand",
    text: "Typed React and Next.js application development for a group dining assistant.",
  },
  {
    name: "TensorFlow",
    group: "Systems",
    icon: Cpu,
    proof: "Angry Signing Llama",
    text: "Real-time sign recognition and machine-learning inference for a web application.",
  },
  {
    name: "Vue.js",
    group: "Frameworks",
    icon: Network,
    proof: "MITRE",
    text: "Interfaces for on-demand microservice translation workflows.",
  },
  {
    name: "Git",
    group: "Infrastructure",
    icon: Shield,
    proof: "MITRE",
    text: "Peer code review and production delivery inside a secure CI/CD pipeline.",
  },
  {
    name: "JavaScript",
    group: "Languages",
    icon: Code2,
    proof: "RUOnCampus · Signing Llama",
    text: "Full-stack application development and low-latency browser interfaces.",
  },
  {
    name: "FastAPI",
    group: "Frameworks",
    icon: Zap,
    proof: "Signing Llama",
    text: "Python services connecting real-time inference to a web frontend.",
  },
];
type Menu = "Lobby" | "Profile" | "Projects" | "History" | "Contact";
const art = ["jayce", "ryze", "heimerdinger", "ekko", "orianna"];
const party = [
  ...experiences,
  {
    name: "Rutgers University",
    role: "Honors Engineering Student",
    date: "Rutgers University",
    icon: GraduationCap,
    stat: "3.74",
    label: "GPA",
    text: "B.S. Electrical & Computer Engineering and Computer Science. Coursework includes Data Structures, Data Management, Linear Algebra, Probability, and Discrete Mathematics.",
    skills: "ECE · Computer Science · Research",
  },
];
function Crest({ index = 0, large = false }: { index?: number; large?: boolean }) {
  const Icon = party[index % 5].icon;
  return (
    <div className={`crest crest-${index % 5} ${large ? "large" : ""}`}>
      <div className="wing left" />
      <div className="wing right" />
      <div className="crest-diamond" />
      <div className="crest-ring">
        <Icon size={large ? 42 : 32} strokeWidth={1.5} />
      </div>
      <div className="crest-point" />
    </div>
  );
}
function Portfolio() {
  const [rolePicker, setRolePicker] = useState<number | null>(null);
  const [roles, setRoles] = useState(["Engineering", "Any role"]);
  const [pageHistory, setPageHistory] = useState<Menu[]>([]);
  const [menu, setMenu] = useState<Menu>("Lobby");
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("Newest first");
  const [skill, setSkill] = useState(0);
  const [masteryOpen, setMasteryOpen] = useState(false);
  const skillPoints = [
    92000, 78000, 58000, 52000, 84000, 68000, 81000, 75000, 44000, 57000, 62000, 49000,
  ];
  const [modal, setModal] = useState<{ title: string; text: string; tags?: string[] } | null>(null);
  const go = (m: Menu) => {
    if (m === menu) return;
    setPageHistory((history) => [...history, menu]);
    setMenu(m);
    setMasteryOpen(false);
    setFilter("All");
    setQuery("");
  };
  useEffect(() => {
    if (!modal) return;
    const last = document.activeElement as HTMLElement | null;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModal(null);
      if (e.key === "Tab") {
        const nodes = Array.from(
          document.querySelectorAll<HTMLElement>('[role="dialog"] button,[role="dialog"] a'),
        );
        if (e.shiftKey && document.activeElement === nodes[0]) {
          e.preventDefault();
          nodes.at(-1)?.focus();
        } else if (!e.shiftKey && document.activeElement === nodes.at(-1)) {
          e.preventDefault();
          nodes[0]?.focus();
        }
      }
    };
    document.addEventListener("keydown", handler);
    return () => {
      document.removeEventListener("keydown", handler);
      last?.focus();
    };
  }, [modal]);
  const contact = () => go("Contact");
  const aboutMe = () =>
    setModal({
      title: "Will Wands",
      text: "I’m an Electrical & Computer Engineering and Computer Science student at Rutgers University’s Honors School of Engineering. I build real-time systems, full-stack products, and autonomous robots. I’ve worked as a software engineering intern at MITRE, lead programming for Rutgers’ IEEE Intelligent Ground Vehicle Competition team, and serve as treasurer of the Chinese Student Organization. I enjoy turning complex problems into useful things and working with people who are curious about what comes next.",
      tags: ["South Plainfield, NJ", "Rutgers University"],
    });
  const projectDates: Record<string, number> = {
    Viand: 202607,
    "Teamfight Tactics Teacher": 202605,
    RUOnCampus: 202605,
    Imposture: 202603,
    "Angry Signing Llama": 202602,
  };
  const roleDates: Record<string, number> = {
    "The MITRE Corporation": 202608,
    "IEEE · IGVC": 202609,
    "Chinese Student Org.": 202609,
    "Governor’s School": 202408,
    "Rutgers University": 0,
  };
  const skillLogos = [
    "python",
    "cplusplus",
    "react",
    "postgresql",
    "opencv",
    "redis",
    "typescript",
    "tensorflow",
    "vuejs",
    "git",
    "javascript",
    "fastapi",
  ];
  const collection = projects.map((p, i) => ({
    name: p.name,
    category: p.type,
    description: p.details,
    tags: p.tech,
    i,
    Icon: p.icon,
  }));
  const shown = collection
    .filter(
      (c) =>
        (filter === "All" || filter === c.category) &&
        (c.name + " " + c.tags.join(" ")).toLowerCase().includes(query.toLowerCase()),
    )
    .sort((a, b) =>
      sort === "A–Z" ? a.name.localeCompare(b.name) : projectDates[b.name] - projectDates[a.name],
    );
  return (
    <div className="league-shell">
      <header className="client-header">
        <button className="league-mark" aria-label="Home" onClick={() => go("Lobby")}>
          <svg className="brand-monogram" viewBox="0 0 48 48" aria-hidden="true">
            <path className="brand-frame" d="M7 4h34v40H7z" />
            <path className="brand-inlay" d="M11 8h26v32H11z" />
            <path
              className="brand-letter"
              d="m10 12 6 24h5l3-12 3 12h5l6-24h-6l-3 15-3-12h-4l-3 12-3-15z"
            />
          </svg>
        </button>
        <button className="play" onClick={() => go("Lobby")}>
          <Swords size={19} /> PARTY
        </button>
        <nav aria-label="Client navigation">
          <button className={menu === "Lobby" ? "active" : ""} onClick={() => go("Lobby")}>
            HOME
          </button>
          <button className={menu === "Profile" ? "active" : ""} onClick={() => go("Profile")}>
            PROFILE
          </button>
          <button className={menu === "Projects" ? "active" : ""} onClick={() => go("Projects")}>
            COLLECTION
          </button>
        </nav>
        <nav className="icon-nav social-links" aria-label="Professional links">
          <a
            href="https://www.linkedin.com/in/wowands"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <Linkedin />
          </a>
          <a
            href="https://github.com/wymwill"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <Github />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resume"
            title="Resume"
          >
            <BookOpen />
          </a>
        </nav>
        <button className="account" aria-label="Will Wands profile" onClick={() => go("Profile")}>
          <img src="/will-avatar.png" alt="" />
          <span>
            Will Wands
            <small>
              <i /> Online
            </small>
          </span>
        </button>
      </header>
      <div className="client-center">
        <main key={menu} className={"game-area screen-" + menu.toLowerCase()}>
          {menu !== "Lobby" && (
            <nav className="collection-tabs stable-tabs" aria-label="Portfolio sections">
              <button
                className="page-back"
                aria-label="Back to previous page"
                title="Back"
                onClick={() => {
                  setMenu(pageHistory[pageHistory.length - 1] ?? "Lobby");
                  setPageHistory((history) => history.slice(0, -1));
                  setMasteryOpen(false);
                  setRolePicker(null);
                  setFilter("All");
                  setQuery("");
                }}
              >
                <ArrowLeft size={16} />
              </button>
              {(
                [
                  { label: "OVERVIEW", target: "Profile" },
                  { label: "EXPERIENCES", target: "History" },
                  { label: "PROJECTS", target: "Projects" },
                  { label: "CONTACT", target: "Contact" },
                ] as const
              ).map((item) => (
                <button
                  key={item.target}
                  aria-current={menu === item.target ? "page" : undefined}
                  className={menu === item.target ? "active" : ""}
                  onClick={() => go(item.target)}
                >
                  {item.label}
                </button>
              ))}
              <a href="/resume.pdf" target="_blank" rel="noreferrer">
                RESUME
              </a>
            </nav>
          )}
          {menu === "Lobby" && (
            <>
              <div className="lobby-heading">
                <span className="queue-icon">
                  <Code2 size={21} />
                </span>
                <strong>PORTFOLIO · PARTY LOBBY</strong>
                <span className="queue-diamond" aria-hidden="true">
                  <Diamond size={13} />
                </span>
                <button onClick={() => go("Profile")}>
                  VIEW PROFILE <ChevronRight size={13} />
                </button>
              </div>
              <div className="party-banners">
                {[0, 1, 2, 3, 4].map((i) =>
                  i === 2 ? (
                    <button
                      className="party-banner solo-player lobby-owner"
                      key={i}
                      onClick={aboutMe}
                      aria-label="About Will Wands"
                    >
                      <BannerOutline />
                      <div className="reference-avatar">
                        <img
                          className="reference-portrait"
                          src="/headshot-will.png"
                          alt="Will Wands"
                        />
                      </div>
                      <h2>
                        <Crown size={14} /> Will Wands
                      </h2>
                      <p className="player-title">Rutgers University</p>
                      <div className="rune-row" aria-hidden="true">
                        <span />
                        <span />
                        <span />
                      </div>
                      <span className="inspect-player">
                        ABOUT ME <ChevronRight size={11} />
                      </span>
                    </button>
                  ) : (
                    <div className="open-party-position" key={i}>
                      <button
                        className="empty-slot-plus"
                        onClick={contact}
                        aria-label="Invite to party"
                      >
                        <Plus size={24} />
                      </button>
                    </div>
                  ),
                )}
              </div>
              <div className="lobby-bottom">
                <div className="lobby-chat">
                  <p>
                    <b>System:</b> Welcome to Will’s portfolio.
                  </p>
                  <p>
                    <b>Will:</b> Engineer. Programmer. Your next teammate.
                  </p>
                  <button onClick={contact}>
                    <Mail size={13} /> Send a message…
                  </button>
                </div>
                <div className="queue-control">
                  <span>
                    <Shield size={12} /> Open to conversations
                  </span>
                  <div className="queue-actions">
                    <button className="find-match" onClick={contact}>
                      <svg
                        className="queue-button-frame"
                        viewBox="0 0 200 48"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                      >
                        <defs>
                          <linearGradient id="queue-fill" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0" stopColor="#12384b" />
                            <stop offset="0.7" stopColor="#0a2535" />
                            <stop offset="1" stopColor="#1595b1" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M18 2H182L197 39Q100 55 3 39Z"
                          fill="url(#queue-fill)"
                          stroke="#66cada"
                          strokeWidth="2"
                          vectorEffect="non-scaling-stroke"
                        />
                        <path
                          d="M22 6H178L190 36Q100 48 10 36Z"
                          fill="none"
                          stroke="#287286"
                          strokeWidth="1"
                        />
                      </svg>
                      <span>INVITE TO PARTY</span>
                    </button>
                    <div
                      className="role-controls"
                      onKeyDown={(e) => {
                        if (e.key === "Escape") setRolePicker(null);
                      }}
                      onBlur={(e) => {
                        if (!e.currentTarget.contains(e.relatedTarget)) setRolePicker(null);
                      }}
                    >
                      {roles.map((role, index) => (
                        <div className="role-control" key={index}>
                          <button
                            className="role-selector"
                            title={`${index === 0 ? "Primary" : "Secondary"} role: ${role}`}
                            aria-label={`${index === 0 ? "Primary" : "Secondary"} role: ${role}`}
                            aria-expanded={rolePicker === index}
                            onClick={() => setRolePicker(rolePicker === index ? null : index)}
                          >
                            {role === "Engineering" ? (
                              <Code2 />
                            ) : role === "Research" ? (
                              <FlaskConical />
                            ) : role === "Leadership" ? (
                              <Users />
                            ) : (
                              <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                  d="M5 4h15v15H5zM2 8v14h14M6 18 18 6"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                />
                              </svg>
                            )}
                          </button>
                          {rolePicker === index && (
                            <div className="role-options" aria-label="Choose role">
                              {["Engineering", "Research", "Leadership", "Any role"].map(
                                (option) => (
                                  <button
                                    key={option}
                                    aria-pressed={role === option}
                                    onClick={() => {
                                      setRoles(
                                        roles.map((current, i) => (i === index ? option : current)),
                                      );
                                      setRolePicker(null);
                                    }}
                                  >
                                    {option}
                                    {role === option && <Check size={13} />}
                                  </button>
                                ),
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          {menu === "Contact" && (
            <section className="contact-page" aria-labelledby="contact-title">
              <div className="contact-intro">
                <span className="contact-eyebrow">INVITE TO PARTY</span>
                <h1 id="contact-title">Let's build something.</h1>
                <p>Have an opportunity, a project, or an idea? I'd love to hear about it.</p>
                <div className="contact-methods">
                  <a href="mailto:willwands@gmail.com">
                    <Mail />
                    <span>
                      <small>EMAIL</small>willwands@gmail.com
                    </span>
                    <ArrowUpRight />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/wowands"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin />
                    <span>
                      <small>LINKEDIN</small>Connect with Will
                    </span>
                    <ArrowUpRight />
                  </a>
                  <a href="https://github.com/wymwill" target="_blank" rel="noopener noreferrer">
                    <Github />
                    <span>
                      <small>GITHUB</small>Explore my code
                    </span>
                    <ArrowUpRight />
                  </a>
                </div>
              </div>
              <form
                className="contact-form"
                onSubmit={(event) => {
                  event.preventDefault();
                  const data = new FormData(event.currentTarget);
                  const subject = String(data.get("subject") || "Let's connect");
                  const body = `${data.get("message")}\n\nFrom: ${data.get("name")}\nEmail: ${data.get("email")}`;
                  window.location.href = `mailto:willwands@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                }}
              >
                <h2>SEND AN INVITE</h2>
                <div className="contact-fields">
                  <label>
                    Your name
                    <input
                      name="name"
                      autoComplete="name"
                      placeholder="Name"
                      required
                      maxLength={120}
                    />
                  </label>
                  <label>
                    Your email
                    <input
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      required
                    />
                  </label>
                </div>
                <label>
                  Subject
                  <input
                    name="subject"
                    placeholder="What do you have in mind?"
                    required
                    maxLength={200}
                  />
                </label>
                <label>
                  Message
                  <textarea
                    name="message"
                    placeholder="Tell me a little about your project or opportunity..."
                    rows={5}
                    required
                    maxLength={5000}
                  />
                </label>
                <button className="client-button contact-submit" type="submit">
                  <Mail size={17} /> OPEN EMAIL DRAFT <ArrowUpRight size={16} />
                </button>
                <p className="contact-form-note">
                  Opens your email app with your message ready to send.
                </p>
              </form>
            </section>
          )}
          {menu === "Projects" && (
            <div className="inventory">
              <aside className="inventory-sidebar">
                <div className="collection-score">
                  <strong>{projects.length}</strong>
                  <span>PROJECTS BUILT</span>
                  <strong className="second-score">2026</strong>
                  <span>BUILD SEASON</span>
                </div>
                <label className="search">
                  <Search size={12} />
                  <input
                    aria-label="Search collection"
                    placeholder="Search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </label>
                <label className="filter-label">
                  CATEGORY
                  <select
                    aria-label="Collection category"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                  >
                    {["All", ...new Set(collection.map((c) => c.category))].map((f) => (
                      <option key={f}>{f}</option>
                    ))}
                  </select>
                </label>
                <label className="filter-label">
                  SORT BY
                  <select
                    aria-label="Collection sort"
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                  >
                    <option>Newest first</option>
                    <option>A–Z</option>
                  </select>
                </label>
              </aside>
              <div className="inventory-content">
                <div className="inventory-grid project-inventory">
                  {shown.map((c) => (
                    <button
                      key={c.name}
                      className="inventory-card"
                      onClick={() => setModal({ title: c.name, text: c.description, tags: c.tags })}
                    >
                      <div
                        className="inventory-portrait"
                        style={{ backgroundImage: `url(/league/${art[c.i % 5]}.jpg)` }}
                      >
                        <div className="portrait-shade" />
                        <div className="skill-glyph">
                          <c.Icon size={48} />
                        </div>
                      </div>
                      <div className="inventory-name">
                        <span className="tiny-mastery">
                          <img src="/league/mastery-mark.png" alt="" />
                        </span>
                        {c.name}
                      </div>
                    </button>
                  ))}
                </div>
                {shown.length === 0 && <p className="empty">No matches in this collection.</p>}
              </div>
            </div>
          )}
          {menu === "History" && (
            <>
              <div className="match-history">
                <div className="history-title">
                  <h1>Experiences</h1>
                  <span>CAREER WINS</span>
                </div>
                {[
                  {
                    title: "RANKED WINS",
                    description: "Jobs & professional experience",
                    entries: party.slice(0, 1),
                  },
                  {
                    title: "UNRATED WINS",
                    description: "School, research & leadership",
                    entries: party.slice(1),
                  },
                ].map((group) => (
                  <section className="career-win-group" key={group.title}>
                    <header>
                      <h2>{group.title}</h2>
                      <span>{group.description}</span>
                    </header>
                    {[...group.entries]
                      .sort((a, b) => roleDates[b.name] - roleDates[a.name])
                      .map((p) => (
                        <button
                          key={p.name}
                          className="history-row"
                          onClick={() =>
                            setModal({
                              title: p.name,
                              text: p.text,
                              tags: [p.role, p.date, ...p.skills.split(" · ")],
                            })
                          }
                        >
                          <div className="history-result">
                            <strong>VICTORY</strong>
                            <span>{p.date}</span>
                          </div>
                          <div className="history-icon">
                            {p.name === "The MITRE Corporation" ? (
                              <img src="/league/organizations/mitre.png" alt="MITRE" />
                            ) : (
                              <span className="organization-label">
                                {p.name === "IEEE · IGVC"
                                  ? "IEEE"
                                  : p.name === "Chinese Student Org."
                                    ? "CSO"
                                    : p.name === "Rutgers University"
                                      ? "RU"
                                      : "GSET"}
                              </span>
                            )}
                          </div>
                          <div className="history-role">
                            <strong>{p.role}</strong>
                            <span>{p.name}</span>
                          </div>
                          <div className="history-stat">
                            <strong>{p.stat}</strong>
                            <span>{p.label}</span>
                          </div>
                          <ChevronRight size={16} />
                        </button>
                      ))}
                  </section>
                ))}
              </div>
            </>
          )}
          {menu === "Profile" && (
            <>
              <div className="profile-scene reference-profile">
                <button className="profile-banner" onClick={aboutMe} aria-label="About Will Wands">
                  <BannerOutline />

                  <div className="reference-avatar">
                    <img className="reference-portrait" src="/headshot-will.png" alt="Will Wands" />
                  </div>
                  <h1>Will Wands</h1>
                  <span className="profile-subtitle">Rutgers University</span>
                  <div className="rune-row">
                    <span />
                    <span />
                    <span />
                  </div>
                  <span className="profile-about">
                    ABOUT ME <ChevronRight size={11} />
                  </span>
                </button>
                <div className="profile-panels reference-panels">
                  <button className="profile-introduction" onClick={aboutMe}>
                    Will Wands <span>#ENGINEER</span>
                    <Shield size={17} />
                  </button>
                  <div className="profile-art-space" />
                  <div className="reference-stat-row">
                    <button onClick={() => go("History")}>
                      <span>EXPERIENCE</span>
                      <strong>MITRE</strong>
                      <img
                        className="organization-logo"
                        src="/league/organizations/mitre.png"
                        alt="MITRE"
                      />
                    </button>
                    <button onClick={() => go("History")}>
                      <span>LEADERSHIP</span>
                      <strong>IEEE · IGVC</strong>
                      <span className="organization-wordmark">IEEE</span>
                    </button>
                    <div
                      className="profile-mastery-control"
                      onMouseEnter={() => setMasteryOpen(true)}
                      onMouseLeave={() => setMasteryOpen(false)}
                      onBlur={(e) => {
                        if (!e.currentTarget.contains(e.relatedTarget as Node))
                          setMasteryOpen(false);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Escape") {
                          setMasteryOpen(false);
                          e.stopPropagation();
                        }
                      }}
                    >
                      <button
                        className="profile-mastery-trigger"
                        aria-expanded={masteryOpen}
                        aria-controls="profile-skills"
                        onFocus={() => setMasteryOpen(true)}
                        onClick={() => setMasteryOpen(true)}
                      >
                        <span>SKILL MASTERY</span>
                        <strong className="stat-number">12</strong>
                        <div className="featured-mastery">
                          <img
                            className="mastery-technology"
                            src="/league/skills/python.svg"
                            alt="Python"
                          />
                        </div>
                      </button>
                      {masteryOpen && (
                        <section
                          id="profile-skills"
                          className="profile-skills-popover"
                          aria-label="Skill mastery points"
                        >
                          <header>
                            <h2>SKILL MASTERY</h2>
                            <button aria-label="Close skills" onClick={() => setMasteryOpen(false)}>
                              <X size={15} />
                            </button>
                          </header>
                          <div className="skill-logo-grid">
                            {skills
                              .map((s, i) => ({ s, i }))
                              .sort((a, b) => skillPoints[b.i] - skillPoints[a.i])
                              .map(({ s, i }) => (
                                <button
                                  key={s.name}
                                  aria-label={`${s.name}: ${skillPoints[i].toLocaleString("en-US")} relative mastery points`}
                                  title={`${s.name} — ${skillPoints[i].toLocaleString("en-US")} PTS`}
                                  onClick={() =>
                                    setModal({
                                      title: s.name,
                                      text: s.text,
                                      tags: [
                                        `${skillPoints[i].toLocaleString("en-US")} relative portfolio points`,
                                        s.proof,
                                      ],
                                    })
                                  }
                                >
                                  <img src={`/league/skills/${skillLogos[i]}.svg`} alt={s.name} />
                                </button>
                              ))}
                          </div>
                        </section>
                      )}
                    </div>
                    <button onClick={() => go("Projects")}>
                      <span>PROJECTS</span>
                      <strong>{projects.length} BUILDS</strong>
                      <Trophy className="outline-stat" />
                    </button>
                    <a href="/resume.pdf" target="_blank" rel="noreferrer">
                      <span>RESUME</span>
                      <strong>VIEW RESUME</strong>
                      <BookOpen className="outline-stat" />
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}
        </main>
        <aside className="social">
          <button className="open-party-panel" onClick={() => go("Lobby")}>
            <div>
              <Users size={18} />
              <strong>OPEN PARTY</strong>
            </div>
            <div>
              <span className="party-mode-icon">
                <Code2 size={25} />
              </span>
              <span>
                <span className="party-members">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <UserRound key={i} size={18} style={{ opacity: i === 0 ? 1 : 0.3 }} />
                  ))}
                </span>
                <small>Portfolio · 1/5</small>
              </span>
            </div>
          </button>
          <div className="social-title">
            SOCIAL{" "}
            <button aria-label="Contact Will" onClick={contact}>
              <Users size={15} />
            </button>
            <button aria-label="Search projects" onClick={() => go("Projects")}>
              <Search size={15} />
            </button>
          </div>
          <div className="friend-group">
            <ChevronDown size={12} aria-hidden="true" /> EXPERIENCE ({party.length}/{party.length})
          </div>
          {party.map((p, i) => (
            <button
              className="friend"
              key={p.name}
              onClick={() => setModal({ title: p.name, text: p.text, tags: [p.role, p.date] })}
            >
              <div
                className="friend-avatar"
                style={
                  p.name === "The MITRE Corporation"
                    ? { backgroundImage: "url(/league/organizations/mitre.png)" }
                    : { backgroundImage: "none" }
                }
              >
                {p.name !== "The MITRE Corporation" && (
                  <span className="organization-label">
                    {p.name === "IEEE · IGVC"
                      ? "IEEE"
                      : p.name === "Chinese Student Org."
                        ? "CSO"
                        : p.name === "Rutgers University"
                          ? "RU"
                          : "GSET"}
                  </span>
                )}
                <i />
              </div>
              <span>
                {p.name}
                <small>{i < 2 ? "Completed" : "In progress"}</small>
              </span>
            </button>
          ))}
          <div className="friend-group">
            <ChevronDown size={12} aria-hidden="true" /> PROJECTS ({projects.length}/
            {projects.length})
          </div>
          {[...projects]
            .sort((a, b) => projectDates[b.name] - projectDates[a.name])
            .map((p, i) => (
              <button
                className="friend"
                key={p.name}
                onClick={() => setModal({ title: p.name, text: p.details, tags: p.tech })}
              >
                <div className={"friend-icon friend-" + i}>
                  <p.icon size={19} />
                  <i />
                </div>
                <span>
                  {p.short}
                  <small>{p.type}</small>
                </span>
              </button>
            ))}
          <div className="social-spacer" />
          <button className="social-contact" onClick={contact}>
            <Mail size={16} /> Send Will a message
          </button>
          <div className="social-footer">
            <a href="https://www.linkedin.com/in/wowands" target="_blank" rel="noreferrer">
              in
            </a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer">
              <BookOpen size={16} />
            </a>
            <span>
              <i /> CONNECTED
            </span>
          </div>
        </aside>
      </div>
      <footer className="client-footer">
        <span>
          <i /> PORTFOLIO CLIENT
        </span>
        <span>League of Legends artwork © Riot Games · Unofficial personal portfolio</span>
        <button onClick={contact}>
          <Mail size={13} /> CONTACT
        </button>
      </footer>
      {modal && (
        <div className="dialog-backdrop" onClick={() => setModal(null)}>
          <section
            className="client-dialog"
            role="dialog"
            aria-modal="true"
            aria-label={modal.title}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              autoFocus
              className="close"
              aria-label="Close details"
              onClick={() => setModal(null)}
            >
              <X size={20} />
            </button>
            <span className="small-label">PLAYER DETAILS</span>
            <h2>{modal.title}</h2>
            <div className="gold-line" />
            <p>{modal.text}</p>
            {modal.tags?.[0] === "contact" ? (
              <div className="contact-links">
                <a className="client-button" href="mailto:willwands@gmail.com">
                  WILLWANDS@GMAIL.COM <Mail size={15} />
                </a>
                <a href="https://www.linkedin.com/in/wowands" target="_blank" rel="noreferrer">
                  LINKEDIN <ExternalLink size={12} />
                </a>
              </div>
            ) : (
              <div className="detail-tags">
                {modal.tags?.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            )}
          </section>
        </div>
      )}
    </div>
  );
}

function BannerOutline() {
  return (
    <svg
      className="banner-outline"
      viewBox="0 0 200 500"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M1 1H199V439L100 498L1 439Z"
        fill="none"
        stroke="#4c4d54"
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
