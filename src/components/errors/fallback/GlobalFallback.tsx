// project
import { Box, Stack, Text, Button } from "@/ui";

// assets
import { theme } from "@/assets";

export const GlobalFallback = () => {
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
          Something went wrong ! Clear and refresh.
        </Text>
        <Box sx={{ p: "12px" }}>
          <Button
            variant="outlined"
            label="Clear & reload"
            onClick={() => window.location.reload()}
          />
        </Box>
      </Stack>
    </Box>
  );
};
