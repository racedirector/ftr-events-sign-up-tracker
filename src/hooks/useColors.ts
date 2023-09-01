import { useMemo } from "react";
import { useColorScheme } from "react-native";
import { lightColors, darkColors } from "@/constants/colors";

export const useColors = () => {
  const scheme = useColorScheme();

  return useMemo(() => {
    return scheme === "dark" ? darkColors : lightColors;
  }, [scheme]);
};

export default useColors;
