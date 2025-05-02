import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../components/header/Header";
import React from "react";

export default function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <ScrollRestoration />
    </div>
  );
}
