export interface Skill {
  label: string;
  percentage: number;
  progressColor: string;
  className?: string;
  size?: number;
}

export const SKILLS: Skill[] = [
  {
    label: 'HTML5',
    percentage: 90,
    progressColor: '#E44D26', // 原廠橘紅色，微調明度
    size: 10,
    className: 'w-full',
  },
  {
    label: 'CSS3',
    percentage: 90,
    progressColor: '#2563EB', // 原廠藍色，選用 Tailwind blue-600
    size: 10,
    className: 'w-full',
  },
  {
    label: 'JavaScript',
    percentage: 50,
    progressColor: '#EAB308', // 琥珀金，完美適配深淺背景
    size: 10,
    className: 'w-full',
  },
  {
    label: 'React',
    percentage: 60,
    progressColor: '#06B6D4', // 湖水青，提高淺色背景辨識度
    size: 10,
    className: 'w-full',
  },
  {
    label: 'Next.js',
    percentage: 40,
    progressColor: '#71717A', // 中性金屬灰，避開純黑純白的限制
    size: 10,
    className: 'w-full',
  },
  {
    label: 'Hono',
    percentage: 30,
    progressColor: '#EA580C', // Hono 火焰橘
    size: 10,
    className: 'w-full',
  },
  {
    label: 'Turborepo',
    percentage: 20,
    progressColor: '#EC4899', // Turborepo 標誌性洋紅
    size: 10,
    className: 'w-full',
  },
];
