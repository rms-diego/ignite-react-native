import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";

import { Groups } from "@screens/Groups";

import theme from "./src/styles";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Groups />
      <StatusBar />
    </ThemeProvider>
  );
}
