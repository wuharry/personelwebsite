import { Intro, AboutMe, Experience, Skill } from "../pages";
// import { DrumKit, WebClock, BlurPicture, FlexPanel, Instagram } from "./portfolioPage";

interface router{
  path: string;
  element: JSX.Element;
}

const routerList:router[] = [
  { path: "/", element:<Intro /> },
  { path: "/about", element: <AboutMe /> },
  { path: "experience", element: <Experience /> },
  { path: "skill", element: <Skill /> },
  { path: "contact", element: <Contact /> },
  // { path: "works/3", element: <BlurPicture /> },
  // { path: "works/4", element: <FlexPanel /> },
  // { path: "works/5", element: <Instagram /> },
];

export default routerList;
