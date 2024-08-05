import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { cardAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import "@fontsource-variable/roboto-mono";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys);

const extendedTheme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        fontsize: "sm",
      },
    }),
  },
  components: {
    Card: {
      baseStyle: (props) => ({
        container: {
          bg: mode("gray.50", "")(props),
          borderRadius: "xl",
          borderWidth: 1,
          borderStyle: "solid",
        },
      }),
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
  </BrowserRouter>,
);
