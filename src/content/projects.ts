export type Project = {
  artifactNo: string;
  title: string;
  problem: string;
  role: string;
  summary: string;
  tags: string[];
  featured?: boolean;
  githubUrl: string | null;
  demoUrl: string | null;
  dossier: {
    context: string;
    contribution: string;
    architecture: string;
    challenges: string;
    result?: string;
    lessons?: string;
  };
};

export const PROJECTS: Project[] = [
  {
    artifactNo: "ART-001",
    featured: true,
    title: "Autonomous IGVC Vehicle",
    problem:
      "Navigate an unknown outdoor course with lane markers, obstacles, and GPS waypoints — fully autonomously.",
    role: "Lead Programmer — full autonomy stack",
    summary:
      "A ROS 2 based autonomy platform combining vision-based lane detection, LiDAR obstacle avoidance, and a waypoint planner tuned for competition conditions.",
    tags: ["ROS 2", "C++", "OpenCV", "LiDAR", "Gazebo", "Autonomy"],
    githubUrl: null,
    demoUrl: null,
    dossier: {
      context:
        "The Intelligent Ground Vehicle Competition demands a robot that survives an outdoor obstacle course with no prior map, no external localization, and strict time limits.",
      contribution:
        "Architected the ROS 2 node graph, wrote the vision pipeline for lane detection, and integrated planning and control with the perception stack.",
      architecture:
        "Sensor drivers → perception (camera + LiDAR fusion) → costmap → planner → controller. Simulation in Gazebo mirrors the physical topic graph.",
      challenges:
        "Sunlight variance broke naive HSV thresholds; solved with adaptive preprocessing and a tighter camera exposure policy. Real-time constraints forced careful thread and topic sizing.",
      lessons:
        "Simulation-first development compresses the debug loop enormously — but only if the sim topics mirror hardware exactly.",
    },
  },
  {
    artifactNo: "ART-002",
    title: "Teamfight Tactics Teacher",
    problem:
      "Match data for Teamfight Tactics is plentiful, but turning it into real-time coaching insight means surviving strict API rate limits and heavy analytical load.",
    role: "Sole developer — systems design and implementation",
    summary:
      "A C++ data-ingestion backend built on a custom Redis-style in-memory key-value store, feeding an asynchronous stats engine and a real-time Python dashboard.",
    tags: ["C++", "Python", "Redis", "REST API", "TCP"],
    githubUrl: null,
    demoUrl: null,
    dossier: {
      context:
        "Game analytics APIs enforce hard rate limits, and naive polling architectures buckle under the volume of match data a serious analysis tool needs.",
      contribution:
        "Architected the C++ ingestion pipeline and its custom Redis-style in-memory key-value store, then engineered an asynchronous evaluation engine exposing computed metrics over a JSON/HTTP socket interface.",
      architecture:
        "C++ ingestion pipeline with in-memory KV store → asynchronous, lambda-driven stats engine → JSON over an HTTP/TCP socket → real-time Python dashboard.",
      challenges:
        "Eliminating network bottlenecks while enforcing strict API rate limits — solved at the architecture level with the custom in-memory store and asynchronous processing.",
      result:
        "Processes 50+ statistical fields per match in real time via lambda-driven evaluation.",
    },
  },
  {
    artifactNo: "ART-003",
    title: "RUOnCampus — Off-Campus Housing Marketplace",
    problem:
      "Rutgers students hunting for off-campus housing and sublets have no trusted, campus-specific marketplace.",
    role: "Full-stack developer — schema, backend, and listing experience",
    summary:
      "A full-stack sublet matchmaking platform: React and Tailwind up front, Express.js and Supabase PostgreSQL underneath, with token-based authentication throughout.",
    tags: ["React", "Express.js", "Supabase", "PostgreSQL", "Tailwind CSS"],
    githubUrl: null,
    demoUrl: null,
    dossier: {
      context:
        "Sublet hunting at Rutgers happens across scattered group chats and boards — listings are unstructured, searches are slow, and trust is thin.",
      contribution:
        "Spearheaded the platform: mapped transactional relational schemas across 8 database tables, built the multi-step listing composer with React Context state stores and debounced lookups, and deployed the Express.js backend with granular token-based authentication workflows.",
      architecture:
        "React + Tailwind frontend → Express.js API with token-based auth → Supabase-hosted PostgreSQL across an 8-table relational schema.",
      challenges:
        "Search speed and onboarding friction — solved through careful relational indexing and a unified, debounced multi-step composer flow.",
      result: "Search queries return in under 40ms, and user onboarding drop-offs fell by 25%.",
    },
  },
  {
    artifactNo: "ART-004",
    title: "Angry Signing Llama — Real-Time CV Pipeline",
    problem:
      "Sign-language recognition is only useful in conversation if it keeps up with the signer — inference has to happen in real time.",
    role: "ML & systems developer — models, pipeline, and transport",
    summary:
      "A real-time computer-vision pipeline that recognizes 35 unique signs at 97% accuracy, streaming from FastAPI microservices to the browser over low-latency web sockets.",
    tags: ["Python", "FastAPI", "TensorFlow", "MediaPipe", "JavaScript"],
    githubUrl: null,
    demoUrl: null,
    dossier: {
      context:
        "Recognizing sign language on commodity hardware means squeezing a full CV inference loop — capture, landmark extraction, classification, display — into sub-second windows.",
      contribution:
        "Trained convolutional neural networks in TensorFlow on structural body nodes extracted via MediaPipe, and engineered the low-latency web-socket link between the CV microservices and an optimized JavaScript frontend.",
      architecture:
        "Camera stream → MediaPipe landmark extraction → TensorFlow CNN classifier inside FastAPI microservices → web sockets → JavaScript frontend.",
      challenges:
        "Holding sub-second end-to-end inference windows across the microservice boundary without dropping recognition accuracy.",
      result:
        "97% sign-recognition accuracy across 35 unique signs, with sub-second inference end to end.",
    },
  },
  {
    artifactNo: "ART-005",
    title: "Imposture — Smart Posture Monitor",
    problem:
      "Desk slouching goes unnoticed until it hurts — posture correction needs to happen the moment form slips.",
    role: "Developer — vision system and hardware bridge",
    summary:
      "A computer-vision posture monitor that watches streaming video for ergonomic slouching thresholds and fires real-time alerts through an Arduino hardware network.",
    tags: ["Python", "OpenCV", "MediaPipe", "Arduino", "C++"],
    githubUrl: null,
    demoUrl: null,
    dossier: {
      context:
        "Posture feedback tools either sample too slowly to matter or demand wearables — a camera and a microcontroller can do better.",
      contribution:
        "Architected the computer-vision monitoring system that processes streaming video frames against slouching thresholds, and wrote the synchronous C++ serial interface carrying MediaPipe coordinate flags to the external Arduino network.",
      architecture:
        "Webcam stream → OpenCV + MediaPipe pose landmarks → threshold engine (Python) → C++ synchronous serial bridge → Arduino alert hardware.",
      challenges:
        "Eliminating communication bottlenecks between the vision stack and the hardware — solved with a synchronous serial protocol carrying compact coordinate flags.",
      result: "Real-time physical posture-correction alerts driven directly from streaming video.",
    },
  },
];
