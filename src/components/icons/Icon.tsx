import { AiFillStar } from "react-icons/ai";

// assets
import { theme } from "@/assets";

// type
import type { IconName } from "@/types/IconName";

interface IconProps {
  icon: IconName;

  color?: string;

  size?: string;
}

export const Icon = ({
  icon,
  color = theme.colors.black700,
  size = "12px",
}: IconProps) => {
  switch (icon) {
    case "star": {
      return <AiFillStar style={{ color: color, fontSize: size }} />;
    }
  }
};
