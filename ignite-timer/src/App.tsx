import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button";
import { useState } from "react";

import { defaultTheme } from "./styles/themes/default";
import { lightTheme } from "./styles/themes/lightTheme";
import { GlobalStyle } from "./styles/global";

export function App() {
  const [theme, setTheme] = useState(defaultTheme);

  const toggleTheme = () => {
    setTheme(theme === defaultTheme ? lightTheme : defaultTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <button onClick={toggleTheme}>Change theme</button>
      <Button variant="primary" />
      <Button variant="secondary" />
      <Button variant="success" />
      <Button variant="danger" />

      <GlobalStyle />
    </ThemeProvider>
  );
}
