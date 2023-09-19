import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { SelectionPage } from "../pages/SelectionPage";
import { StartPage } from "../pages/StartPage";
import { FinishPage } from "../pages/FinishPage";
import  App   from '../App';


export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/top", element: <LandingPage /> },
  { path: "/selection", element: <SelectionPage /> },
  { path: "/start", element: <StartPage /> },
  { path: "/finish", element: <FinishPage /> }
]);