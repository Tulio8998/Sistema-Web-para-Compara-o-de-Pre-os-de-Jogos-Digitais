import { Outlet } from "react-router-dom";
import { TopbarAuth } from "./topbar-auth";
import { Footer } from "./footer";

export function AuthLayout() {
    return (
        <>
        <TopbarAuth/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
        </>
    );
}