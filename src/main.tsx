import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store/index.ts";
import MyRouter from "./router/router.tsx";
import CssBaseline from "@mui/material/CssBaseline";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <CssBaseline />
        <MyRouter />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
