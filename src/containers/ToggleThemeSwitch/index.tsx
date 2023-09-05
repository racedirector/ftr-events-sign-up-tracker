import React from "react";
import { Switch, useThemeMode } from "@rneui/themed";

export interface ToggleThemeSwitchProps {}

export const ToggleThemeSwitch: React.FC<ToggleThemeSwitchProps> = () => {
  const { mode, setMode } = useThemeMode();
  const isDark = mode === "dark";

  return (
    <Switch
      value={isDark}
      onValueChange={() => setMode(isDark ? "light" : "dark")}
    />
  );
};

export default ToggleThemeSwitch;
