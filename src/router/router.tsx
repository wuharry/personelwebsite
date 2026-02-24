import type { RouteObject } from 'react-router-dom';
import { Intro, AboutMe, Experience, Skill, Contact } from '../pages';

const routerList: RouteObject[] = [
  { path: '/', element: <Intro /> },
  { path: '/about', element: <AboutMe /> },
  { path: 'experience', element: <Experience /> },
  { path: 'skill', element: <Skill /> },
  { path: 'contact', element: <Contact /> },
];

export default routerList;
