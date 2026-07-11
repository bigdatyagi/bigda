/// <reference types="vite/client" />
import { StartClient } from "@tanstack/react-start/client";
import { createRoot, hydrateRoot } from "react-dom/client";

const rootElement = document;

if (!rootElement.getElementById("root-hydrated")) {
  hydrateRoot(rootElement, <StartClient />);
}
