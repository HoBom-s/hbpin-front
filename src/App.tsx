import { ThemeProvider } from "styled-components";

// project
import { GlobalFallback, GlobalErrorBoundary } from "@/components";
import { PublicRouter } from "@/routes";

// assets
import { GlobalStyle, theme } from "@/assets";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GlobalErrorBoundary fallback={GlobalFallback}>
        <PublicRouter />
      </GlobalErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
