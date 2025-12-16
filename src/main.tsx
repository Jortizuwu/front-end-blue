import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { App } from "./core/app";
import QueryProvider from "./shared/components/providers/react-query";
import { Toaster } from "@/shared/components/ui/sonner";
import { CharacterStackProvider } from "./shared/context/character-stack";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryProvider>
      <CharacterStackProvider>
        <App />
      </CharacterStackProvider>
      <Toaster />
    </QueryProvider>
  </StrictMode>
);
