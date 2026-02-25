interface skill {
  label: string;
  percentage: number;
  progressColor: string;
  className?: string;
  size?: number;
}

export const SKILLS: skill[] = [
  {
    label: 'html',
    percentage: 90,
    progressColor: '#FF8000',
    size: 10,
    className: 'w-full',
  },
  {
    label: 'css',
    percentage: 90,
    progressColor: '#0080FF',
    size: 10,
    className: 'w-full',
  },
  {
    label: 'javascript',
    percentage: 50,
    progressColor: 'yellow',
    size: 10,
    className: 'w-full',
  },
  {
    label: 'React',
    percentage: 60,
    progressColor: '#00E3E3',
    size: 10,
    className: 'w-full',
  },
  {
    label: 'Next.js',
    percentage: 40,
    progressColor: 'red',
    size: 10,
    className: 'w-full',
  },
];
