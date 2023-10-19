import { ThemeProvider } from "styled-components";

// assets
import { GlobalStyle, theme } from "@/assets";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      안녕 !
    </ThemeProvider>
  );
}

export default App;
