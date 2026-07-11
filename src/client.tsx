/// <reference types="vite/client" />
import { StartClient } from "@tanstack/react-start/client";
import { createRoot, hydrateRoot } from "react-dom/client";
import { getRouter } from "./router";

const router = getRouter();

const rootElement = document;

if (!rootElement.getElementById("root-hydrated")) {
  hydrateRoot(
    rootElement,
    <StartClient router={router} />
  );
}
