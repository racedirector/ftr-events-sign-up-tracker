import { ColorValue, StyleSheet } from "react-native";

type ColorsMap = Record<string, ColorValue>;

export const lightColors: ColorsMap = {
  primary: "rgb(0, 122, 255)",
  background: "rgb(242, 242, 242)",
  card: "rgb(255, 255, 255)",
  text: "rgb(28, 28, 30)",
  border: "rgb(216, 216, 216)",
  notification: "rgb(255, 59, 48)",
  secondary: "#ad1457",
  white: "#ffffff",
  black: "#242424",
  grey0: "#393e42",
  grey1: "#43484d",
  grey2: "#5e6977",
  grey3: "#86939e",
  grey4: "#bdc6cf",
  grey5: "#e1e8ee",
  greyOutline: "#bbb",
  searchBg: "#303337",
  success: "#52c41a",
  error: "#ff190c",
  warning: "#faad14",
  disabled: "hsl(208, 8%, 90%)",
  // Darker color if hairlineWidth is not thin enough
  divider: StyleSheet.hairlineWidth < 1 ? "#bcbbc1" : "rgba(0, 0, 0, 0.12)",
};

export const darkColors: ColorsMap = {
  primary: "rgb(10, 132, 255)",
  background: "rgb(1, 1, 1)",
  card: "rgb(18, 18, 18)",
  text: "rgb(229, 229, 231)",
  border: "rgb(39, 39, 41)",
  notification: "rgb(255, 69, 58)",
  secondary: "#aa49eb",
  white: "#080808",
  black: "#f2f2f2",
  grey5: "#393e42",
  grey4: "#43484d",
  grey3: "#5e6977",
  grey2: "#86939e",
  grey1: "#bdc6cf",
  grey0: "#e1e8ee",
  greyOutline: "#bbb",
  searchBg: "#303337",
  success: "#439946",
  error: "#bf2c24",
  warning: "#cfbe27",
  disabled: "hsl(208, 8%, 90%)",
  // Darker color if hairlineWidth is not thin enough
  divider: StyleSheet.hairlineWidth < 1 ? "#84838a" : "rgba(0, 0, 0, 0.12)",
};
