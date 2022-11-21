import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import theme from "./theme.ts";
import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";

const extendedTheme = extendTheme({
  styles: {
    global: {
      body: {
        transitionProperty: "all",
        transitionDuration: "normal",
      },
    },
  },
  config: {
    disableTransitionOnChange: false,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={extendedTheme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </ChakraProvider>
);
