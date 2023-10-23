import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// project
const ImmigrationPage = lazy(() => import("@/pages/Immigration"));

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
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};
