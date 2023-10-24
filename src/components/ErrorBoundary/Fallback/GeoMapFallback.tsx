import { useEffect } from "react";

// project
import { Box, Stack, Text, Button } from "@/ui";

// assets
import { theme } from "@/assets";

interface GeoMapFallbackProps {
  error: Error | null;
  onReset: () => void;
}

export const GeoMapFallback = ({ error, onReset }: GeoMapFallbackProps) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Box
      sx={{
        backgroundImage:
          "linear-gradient(to right, #d9e2e9 1px, transparent 1px),linear-gradient(to bottom, #d9e2e9 1px, transparent 1px);",
        backgroundSize: "20px 20px",
        background: "#edf2f6",
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack
        align="center"
        spacing={8}
        sx={{
          boxShadow: theme.colors.boxShadow,
          background: theme.colors.white700,
          borderRadius: theme.border.radius.md,
          p: "12px",
        }}
      >
        <Text
          sx={{
            fontSize: "32px",
            fontWeight: theme.font.weight.fw700,
            p: "20px",
          }}
        >
          Oops...
        </Text>
        <Text variant="subtitle" sx={{ p: "20px" }}>
          지도를 불러오지 못했습니다.
        </Text>
        <Box sx={{ p: "12px" }}>
          <Button variant="fill" label="다시 시도하기" onClick={onReset} />
        </Box>
      </Stack>
    </Box>
  );
};
