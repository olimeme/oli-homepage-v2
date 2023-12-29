import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import "@fontsource-variable/roboto-mono";

const extendedTheme = extendTheme({
  styles: {
    global: {
      body: {
        fontsize: "sm",
      },
    },
  },
  config: {
    disableTransitionOnChange: false,
  },
  fonts: { body: "Roboto Mono, monospace" },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ChakraProvider theme={extendedTheme}>
      <App />
    </ChakraProvider>
  </BrowserRouter>
);
