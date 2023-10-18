import { ThemeProvider } from "styled-components";

import { Box, Button, Spinner } from "@/ui";

// assets
import { GlobalStyle, theme } from "@/assets";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Box
        sx={{
          width: "300px",
          height: "200px",
          border: "1px solid red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "green",
          cursor: "pointer",
        }}
        onClick={() => alert("Box click event")}
      >
        Hello HoBom !
        <Spinner size="sm" />
      </Box>
      <Button variant="fill" size="sm" label="안녕 호봄 !" />
      <Button size="md" label="안녕 호봄 !" />
      <Button size="lg" label="안녕 호봄 !" />
    </ThemeProvider>
  );
}

export default App;
