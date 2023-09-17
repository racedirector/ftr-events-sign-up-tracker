// import {
//   DefaultTheme as RNDefaultTheme,
//   DarkTheme as RNDarkTheme,
// } from "@react-navigation/native";
import { createTheme } from "@rneui/themed";
import colors from "./colors";

const theme = createTheme({
  darkColors: {
    ...colors,
    text: "rgb(28, 28, 30)",
    // text: RNDarkTheme.colors.text,
    // border: RNDarkTheme.colors.border,
    // notification: RNDarkTheme.colors.notification,
  },
  lightColors: {
    ...colors,
    text: "rgb(229, 229, 231)",
    // text: RNDefaultTheme.colors.text,
    // border: RNDefaultTheme.colors.border,
    // notification: RNDefaultTheme.colors.notification,
  },
});

export default theme;
