import { extendTheme } from "@chakra-ui/react";
import styles from "./styles";
import components from "./components";

export const theme = extendTheme({
  fonts: {
    body: "FigTree, system-ui, sans-serif",
  },
  styles,
  components,
})