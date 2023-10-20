import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// project
import { Immigration } from "@/pages";
import { Spinner } from "@/ui";

export const PublicRouter = () => {
  return (
    <Suspense fallback={<Spinner size="lg" />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Immigration />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};
