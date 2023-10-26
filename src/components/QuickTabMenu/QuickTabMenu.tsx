// assets
import { theme } from "@/assets";

// project
import { Text } from "@/ui";

interface QuickTabMenuProps {
  name: string;
}

export const QuickTabMenu = ({ name }: QuickTabMenuProps) => {
  return (
    <Text
      sx={{
        background: theme.colors.white700,
        fontSize: theme.font.size.xs,
        fontWeight: theme.font.weight.fw700,
        borderRadius: "32px",
        boxShadow: theme.colors.boxShadow,
        maxWidth: "150px",
        height: "30px",
        p: "0 10px",
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      {name}
    </Text>
  );
};
