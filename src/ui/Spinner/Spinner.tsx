import { SpinnerBox, SpinnerBase } from "./style";

interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  color?: string;
}

export const Spinner = ({ size = "md", color = "#5652bf" }: SpinnerProps) => {
  const spinnerSize: number = (() => {
    if (size === "sm") {
      return 30;
    } else if (size === "md") {
      return 40;
    } else {
      return 50;
    }
  })();

  return (
    <SpinnerBox>
      <SpinnerBase viewBox="0 0 50 50" $size={spinnerSize} $color={color}>
        <circle
          className="path"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="2"
        />
      </SpinnerBase>
    </SpinnerBox>
  );
};
