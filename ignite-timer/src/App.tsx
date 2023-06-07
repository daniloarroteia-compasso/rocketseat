import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import { GlobalStyle } from "./styles/global";
import { lightTheme, darkTheme } from "./styles/themes/theme";
import { Router } from "./routes";
import { CyclesContextProvider } from "./contexts/CyclesContext";

export function App() {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    const newTheme = theme === lightTheme ? darkTheme : lightTheme;
    setTheme(newTheme);
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <button onClick={toggleTheme}>Change theme</button>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
}
