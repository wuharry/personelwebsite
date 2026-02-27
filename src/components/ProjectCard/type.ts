export type Category = '全部' | 'JavaScript' | 'CSS' | 'React' | 'Next.js';

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
