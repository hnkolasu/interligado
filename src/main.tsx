import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./components/Blog.tsx";
import Sobre from "./components/Sobre.tsx";
import Desenvolvimento from "./components/Desenvolvimento.tsx";
import Design from "./components/Design.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/design" element={<Design />} />
        <Route path="/desenvolvimento" element={<Desenvolvimento />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
