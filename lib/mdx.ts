import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export interface Project {
  slug: string;
  title: string;
  description: string;
  date?: string;
  url?: string;
  repository?: string;
  skills: string;
  published: boolean;
  content: string;
  /** Optional archive table column (e.g. Backend / Systems). */
  domain?: string;
  /** Optional archive table column (e.g. metric or outcome). */
  result?: string;
  /** Optional 1–2 sentence summary for meta and chat. */
  summary?: string;
  /** Optional SEO keywords. */
  keywords?: string[];
  /** Optional cover image path under /public (e.g. /projects/hrms-cloud.png). */
  image?: string;
}

export function getAllProjects(): Project[] {
  const projectsDirectory = path.join(contentDirectory, 'projects');
  
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(projectsDirectory);
  const allProjectsData = fileNames
    .filter((name) => name.endsWith('.mdx'))
    .map((name) => {
      const slug = name.replace(/\.mdx$/, '');
      const fullPath = path.join(projectsDirectory, name);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || '',
        description: data.description || '',
        date: data.date || '',
        url: data.url || '',
        repository: data.repository || '',
        skills: data.skills || '',
        published: data.published !== false,
        content,
        domain: typeof data.domain === 'string' ? data.domain : '',
        result: typeof data.result === 'string' ? data.result : '',
        summary: typeof data.summary === 'string' ? data.summary : '',
        keywords: Array.isArray(data.keywords)
          ? data.keywords.filter((k: unknown) => typeof k === 'string')
          : [],
        image: typeof data.image === 'string' ? data.image : '',
      };
    })
    .filter((project) => project.published);

  return allProjectsData.sort((a, b) => {
    if (a.date && b.date) {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    return 0;
  });
}

export function getProjectBySlug(slug: string): Project | null {
  const projectsDirectory = path.join(contentDirectory, 'projects');
  const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || '',
    description: data.description || '',
    date: data.date || '',
    url: data.url || '',
    repository: data.repository || '',
    skills: data.skills || '',
    published: data.published !== false,
    content,
    domain: typeof data.domain === 'string' ? data.domain : '',
    result: typeof data.result === 'string' ? data.result : '',
    summary: typeof data.summary === 'string' ? data.summary : '',
    keywords: Array.isArray(data.keywords)
      ? data.keywords.filter((k: unknown) => typeof k === 'string')
      : [],
    image: typeof data.image === 'string' ? data.image : '',
  };
}
