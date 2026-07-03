import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/home";
import { SignUp } from "./pages/login/signUp";
import { SignIn } from "./pages/login/signIn";
import { DarkLayout, MainLayout, MainLayoutMy } from "./components/layout";
import { AuthLayout } from "./components/auth-layout";
import { Offer } from "./pages/offer/offer";
import { GameDetail } from "./pages/gameDetail/gameDetail";
import { MyAccount } from "./pages/login/myAccount";

export function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayoutMy />}>
          <Route index element={<Home/>}/>
        </Route>
        
        <Route element={<MainLayout />}>
          <Route path="/myAccount" element={<MyAccount />} />
        </Route>


        <Route element={<DarkLayout />}>
          <Route path="/offers" element={<Offer />} />
          <Route path="/gameDetail" element={<GameDetail />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/signIn" element={<SignIn/>}/>
          <Route path="/signUp" element={<SignUp/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

