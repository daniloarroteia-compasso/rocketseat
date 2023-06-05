import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button";
import { useState } from "react";

import { GlobalStyle } from "./styles/global";
import { lightTheme, darkTheme } from "./styles/themes/theme";

export function App() {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    const newTheme = theme === lightTheme ? darkTheme : lightTheme;
    setTheme(newTheme);
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
