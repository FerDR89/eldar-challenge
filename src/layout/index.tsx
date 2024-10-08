import { Outlet } from "react-router-dom";
import Header from "../components/header ";
import Foooter from "../components/footer ";
import { Box, colors, Container } from "@mui/material";
import styles from "./index.module.css";

const Layout = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        backgroundColor: colors.grey[900],
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: colors.grey[900],
          minHeight: "100vh",
          width: "100%",
          maxWidth: "lg",
        }}
      >
        <header className={styles.header}>
          <Header />
        </header>
        <main className={styles.main}>
          <Outlet />
        </main>
        <footer className={styles.footer}>
          <Foooter />
        </footer>
      </Box>
    </Container>
  );
};

export default Layout;
