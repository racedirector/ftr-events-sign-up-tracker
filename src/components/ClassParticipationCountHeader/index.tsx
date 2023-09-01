import React from "react";
import { Text, View, StyleSheet, ColorValue } from "react-native";
import useColors from "@/hooks/useColors";

export type ClassParticipationCountHeaderItem = {
  name: string;
  count: number;
  color: ColorValue;
  textColor?: ColorValue;
};

export interface ClassParticipationCountHeaderProps {
  counts: ClassParticipationCountHeaderItem[];
}

export const ClassParticipationCountHeader: React.FC<
  ClassParticipationCountHeaderProps
> = ({ counts }) => {
  const colors = useColors();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {counts.map(({ name, count, color, textColor }, index) => (
        <View
          key={`${name}-${index}`}
          style={[styles.countContainer, { backgroundColor: color }]}
        >
          <Text
            style={[styles.classLabel, textColor ? { color: textColor } : null]}
          >
            {name}
          </Text>
          <Text
            style={[styles.countLabel, textColor ? { color: textColor } : null]}
          >
            {count}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  countContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    rowGap: 5,
  },
  classLabel: {
    fontWeight: "bold",
    fontSize: 24,
  },
  countLabel: {
    fontSize: 20,
  },
});

export default ClassParticipationCountHeader;
