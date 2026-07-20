import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { ContentProtection } from "@/components/ContentProtection";
import { LyraSite } from "@/components/LyraSite";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ContentProtection />
    <LyraSite />
  </StrictMode>,
);