import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/home";
import { SignUp } from "./pages/login/signUp";
import { SignIn } from "./pages/login/signIn";
import { DarkLayout, MainLayout, MainLayoutMy } from "./components/layout";
import { AuthLayout } from "./components/auth-layout";
import { Offer } from "./pages/offer/offer";
import { GameDetail } from "./pages/gameDetail/gameDetail";
import { MyAccount } from "./pages/login/myAccount";
import { Search } from "./pages/search/search";
import { WishList } from "./pages/wishList/wishList";

export function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayoutMy />}>
          <Route index element={<Home/>}/>
        </Route>
        
        <Route element={<MainLayoutMy />}>
          <Route path="/wishList" element={<WishList />} />
          <Route path="/myAccount" element={<MyAccount />} />
        </Route>


        <Route element={<DarkLayout />}>
          <Route path="/offers" element={<Offer />} />
          <Route path="/gameDetail/:id" element={<GameDetail />} />
          <Route path="/search/:query" element={<Search />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/signIn" element={<SignIn/>}/>
          <Route path="/signUp" element={<SignUp/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

