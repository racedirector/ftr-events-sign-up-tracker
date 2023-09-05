import React from "react";
import { View, ColorValue, StyleProp, ViewStyle } from "react-native";
import { Text, makeStyles } from "@rneui/themed";

export type ClassParticipationCountHeaderItemProps = {
  name: string;
  color: ColorValue;
  count: number;
  textColor?: ColorValue;
};

const ClassParticipationCountHeaderItem: React.FC<
  ClassParticipationCountHeaderItemProps
> = ({ name, color, textColor, count }) => {
  const styles = useStyles(makeStyles);
  return (
    <View style={[styles.countContainer, { backgroundColor: color }]}>
      <Text
        style={[styles.classLabel, textColor ? { color: textColor } : null]}
      >
        {name}
      </Text>
      {count && (
        <Text
          style={[styles.countLabel, textColor ? { color: textColor } : null]}
        >
          {count}
        </Text>
      )}
    </View>
  );
};

export interface ClassParticipationCountHeaderProps {
  loading?: boolean;
  placeholderCount?: number;
  style?: StyleProp<ViewStyle>;
  counts?: ClassParticipationCountHeaderItemProps[];
}

export const ClassParticipationCountHeader: React.FC<
  ClassParticipationCountHeaderProps
> = ({ counts = [], style }) => {
  const styles = useStyles(makeStyles);

  return (
    <View style={[styles.container, style]}>
      {counts.map(({ name, ...props }, index) => (
        <ClassParticipationCountHeaderItem
          key={`${name}-${index}`}
          name={name}
          {...props}
        />
      ))}
    </View>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: theme.colors.background,
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
}));

export default ClassParticipationCountHeader;
