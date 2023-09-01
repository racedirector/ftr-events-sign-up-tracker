import React from "react";
import { FlatList, FlatListProps, StyleSheet, Text, View } from "react-native";
import useColors from "@/hooks/useColors";

export interface DriverListRowProps {
  name: string;
  driverId: string | number;
  iRating: string | number;
  license: string;
}

export const DriverListRow: React.FC<DriverListRowProps> = ({
  name,
  driverId,
  iRating,
  license,
}) => {
  const colors = useColors();

  return (
    <View style={styles.rowContainer}>
      <Text style={[styles.rowLabel, { color: colors.text }]}>{name}</Text>
      <Text style={[styles.rowLabel, { color: colors.text }]}>{driverId}</Text>
      <Text style={[styles.rowLabel, { color: colors.text }]}>{iRating}</Text>
      <Text style={[styles.rowLabel, { color: colors.text }]}>{license}</Text>
    </View>
  );
};

export type DriverListItem = DriverListRowProps;

export interface DriverListProps
  extends Omit<
    FlatListProps<DriverListItem>,
    "data" | "renderItem" | "ListHeaderComponent"
  > {
  drivers: readonly DriverListItem[];
}

export const DriverList: React.FC<DriverListProps> = ({
  drivers,
  style,
  ...props
}) => {
  const colors = useColors();

  return (
    <FlatList
      {...props}
      style={[styles.container, style]}
      data={drivers}
      ListHeaderComponent={() => (
        <View style={[styles.rowContainer, styles.headerContainer]}>
          <Text
            style={[
              styles.rowLabel,
              styles.headerLabel,
              { color: colors.text },
            ]}
          >
            Name
          </Text>
          <Text
            style={[
              styles.rowLabel,
              styles.headerLabel,
              { color: colors.text },
            ]}
          >
            Driver ID
          </Text>
          <Text
            style={[
              styles.rowLabel,
              styles.headerLabel,
              { color: colors.text },
            ]}
          >
            iRating
          </Text>
          <Text
            style={[
              styles.rowLabel,
              styles.headerLabel,
              { color: colors.text },
            ]}
          >
            License
          </Text>
        </View>
      )}
      renderItem={({ item: props }) => <DriverListRow {...props} />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
  },
  contentContainer: {
    // rowGap: 5,
  },
  driverList: {
    flex: 1,
  },
  rowContainer: {
    alignSelf: "stretch",
    justifyContent: "space-between",
    flexDirection: "row",
    columnGap: 10,
  },
  headerContainer: {
    paddingBottom: 5,
  },
  headerLabel: {
    fontWeight: "bold",
  },
  rowLabel: {
    alignSelf: "stretch",
    flex: 1,
  },
});

export default DriverList;
