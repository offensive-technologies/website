import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Layout from "./pages/Layout";
import Home from "./pages/home/Home";
import { StrictMode } from "react";
import "./index.css";
import React from "react";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  // {
  //   basename: process.env.PUBLIC_URL,
  // },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
