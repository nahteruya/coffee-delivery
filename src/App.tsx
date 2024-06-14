import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { Header } from "./components/Header";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
