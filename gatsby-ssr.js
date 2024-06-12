import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/theme";
import GlobalStyle from "./src/theme/GlobalStyle";
import Divider from "./src/theme/Divider";
import Navbar from "./src/components/app/Navbar";
import Footer from "./src/components/app/Footer";

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Navbar />
    <Divider />
    <div>{element}</div>
    <Footer />
  </ThemeProvider>
);
