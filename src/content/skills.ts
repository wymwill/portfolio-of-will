export interface SkillCard {
  id: string;
  title: string;
  romanNumeral: string;
  symbol: string;
  domain: string;
  skills: string[];
}

export const SKILL_CARDS: SkillCard[] = [
  {
    id: "languages",
    title: "The Magician",
    romanNumeral: "I",
    symbol: "∞",
    domain: "Programming Languages",
    skills: ["C++", "Java", "Python", "SQL", "JavaScript", "HTML/CSS"],
  },
  {
    id: "autonomy",
    title: "The Emperor",
    romanNumeral: "II",
    symbol: "♔",
    domain: "Control and Perception",
    skills: ["ROS 2", "Gazebo", "OpenCV", "PyTorch", "Linux", "TensorFlow"],
  },
  {
    id: "perception",
    title: "The Tower",
    romanNumeral: "III",
    symbol: "⛫",
    domain: "Emerging Technologies",
    skills: ["Claude Code", "Codex", "Gemini", "Supabase", "Ollama"],
  },
  {
    id: "systems",
    title: "The Star",
    romanNumeral: "IV",
    symbol: "★",
    domain: "Inspiration and UI Design",
    skills: ["React", "Vue.js", "Node.js", "Tailwind CSS", "Figma"],
  },
  {
    id: "software",
    title: "The Lovers",
    romanNumeral: "V",
    symbol: "♡",
    domain: "Team Based Development",
    skills: ["Git", "GitHub/GitLab", "Docker", "Kubernetes", "Agile Development"],
  },
];
