import React, { useState } from "react";
import {
  SectionList,
  SectionListProps,
  View,
  SectionListData,
  Pressable,
} from "react-native";
import { Text, makeStyles } from "@rneui/themed";
import { DriverList, DriverListRowProps } from "../DriverList";

interface TeamListRowProps {
  name: string;
  teamId: string | number;
  car: string;
  isPro: boolean;
  carNumber: number | string;
}

const TeamListRow: React.FC<TeamListRowProps> = ({
  name,
  teamId,
  car,
  isPro,
  carNumber,
}) => {
  const styles = useStyles(makeStyles);

  return (
    <View style={styles.rowContainer}>
      <Text style={styles.rowLabel}>{`#${carNumber}`}</Text>
      <Text style={styles.rowLabel}>{name}</Text>
      <Text style={styles.rowLabel}>{teamId}</Text>
      <Text style={styles.rowLabel}>{car}</Text>
      <Text style={styles.rowLabel}>{isPro ? "Yes" : "No"}</Text>
    </View>
  );
};

type TeamListSection = SectionListData<DriverListRowProps[], TeamListRowProps>;

type BaseTeamListProps = SectionListProps<
  DriverListRowProps[],
  TeamListSection
>;

export interface TeamListProps
  extends Omit<
    BaseTeamListProps,
    | "sections"
    | "renderItem"
    | "renderSectionHeader"
    | "ListHeaderComponent"
    | "extraData"
  > {
  teams: TeamListSection[];
}

export const TeamList: React.FC<TeamListProps> = ({
  teams = [],
  style,
  contentContainerStyle,
  ...props
}) => {
  const styles = useStyles(makeStyles);
  const [expandedIndexes, setExpandedIndexes] = useState<(string | number)[]>(
    []
  );

  return (
    <SectionList
      {...props}
      style={[styles.container, style]}
      contentContainerStyle={[styles.contentContainer, contentContainerStyle]}
      sections={teams}
      extraData={expandedIndexes}
      ListHeaderComponent={() => (
        <View style={[styles.rowContainer, styles.headerContainer]}>
          <Text style={[styles.rowLabel, styles.headerLabel]}>#</Text>
          <Text style={[styles.rowLabel, styles.headerLabel]}>Name</Text>
          <Text style={[styles.rowLabel, styles.headerLabel]}>Team ID</Text>
          <Text style={[styles.rowLabel, styles.headerLabel]}>Car</Text>
          <Text style={[styles.rowLabel, styles.headerLabel]}>Pro</Text>
        </View>
      )}
      renderSectionHeader={({ section: { data: _data, teamId, ...props } }) => (
        <Pressable
          onPress={() => {
            setExpandedIndexes((previous) =>
              previous.includes(teamId)
                ? previous.filter((indexId) => indexId !== teamId)
                : [...previous, teamId]
            );
          }}
        >
          <TeamListRow teamId={teamId} {...props} />
        </Pressable>
      )}
      renderItem={({ item: props, section: { teamId } }) => {
        if (!expandedIndexes.includes(teamId)) {
          return null;
        }

        return (
          <DriverList
            style={styles.driverList}
            scrollEnabled={false}
            key={`${teamId}-driver-list`}
            drivers={props}
          />
        );
      }}
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
  driverList: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
}));

export default TeamList;
