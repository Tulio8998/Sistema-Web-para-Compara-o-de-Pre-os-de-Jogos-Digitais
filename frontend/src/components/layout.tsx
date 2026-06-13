import { Outlet } from "react-router-dom";
import { Topbar } from "../components/topbar";

export function MainLayout() {
  return (
    <>
      <Topbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}