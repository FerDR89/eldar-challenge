import { Outlet } from "react-router-dom";
import Header from "../molecules/header ";
import Foooter from "../molecules/footer ";

const Layout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Foooter />
      </footer>
    </>
  );
};

export default Layout;
