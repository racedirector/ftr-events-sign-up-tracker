import React, { useState } from "react";
import {
  SectionList,
  SectionListProps,
  StyleSheet,
  Text,
  View,
  SectionListData,
  Pressable,
} from "react-native";
import useColors from "@/hooks/useColors";
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
  const colors = useColors();

  return (
    <View style={styles.rowContainer}>
      <Text
        style={[styles.rowLabel, { color: colors.text }]}
      >{`#${carNumber}`}</Text>
      <Text style={[styles.rowLabel, { color: colors.text }]}>{name}</Text>
      <Text style={[styles.rowLabel, { color: colors.text }]}>{teamId}</Text>
      <Text style={[styles.rowLabel, { color: colors.text }]}>{car}</Text>
      <Text style={[styles.rowLabel, { color: colors.text }]}>
        {isPro ? "Yes" : "No"}
      </Text>
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
  teams,
  style,
  contentContainerStyle,
  ...props
}) => {
  const colors = useColors();
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
          <Text
            style={[
              styles.rowLabel,
              styles.headerLabel,
              { color: colors.text },
            ]}
          >
            #
          </Text>
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
            Team ID
          </Text>
          <Text
            style={[
              styles.rowLabel,
              styles.headerLabel,
              { color: colors.text },
            ]}
          >
            Car
          </Text>
          <Text
            style={[
              styles.rowLabel,
              styles.headerLabel,
              { color: colors.text },
            ]}
          >
            Pro
          </Text>
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

const styles = StyleSheet.create({
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
  },
  driverList: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export default TeamList;
