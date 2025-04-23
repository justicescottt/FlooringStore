import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

// Add theme provider for light/dark mode support
createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="light" storageKey="premier-flooring-theme">
    <App />
  </ThemeProvider>
);
