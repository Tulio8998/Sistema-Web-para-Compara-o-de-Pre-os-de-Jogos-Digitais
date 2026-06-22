import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/home";
import { SignUp } from "./pages/login/signUp";
import { SignIn } from "./pages/login/signIn";
import { MainLayout } from "./components/layout";
import { AuthLayout } from "./components/auth-layout";

export function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>
          <Route index element={<Home/>}/>
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/signIn" element={<SignIn/>}/>
          <Route path="/signUp" element={<SignUp/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

