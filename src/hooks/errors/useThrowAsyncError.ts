import { useState } from "react";

interface AsyncErrorReturn {
  throwAsyncError: (e: Error) => void;
}

/**
 * ThrowAsyncError hook
 *
 * @example
 * const { throwAsyncError } = useThrowAsyncError();
 *
 * ...
 *
 * axios.get("ULR")
 *      .then((data) => ...)
 *      .catch((e) => throwAsyncError(e));
 *
 * @returns {AsyncErrorReturn}
 */
export const useThrowAsyncError = (): AsyncErrorReturn => {
  const [_, setError] = useState<Error | null>(null);

  const throwAsyncError = (error: Error): void => {
    setError(() => {
      throw error;
    });
  };

  return {
    throwAsyncError,
  };
};
