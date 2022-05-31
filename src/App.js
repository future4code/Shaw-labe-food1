import React from "react";
import { ThemeProvider } from '@material-ui/core/styles';
import { GlobalStyle } from "./styledApp";
import theme from "./constants/theme";
import Router from "./routes/Router";
import GlobalState from "./global/GlobalState";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalState>
        <GlobalStyle />
        <Router />
      </GlobalState>
    </ThemeProvider>
  );
}

export default App;
