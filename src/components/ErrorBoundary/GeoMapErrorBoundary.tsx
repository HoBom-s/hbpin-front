import { Component, ElementType } from "react";

// type
import type { Children } from "@/types/Common";

interface GeoMapErrorBoundaryProps extends Children {
  fallback: ElementType;
}

interface GeoMapErrorBoundaryState {
  hasError: boolean;

  errorInfo: Error | null;
}

export class GeoMapErrorBoundary extends Component<
  GeoMapErrorBoundaryProps,
  GeoMapErrorBoundaryState
> {
  state = {
    hasError: false,
    errorInfo: null,
  };

  constructor(props: GeoMapErrorBoundaryProps) {
    super(props);

    this.state = {
      hasError: false,
      errorInfo: null,
    };
  }

  public static getDerivedStateFromError(
    error: Error,
  ): GeoMapErrorBoundaryState {
    return {
      hasError: true,
      errorInfo: error,
    };
  }

  public handleReset() {
    window.location.reload();
  }

  render() {
    const { hasError, errorInfo } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <this.props.fallback error={errorInfo} onReset={this.handleReset} />
      );
    }

    return children;
  }
}
