import { createRoot } from "react-dom/client";
import store from "./store/index";
import AppRouter from "@routes/AppRouter";

// Redux
import { Provider } from "react-redux";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "@styles/global.css";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
