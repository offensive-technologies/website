import { Outlet, ScrollRestoration } from "react-router-dom";
import Menu from "./menu/Menu";
import React from "react";

export default function Layout() {
  return (
    <div>
      <Menu />
      <Outlet />
      <ScrollRestoration />
    </div>
  );
}
