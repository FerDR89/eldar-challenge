import { Outlet } from "react-router-dom";
import Header from "../components/molecules/header ";
import Foooter from "../components/molecules/footer ";

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
