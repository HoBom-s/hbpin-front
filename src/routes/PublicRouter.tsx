import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// project
const ImmigrationPage = lazy(() => import("@/pages/Immigration"));
const LayoutContainer = lazy(() => import("@/layout/Container/Container"));
const GeoMapPage = lazy(() => import("@/pages/GeoMap"));

// Dev
const DevPage = lazy(() => import("@/pages/Dev"));

import { Spinner } from "@/ui";

export const PublicRouter = () => {
  return (
    <Suspense fallback={<Spinner size="lg" />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ImmigrationPage />} />
          <Route path="/dev" element={<DevPage />} />
          <Route path="/map" element={<LayoutContainer />}>
            <Route path="location" element={<GeoMapPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};
