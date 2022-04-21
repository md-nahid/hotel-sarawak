import React from "react";
import { Route, Routes } from "react-router-dom";
// import routes
import Home from "./Pages/Home";

export default function Approutes() {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  );
}
