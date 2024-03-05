import { Outlet } from "react-router-dom";
import { Header } from "./components/header-comp";
import { BodyComp } from "./pages/main-page";
import { Footer } from "./components/footer-comp";

export function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
