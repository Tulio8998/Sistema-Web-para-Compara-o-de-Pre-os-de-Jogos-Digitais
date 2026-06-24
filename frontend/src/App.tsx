import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/home";
import { SignUp } from "./pages/login/signUp";
import { SignIn } from "./pages/login/signIn";
import { DarkLayout, MainLayout } from "./components/layout";
import { AuthLayout } from "./components/auth-layout";
import { Offer } from "./pages/offer/offer";

export function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>
          <Route index element={<Home/>}/>
        </Route>

        <Route element={<DarkLayout />}>
          <Route path="/offers" element={<Offer />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/signIn" element={<SignIn/>}/>
          <Route path="/signUp" element={<SignUp/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

