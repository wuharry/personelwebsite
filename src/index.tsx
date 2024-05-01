/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import {
  DrumKit,
  WebClock,
  BlurPicture,
  FlexPanel,
  Instagram,
} from "./portfolioPage";

import { Intro, AboutMe, Experience } from "./pages";

const routerList = [
  { path: "/", element: <Intro /> },
  { path: "/about", element: <AboutMe /> },
  { path: "experience", element: <Experience /> },
  { path: "works/2", element: <WebClock /> },
  { path: "works/3", element: <BlurPicture /> },
  { path: "works/4", element: <FlexPanel /> },
  { path: "works/5", element: <Instagram /> },
];
const router = createBrowserRouter(routerList);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
