import { useState } from "react";

import { ThemeProvider } from "styled-components";

import { FormLabel, TextField } from "@/ui";

// assets
import { GlobalStyle, theme } from "@/assets";

function App() {
  const [form, setForm] = useState({
    "사용자 닉네임": "",
  });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <FormLabel label="사용자 닉네임" isRequired />
      <TextField
        name="사용자 닉네임"
        value={form["사용자 닉네임"]}
        onChange={(e) =>
          setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
        }
      />
    </ThemeProvider>
  );
}

export default App;
