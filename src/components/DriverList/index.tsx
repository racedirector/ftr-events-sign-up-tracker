import React from "react";
import { FlatList, FlatListProps, View } from "react-native";
import { Text, makeStyles } from "@rneui/themed";

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
  const styles = useStyles(makeStyles);

  return (
    <View style={styles.rowContainer}>
      <Text style={styles.rowLabel}>{name}</Text>
      <Text style={styles.rowLabel}>{driverId}</Text>
      <Text style={styles.rowLabel}>{iRating}</Text>
      <Text style={styles.rowLabel}>{license}</Text>
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
  const styles = useStyles(makeStyles);

  return (
    <FlatList
      {...props}
      style={[styles.container, style]}
      data={drivers}
      ListHeaderComponent={() => (
        <View style={[styles.rowContainer, styles.headerContainer]}>
          <Text style={[styles.rowLabel, styles.headerLabel]}>Name</Text>
          <Text style={[styles.rowLabel, styles.headerLabel]}>Driver ID</Text>
          <Text style={[styles.rowLabel, styles.headerLabel]}>iRating</Text>
          <Text style={[styles.rowLabel, styles.headerLabel]}>License</Text>
        </View>
      )}
      renderItem={({ item: props }) => <DriverListRow {...props} />}
    />
  );
};

const useStyles = makeStyles((theme) => ({
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
    color: theme.colors.text,
  },
}));

export default DriverList;
