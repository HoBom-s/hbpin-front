import { Component, ElementType } from "react";

// type
import type { Children } from "@/types/Common";

interface GlobalErrorBoundaryProps extends Children {
  fallback: ElementType;
}

interface GlobalErrorBoundaryState {
  hasError: boolean;

  errorInfo: Error | null;
}

export class GlobalErrorBoundary extends Component<
  GlobalErrorBoundaryProps,
  GlobalErrorBoundaryState
> {
  state = {
    hasError: false,
    errorInfo: null,
  };

  constructor(props: GlobalErrorBoundaryProps) {
    super(props);

    this.state = {
      hasError: false,
      errorInfo: null,
    };
  }

  /**
   * @override
   *
   * @param {Error} error
   * @returns {GlobalErrorBoundaryState}
   */
  public static getDerivedStateFromError(
    error: Error,
  ): GlobalErrorBoundaryState {
    return {
      hasError: true,
      errorInfo: error,
    };
  }

  render() {
    const { hasError, errorInfo } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <this.props.fallback error={errorInfo} />;
    }

    return children;
  }
}
