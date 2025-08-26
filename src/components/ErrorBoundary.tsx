import React from "react";

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
    // You can log errors to an error reporting service here
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <>
            <div className="p-4 bg-red-50 text-red-700 rounded-lg">
              <h3 className="font-bold">Something went wrong</h3>
              <p>{this.state.error?.message}</p>
              <button
                onClick={() => this.setState({ hasError: false })}
                className="mt-2 px-3 py-1 bg-red-100 hover:bg-red-200 rounded"
              >
                Try again
              </button>
            </div>
          </>
        )
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
