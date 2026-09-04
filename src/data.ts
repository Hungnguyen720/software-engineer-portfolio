// All portfolio content lives here. Edit this file, not the components.

export const profile = {
  name: ['Hung', 'Nguyen'],
  role: 'Full-stack software engineer',
  lede:
    'I build the software behind live events, learning tools and small businesses: realtime scoring platforms, multiplayer rooms that survive a redeploy, and apps people open every day.',
  email: 'HungNguyen720@gmail.com',
  github: 'https://github.com/Hungnguyen720',
  linkedin: 'https://www.linkedin.com/in/hungnguyen720/',
};

/** Facts shown beside the hero copy. */
export const facts = [
  { label: 'Currently', value: 'Software Engineer, Stanbridge University' },
  { label: 'Backend', value: 'PHP · Laravel · Go · SQL' },
  { label: 'Frontend', value: 'TypeScript · React · Vue · Tailwind' },
  { label: 'Open to', value: 'Full-stack and backend roles, remote or hybrid' },
];

export type Status = 'live' | 'open' | 'build';

export interface Project {
  id: string;
  category: string;
  name: string;
  status: Status;
  statusLabel: string;
  summary: string;
  notes?: string[];
  stack: string[];
  links: { label: string; href: string }[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'scorsync',
    category: 'Platform',
    name: 'Scorsync',
    status: 'live',
    statusLabel: 'Live',
    featured: true,
    summary:
      'Meet-management and live scoring for trampoline & tumbling competitions. Judges enter scores on tablets, the floor display updates instantly, and awards, comp cards and event advertising come out of the same system.',
    notes: [
      'Co-built over 900 commits alongside the founder.',
      'Real-time score propagation from judge panels to the arena display.',
      'Award and flight-order generation that used to be spreadsheets.',
    ],
    stack: ['Laravel 13', 'PHP', 'MySQL', 'Tailwind 4', 'WebSockets', 'GitHub Actions'],
    links: [{ label: 'Visit scorsync.com', href: 'https://scorsync.com' }],
  },
  {
    id: 'vibe-check',
    category: 'Realtime',
    name: 'Vibe Check',
    status: 'live',
    statusLabel: 'Live',
    summary:
      'Multiplayer party game. Everyone picks a song, a 15-second hook plays in sync for the whole room, most thumbs-up wins. Rooms live in server memory and snapshot to disk so a deploy restores active games mid-round.',
    stack: ['Go 1.26', 'WebSockets', 'Vue 3', 'Vite', 'Tailwind', 'Railway'],
    links: [{ label: 'Play', href: 'https://vibe-check-prod.up.railway.app' }],
  },
  {
    id: 'ats',
    category: 'Tooling',
    name: 'Is My Resume ATS Friendly?',
    status: 'live',
    statusLabel: 'Live',
    summary:
      'Shows the text an applicant tracking system actually extracts from a PDF, next to the resume you designed. Reconstructs both the naive and the column-aware reading order from glyph coordinates. Runs entirely in the browser, no upload.',
    stack: ['Astro', 'React 19', 'TypeScript', 'pdf.js', 'Tailwind 4', 'Vitest'],
    links: [{ label: 'Visit site', href: 'https://ismyresumeatsfriendly.com/' }],
  },
  {
    id: 'trampoline-scorer',
    category: 'Computer vision',
    name: 'Trampoline Scorer',
    status: 'build',
    statusLabel: 'In progress',
    summary:
      'Upload a routine video, run MoveNet pose estimation frame by frame in the browser, overlay the skeleton, export pose data for training a scoring model. Phase one of automating the execution judge.',
    stack: ['Vue 3', 'TypeScript', 'TensorFlow.js', 'MoveNet', 'Canvas'],
    links: [{ label: 'Ask me about it', href: '#contact' }],
  },
  {
    id: 'lingualoop',
    category: 'Product',
    name: 'LinguaLoop',
    status: 'build',
    statusLabel: 'In progress',
    summary:
      'iOS app for conversational Spanish built on a daily loop: practice a song, read a short story, complete one verb walkthrough aloud. Content is authored in a Nuxt studio with a typed schema so every unit ships consistent.',
    stack: ['iOS', 'Nuxt 4', 'TypeScript', 'Content schema', 'Audio pipeline'],
    links: [{ label: 'Ask me about it', href: '#contact' }],
  },
  {
    id: 'florist-ops',
    category: 'SaaS',
    name: 'Florist Ops',
    status: 'build',
    statusLabel: 'In progress',
    summary:
      'Operations software for independent wedding florists: events, deadlines across time zones, flower orders, freelance staff, transport, payables and per-event profit. Contract-first API with a typed frontend generated from it.',
    stack: ['Go 1.26', 'PostgreSQL 18', 'Next.js 16', 'React 19', 'MUI', 'OpenAPI'],
    links: [{ label: 'Ask me about it', href: '#contact' }],
  },
  {
    id: 'pipeline',
    category: 'Developer tooling',
    name: 'Pipeline',
    status: 'build',
    statusLabel: 'Internal',
    summary:
      'A Claude Code plugin used at work: one ClickUp task in, one reviewed pull request out. Judges whether a ticket is specified well enough to run, provisions an isolated worktree and site, implements, verifies, takes independent review, opens the PR.',
    stack: ['Claude Code', 'Shell', 'Git worktrees', 'ClickUp API', 'Laravel Herd'],
    links: [{ label: 'Ask me about it', href: '#contact' }],
  },
  {
    id: 'thai-alphabet',
    category: 'Learning',
    name: 'Thai Alphabet',
    status: 'build',
    statusLabel: 'Private',
    summary:
      'Flashcards for all 46 Thai consonants and the vowels, with 3D flip cards, romanization and native audio. Built to learn the script myself.',
    stack: ['Vite', 'Tailwind', 'Web Audio'],
    links: [{ label: 'Ask me about it', href: '#contact' }],
  },
];

