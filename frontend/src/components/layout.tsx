import { Outlet } from "react-router-dom";
import { Topbar } from "../components/topbar";
import { Footer } from "./footer";
import { useEffect } from "react";

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

export function DarkLayout() {
    useEffect(() => {
        document.body.classList.add("offer-body");

        return () => {
            document.body.classList.remove("offer-body");
        };
    }, []);

    return (
        <>
            <Topbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}