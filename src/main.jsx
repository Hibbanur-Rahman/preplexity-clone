import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { store } from "./redux/store.js";
import App from "./App.jsx";
import "./index.css";
import { HashRouter, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
// import { ThemeProvider } from "@material-tailwind/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
