import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Library from "./pages/library/Library";
import About from "./pages/about/About";
import Tools from "./pages/tools/Tools";
import NotFound from "./pages/NotFound";
import Layout from "./pages/Layout";
import { StrictMode } from "react";
import "./index.css";
import React from "react";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <About />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "tools",
        element: <Tools />,
      },
      {
        path: "library",
        element: <Library />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    basename: process.env.PUBLIC_URL,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
