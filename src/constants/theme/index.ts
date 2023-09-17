// import {
//   DefaultTheme as RNDefaultTheme,
//   DarkTheme as RNDarkTheme,
// } from "@react-navigation/native";
import { createTheme } from "@rneui/themed";
import colors from "./colors";

const theme = createTheme({
  darkColors: {
    ...colors,
    // text: RNDarkTheme.colors.text,
    // border: RNDarkTheme.colors.border,
    // notification: RNDarkTheme.colors.notification,
  },
  lightColors: {
    ...colors,
    // text: RNDefaultTheme.colors.text,
    // border: RNDefaultTheme.colors.border,
    // notification: RNDefaultTheme.colors.notification,
  },
});

export default theme;
