import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

// import routes
import Home from "./Pages/Home";

const Allproducts = React.lazy(() => import("./Pages/Allproducts"));
// child routes start
const CakeMilk = React.lazy(() => import("./Pages/ProductCategory/CakeMilk"));
const CoffeTeas = React.lazy(() => import("./Pages/ProductCategory/CoffeTeas"));
const Vegetables = React.lazy(() =>
  import("./Pages/ProductCategory/Vegetables")
);
const Desert = React.lazy(() => import("./Pages/ProductCategory/Desert"));
// child routes end

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
      >
        <Route
          index
          element={
            <Suspense fallback="Loading">
              <CakeMilk />
            </Suspense>
          }
        />
        <Route
          path="coffes-teas"
          element={
            <Suspense fallback="Loading">
              <CoffeTeas />
            </Suspense>
          }
        />
        <Route
          path="vegetable"
          element={
            <Suspense fallback="Loading">
              <Vegetables />
            </Suspense>
          }
        />
        <Route
          path="desert"
          element={
            <Suspense fallback="Loading">
              <Desert />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}
