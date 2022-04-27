import "../styles/globals.css";
import Layout from "../components/Layout/Layout";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";
import "@fontsource/rubik-wet-paint";
import "@fontsource/bangers";
import "@fontsource/merriweather";

const colors = {
  brand: {
    900: "#005555",
    800: "#069A8E",
    700: "#A1E3D8",
    500: "#F7FF93",
  },
};
const fonts = {
  font: {
    heading: "Bangers, cursive",
    body: "merriweather, sans-serif",
  },
};

const borderRadius = {
  radii: {
    none: "0",
    sm: "0.125rem",
    base: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
  },
};

const theme = extendTheme({ colors, fonts, borderRadius });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