export interface SkillGroup {
  name: string;
  items: { skill: string; note: string }[];
}

export const skills: SkillGroup[] = [
  {
    name: 'Backend',
    items: [
      { skill: 'PHP · Laravel', note: 'daily' },
      { skill: 'Go', note: 'daily' },
      { skill: 'REST & OpenAPI contracts', note: 'daily' },
      { skill: 'WebSockets / realtime', note: '2 products' },
      { skill: 'MySQL · MariaDB · PostgreSQL', note: 'daily' },
      { skill: 'Redis, queues, jobs', note: 'Laravel' },
    ],
  },
  {
    name: 'Frontend',
    items: [
      { skill: 'TypeScript', note: 'daily' },
      { skill: 'React 19 · Next.js · Astro', note: '3 products' },
      { skill: 'Vue 3 · Nuxt 4', note: 'daily' },
      { skill: 'Tailwind CSS 4', note: 'daily' },
      { skill: 'Canvas · TensorFlow.js', note: '1 product' },
      { skill: 'Accessibility & responsive layout', note: 'always' },
    ],
  },
  {
    name: 'Delivery',
    items: [
      { skill: 'PHPUnit · Vitest · Playwright', note: 'every repo' },
      { skill: 'GitHub Actions CI', note: 'every repo' },
      { skill: 'Railway · Docker · Caddy', note: 'deploys' },
      { skill: 'Git worktrees, review gates', note: 'daily' },
      { skill: 'Writing specs & docs agents can follow', note: 'daily' },
    ],
  },
  {
    name: 'Working with AI agents',
    items: [
      { skill: 'Claude Code plugins & skills', note: 'author' },
      { skill: 'Agent-ready repo conventions', note: 'template' },
      { skill: 'Task quality gates before automation', note: 'Pipeline' },
      { skill: 'Independent review loops', note: 'Pipeline' },
    ],
  },
];

export interface Role {
  when: string;
  title: string;
  body: string;
}

export const experience: Role[] = [
  {
    when: 'May 2020 — present',
    title: 'Lead Engineer · Stanbridge University',
    body:
      'Promoted from Web Developer to Lead Engineer in October 2024. Lead six engineers building a Laravel and Vue learning platform used by thousands of students and faculty. Shipped an AI course generator used to create 1,000+ courses and an agentic delivery pipeline that increased throughput to 30–40 tickets per day.',
  },
  {
    when: 'Dec 2024 — present',
    title: 'Senior / Lead Engineer · ScorSync',
    body:
      'Architected a Laravel, Livewire and Filament scheduling workspace for gymnastics meets with up to 1,000 athletes. Replaced error-prone spreadsheets and reduced meet preparation from two months to days, while adding imports, conflict detection, audit history, locking and exports.',
  },
  {
    when: 'Jan 2020 — May 2020',
    title: 'Web Developer · Western Growers',
    body:
      'Maintained and modernized legacy PHP applications, improving performance, resolving critical production issues and restructuring code for long-term maintainability.',
  },
  {
    when: 'Jul 2016 — Dec 2019',
    title: 'Web Developer · Beyond Polish',
    body:
      'Built PHP, JavaScript and MySQL tools for e-commerce analytics, reporting and warehouse automation, increasing operational throughput by more than 500%.',
  },
];
