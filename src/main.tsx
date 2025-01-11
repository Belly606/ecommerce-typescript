import { createRoot } from "react-dom/client";
import AppRouter from "@routes/AppRouter";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")!).render(<AppRouter />);
