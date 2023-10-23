import { ComponentType, SuspenseProps, Suspense } from "react";

interface WithSuspenseProps {
  WrappedComponent: ComponentType;
  fallback: SuspenseProps["fallback"];
}

export const withSuspense = ({
  WrappedComponent,
  fallback,
}: WithSuspenseProps) => {
  const SupenseComponent = () => {
    return (
      <Suspense fallback={fallback}>
        <WrappedComponent />
      </Suspense>
    );
  };

  return SupenseComponent;
};
