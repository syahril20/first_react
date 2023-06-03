import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@material-tailwind/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { UserContextProvider } from "./comp/context/context";
const root = ReactDOM.createRoot(document.getElementById("root"));
const client = new QueryClient();

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <UserContextProvider>
        <QueryClientProvider client={client}>
          <App />
        </QueryClientProvider>
      </UserContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
