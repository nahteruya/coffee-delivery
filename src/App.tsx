import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { Header } from "./components/Header";
import { CartItemsContextProvider } from "./context/CartItemsContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartItemsContextProvider>
          <Header />
          <Router />
        </CartItemsContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
