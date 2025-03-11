import { Header } from "./Heder";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};
