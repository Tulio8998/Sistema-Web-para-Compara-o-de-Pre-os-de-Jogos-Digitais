import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/home";
import { Login } from "./pages/login/login";
import { MainLayout } from "./components/layout";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

