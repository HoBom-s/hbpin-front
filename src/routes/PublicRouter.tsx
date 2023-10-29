import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// project
import { Spinner } from "@/ui";

const ImmigrationPage = lazy(() => import("@/pages/Immigration"));
const LayoutContainer = lazy(() => import("@/layout/Container/Container"));
const GeoMapPage = lazy(() => import("@/pages/GeoMap"));
const NotFoundPage = lazy(() => import("@/pages/NotFound"));

export const PublicRouter = () => {
  return (
    <Suspense
      fallback={
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spinner size="lg" />
        </div>
      }
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ImmigrationPage />} />
          <Route path="/map" element={<LayoutContainer />}>
            <Route path="location" element={<GeoMapPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};
