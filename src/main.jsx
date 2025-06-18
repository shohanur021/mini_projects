import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./Components/Home/Home";
import './index.css';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Home></Home>
  </StrictMode>
);
