import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import BusinessConnectMobileFormPreview from "./components/BusinessConnectMobileFormPreview";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BusinessConnectMobileFormPreview />
  </StrictMode>
);
