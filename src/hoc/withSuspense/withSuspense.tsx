import { ComponentType, Suspense } from "react";

// project
import { Spinner } from "@/ui";
import { JSX } from "react/jsx-runtime";

export const withSuspense = (
  WrappedComponent: ComponentType,
  fallback = <Spinner />,
) => {
  const SupenseComponent = (props: JSX.IntrinsicAttributes) => {
    return (
      <Suspense fallback={fallback}>
        <WrappedComponent {...props} />
      </Suspense>
    );
  };

  return SupenseComponent;
};
