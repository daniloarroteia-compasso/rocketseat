import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button";
import { defaultTheme } from "./styles/themes/default";
import { useState } from "react";
import { lightTheme } from "./styles/themes/lightTheme";

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
    </ThemeProvider>
  );
}
