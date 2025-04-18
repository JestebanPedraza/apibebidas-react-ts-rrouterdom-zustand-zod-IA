import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./views/IndexPage";
import Layout from "./layouts/Layout";
import GenerateIA from "./views/GenerateIA";

const FavoritesPage = lazy(() => import("./views/FavoritesPage"));

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<IndexPage />} index></Route>
          <Route
            path="/favoritos"
            element={
              <Suspense>
                <FavoritesPage />
              </Suspense>
            }
          ></Route>
          <Route
            path="/generate"
            element={
              <Suspense>
                <GenerateIA />
              </Suspense>
            }
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
