import { SpotListWrapper } from "./style";

// assets
import { theme } from "@/assets";

// project
import { Icon } from "..";
import { Box, Img, Text, Divider } from "@/ui";

interface SpotProps {
  name: string;
  rating: number;
  spotImageUrl: string;
  address: string;
  business: string;
  mealKind: string;
}

export const Spot = ({
  name,
  rating,
  spotImageUrl,
  address,
  business,
  mealKind,
}: SpotProps) => {
  return (
    <SpotListWrapper>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          pb: "8px",
          cursor: "pointer",
        }}
      >
        <Box sx={{ width: "80px", height: "60px" }}>
          <Img
            isLazy={true}
            src={spotImageUrl}
            placeholder={spotImageUrl}
            alt="장소"
            bordered
          />
        </Box>
        <Box>
          <Text
            variant="subtitle"
            sx={{ fontSize: theme.font.size.xs, fontWeight: "bold" }}
          >
            {name}
          </Text>
          {Array.from({ length: rating })
            .fill(0)
            .map((_, idx: number) => (
              <Icon
                icon="star"
                key={idx}
                color={theme.colors.orange400}
                size={theme.font.size.xs}
              />
            ))}
          <Text variant="subtitle" sx={{ fontSize: theme.font.size.xs }}>
            {address}
          </Text>
          <Text variant="subtitle" sx={{ fontSize: theme.font.size.xs }}>
            {business}
          </Text>
          <Text
            variant="subtitle"
            sx={{ pt: "8px", fontSize: theme.font.size.xs }}
          >
            {mealKind}
          </Text>
        </Box>
      </Box>
      <Divider />
    </SpotListWrapper>
  );
};
