import {
  HomePage,
  DrumKit,
  WebClock,
  BlurPicture,
  FlexPanel,
  Instagram,
  WorkPage,
} from "../pages";
import { App } from "../pages/App";

export const routerList = [
  { path: "/", element: <HomePage /> },
  { path: "/works", element: <WorkPage /> },
  { path: "works/1", element: <DrumKit /> },
  { path: "works/2", element: <WebClock /> },
  { path: "works/3", element: <BlurPicture /> },
  { path: "works/4", element: <FlexPanel /> },
  { path: "works/5", element: <Instagram /> },
];

// [
//   { path: "/", element: <HomePage /> },
//   { path: "/personelwebsite", element: <HomePage /> },
//   { path: "/works", element: <WorkPage /> },
//   { path: "works/1", element: <DrumKit /> },
//   { path: "works/2", element: <WebClock /> },
//   { path: "works/3", element: <BlurPicture /> },
//   { path: "works/4", element: <FlexPanel /> },
//   { path: "works/5", element: <Instagram /> },
// ];
