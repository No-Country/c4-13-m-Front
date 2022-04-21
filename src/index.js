import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './index.scss';
import RouterAPP from './routes/RouterApp'
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RouterAPP />
  </StrictMode>
);