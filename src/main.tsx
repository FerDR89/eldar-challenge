import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store/index.ts";
import { QueryClientProvider } from "@tanstack/react-query";
import MyRouter from "./router/router.tsx";
import CssBaseline from "@mui/material/CssBaseline";
import queryClient from "./api/configs/queryClient.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Provider store={store}>
          <CssBaseline />
          <MyRouter />
        </Provider>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
