import { Outlet } from "react-router-dom";
import { Topbar } from "../components/topbar";
import { Footer } from "./footer";

export function MainLayout() {
  return (
    <>
      <Topbar/>
      <main>
        <Outlet />
      </main>
      <Footer/>
    </>
  );
}