import {
  AiFillStar,
  AiOutlineSchedule,
  AiOutlineFileDone,
} from "react-icons/ai";

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

    case "schedule": {
      return <AiOutlineSchedule style={{ color: color, fontSize: size }} />;
    }

    case "done": {
      return <AiOutlineFileDone style={{ color: color, fontSize: size }} />;
    }

    default: {
      return null;
    }
  }
};
