export const FILTER_ALL = 'ALL' as const;
export type TechCategory = 'JavaScript' | 'CSS' | 'React' | 'Next.js';
export type Category = typeof FILTER_ALL | TechCategory;

export type Project = {
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags?: string[];
  category: Category[];
  link?: string;
  github?: string;
  featured?: boolean;
};
