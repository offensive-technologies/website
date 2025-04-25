import { Outlet, ScrollRestoration } from "react-router-dom";
import Menu from "./menu/Menu";

export default function Layout() {
  return (
    <div>
      <Menu />
      <Outlet />
      <ScrollRestoration />
    </div>
  );
}
