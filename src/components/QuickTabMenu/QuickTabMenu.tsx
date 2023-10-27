// assets
import { theme } from "@/assets";

// project
import { Box, Text } from "@/ui";
import { Icon } from "..";

// type
import type { IconName } from "@/types/IconName";

interface QuickTabMenuProps {
  name: string;

  iconName: IconName;
}

export const QuickTabMenu = ({ name, iconName }: QuickTabMenuProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: theme.colors.white700,
        borderRadius: "32px",
        boxShadow: theme.colors.boxShadow,
        maxWidth: "150px",
        height: "30px",
        p: "0 10px",
        gap: "4px",
        cursor: "pointer",
      }}
    >
      <Icon icon={iconName} />
      <Text
        sx={{
          fontSize: theme.font.size.xs,
          fontWeight: theme.font.weight.fw700,
        }}
      >
        {name}
      </Text>
    </Box>
  );
};
