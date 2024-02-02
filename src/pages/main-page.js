import "./main-page.css";
import { Outlet } from "react-router-dom";
import { Header } from "../components/header-comp";
import { BodyComp } from "../components/body-comp";
import { Footer } from "../components/footer-comp";

export function Main() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
