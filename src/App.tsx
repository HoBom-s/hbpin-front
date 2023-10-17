import { ThemeProvider } from "styled-components";

// assets
import { GlobalStyle, theme } from "@/assets";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      Hello HoBom !
    </ThemeProvider>
  );
}

export default App;
