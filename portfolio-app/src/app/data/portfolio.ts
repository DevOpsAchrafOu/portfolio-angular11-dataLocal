import raw from './portfolio.json';

/** A text in French and English, in this order. */
export type Tr = [string, string];
export type Lang = 'fr' | 'en';
export const LANGS: Lang[] = ['fr', 'en'];

/** Public address of the site. Change it here (and baseHref in angular.json) if the site moves. */
export const SITE_URL = 'https://devopsachrafou.github.io/portfolio-angular11-dataLocal/';

export interface Task {
  text: Tr;
  sub: Tr[];
}

/** A professional experience or a personal project. */
export interface Work {
  slug: string;
  kind: 'experience' | 'project';
  current: boolean;
  title: Tr;
  role: Tr | null;
  summary: Tr | null;
  tech: string[];
  cover: string | null;
  illustration: string | null;
  gallery: { src: string; caption: Tr | null }[];
  video: boolean;
  tasks: Task[];
  git: string[];
  web: string[];
}

export interface Person {
  name: string;
  role: Tr;
  about: Tr;
  city: Tr;
  photo: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  codeforces: string;
}

interface Data {
  person: Person;
  experiences: Work[];
  projects: Work[];
  education: { years: string; degree: Tr; school: Tr; note: Tr | null }[];
  training: { period: Tr; type: Tr; subject: Tr }[];
}

/** Content migrated from the old src/assets/dataLocal/*.json, with typos fixed and English added. */
export const DATA = raw as unknown as Data;
export const ALL_WORK: Work[] = [...DATA.experiences, ...DATA.projects];

export function workBySlug(slug: string): Work | undefined {
  return ALL_WORK.find((w) => w.slug === slug);
}

/** Skills grouped from the technologies listed in the experiences and projects. */
export const SKILLS: { group: Tr; items: string[] }[] = [
  { group: ['Back-end', 'Back end'], items: ['Java', 'Spring Boot', 'Spring Security', 'Spring Integration', 'REST API', 'Node.js', 'Symfony', 'PHP'] },
  { group: ['Front-end', 'Front end'], items: ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'jQuery'] },
  { group: ['Mobile', 'Mobile'], items: ['Ionic', 'Capacitor'] },
  { group: ['Données', 'Data'], items: ['MySQL', 'PostgreSQL', 'MongoDB'] },
  { group: ['Outils', 'Tools'], items: ['Git', 'Swagger', 'Postman', 'JUnit', 'UML'] },
];

/** Interface texts. */
export const UI = {
  nav_about: ['À propos', 'About'],
  nav_work: ['Expériences', 'Experience'],
  nav_projects: ['Projets', 'Projects'],
  nav_education: ['Formation', 'Education'],
  nav_contact: ['Contact', 'Contact'],
  cv: ['CV', 'Resume'],
  hello: ['Bonjour, je suis', 'Hi, I’m'],
  hero_lead: [
    'Je conçois et développe des applications web et mobiles de bout en bout : API Java / Spring Boot, interfaces Angular, applications Ionic.',
    'I design and build web and mobile applications end to end: Java / Spring Boot APIs, Angular interfaces, Ionic apps.',
  ],
  see_work: ['Voir mes projets', 'See my work'],
  contact_me: ['Me contacter', 'Contact me'],
  stat_xp: ['expériences', 'experiences'],
  stat_projects: ['projets personnels', 'side projects'],
  stat_degree: ['Master informatique', 'Master’s degree'],
  about_h: ['À propos', 'About me'],
  skills_h: ['Compétences', 'Skills'],
  work_h: ['Expériences professionnelles', 'Professional experience'],
  work_sub: ['Applications réalisées en entreprise et en freelance.', 'Applications built for companies and as a freelancer.'],
  projects_h: ['Projets personnels', 'Side projects'],
  projects_sub: ['Des projets réalisés sur mon temps libre, le code est sur GitHub.', 'Projects built in my free time, with the code on GitHub.'],
  education_h: ['Formation', 'Education'],
  degrees: ['Diplômes', 'Degrees'],
  training: ['Formations complémentaires', 'Additional training'],
  contact_h: ['Travaillons ensemble', 'Let’s work together'],
  contact_sub: ['Un projet, une mission ou une question ? Écrivez-moi, je réponds rapidement.', 'A project, a job or a question? Write to me, I answer quickly.'],
  email: ['E-mail', 'E-mail'],
  phone: ['Téléphone', 'Phone'],
  city: ['Ville', 'City'],
  current: ['En cours', 'Current'],
  details: ['Voir le détail', 'View details'],
  code: ['Code', 'Code'],
  live: ['Voir le site', 'Live site'],
  tasks_h: ['Ce que j’ai réalisé', 'What I did'],
  tech_h: ['Technologies', 'Tech stack'],
  gallery_h: ['Captures d’écran', 'Screenshots'],
  experience: ['Expérience', 'Experience'],
  project: ['Projet personnel', 'Side project'],
  home: ['Accueil', 'Home'],
  prev: ['Précédent', 'Previous'],
  next: ['Suivant', 'Next'],
  close: ['Fermer', 'Close'],
  cv_h: ['Mon CV', 'My resume'],
  cv_open: ['Ouvrir en plein écran', 'Open full screen'],
  rights: ['Tous droits réservés.', 'All rights reserved.'],
  built: ['Conçu et développé avec Angular 22 et Tailwind CSS.', 'Designed and built with Angular 22 and Tailwind CSS.'],
  meta_desc: [
    'Achraf Ouakka, développeur web full stack Java / Spring Boot et Angular à Salé (Maroc) : expériences, projets, compétences et contact.',
    'Achraf Ouakka, full-stack Java / Spring Boot and Angular developer in Salé, Morocco: experience, projects, skills and contact.',
  ],
} satisfies Record<string, Tr>;
export type UiKey = keyof typeof UI;
