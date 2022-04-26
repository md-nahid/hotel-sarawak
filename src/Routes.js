import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

// import routes
import Home from "./Pages/Home";
const Allproducts = React.lazy(() => import("./Pages/Allproducts"));
const ProductDetails = React.lazy(() => import("./Pages/ProductDetails"));

export default function Approutes() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route
        path="allproducts"
        element={
          <Suspense fallback="Loading">
            <Allproducts />
          </Suspense>
        }
      />
      <Route
        path="productdetails"
        element={
          <Suspense fallback="Loading">
            <ProductDetails />
          </Suspense>
        }
      />
    </Routes>
  );
}
