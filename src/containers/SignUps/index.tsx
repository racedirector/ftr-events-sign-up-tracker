import React, { useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  ClassParticipationCountHeader,
  ClassParticipationCountHeaderItem,
} from "@/components/ClassParticipationCountHeader";
import { TeamList } from "@/components/TeamList";
import useColors from "@/hooks/useColors";
import useGetSignUps, { NetworkTeam } from "@/hooks/useGetSignUpsMaster";

type TeamsByCarClass = {
  [carClass: string]: NetworkTeam[];
};

interface ClassSectionProps {
  title: string;
  teams: NetworkTeam[];
}

const ClassSection: React.FC<ClassSectionProps> = ({
  title = "Class",
  teams,
}) => {
  const colors = useColors();
  return (
    <View>
      <View style={styles.classSectionHeader}>
        <Text style={[styles.classSectionHeaderTitle, { color: colors.text }]}>
          {title}
        </Text>
      </View>
      <TeamList
        scrollEnabled={false}
        style={[
          styles.teamList,
          {
            backgroundColor: colors.card,
          },
        ]}
        contentContainerStyle={styles.teamListContentContainer}
        teams={teams.map(({ drivers, ...item }) => ({
          ...item,
          data: [drivers],
        }))}
      />
    </View>
  );
};

export interface SignUpListProps {}

export const SignUpList: React.FC<SignUpListProps> = () => {
  const colors = useColors();
  const { data: { signUpCounts = {} } = {} } = useGetSignUps();

  const headerCounts: ClassParticipationCountHeaderItem[] = useMemo(() => {
    return Object.entries(signUpCounts).map(([name, classDetails]) => ({
      name,
      count: classDetails.count,
      color: classDetails.color,
    }));
  }, [signUpCounts]);

  const teams: TeamsByCarClass = useMemo(() => {
    return Object.entries(signUpCounts).reduce(
      (acc, [key, { teams }]) => ({
        ...acc,
        [key]: teams,
      }),
      {}
    );
  }, [signUpCounts]);

  return (
    <>
      <View style={styles.headerContainer}>
        <Text style={[styles.headerPageTitle, { color: colors.text }]}>
          FTR Events S5 Sign Up Tracker
        </Text>
        <Text style={[styles.headerDetail, { color: colors.text }]}>
          Sign up form here: https://forms.gle/4jVnK6a13AP1YvSXA
        </Text>
        <Text style={[styles.headerDetail, { color: colors.text }]}>
          Discord here: https://discord.gg/gYuW9Gk8yA
        </Text>
      </View>

      <View style={styles.classParticipationContainer}>
        <Text style={[styles.classParticipationTitle, { color: colors.text }]}>
          Sign ups by class
        </Text>
        <ClassParticipationCountHeader counts={headerCounts} />
      </View>

      <View style={styles.classParticipantSection}>
        <Text
          style={[styles.classParticipantSectionTitle, { color: colors.text }]}
        >
          {"Team sign ups (click to expand and see line-up)"}
        </Text>
        <ClassSection title="GT3" teams={teams["GT3"] || []} />
        <ClassSection title="GT4" teams={teams["GT4"] || []} />
        <ClassSection title="TCR" teams={teams["TCR"] || []} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingBottom: 20,
  },
  headerPageTitle: {
    fontSize: 56,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  headerDetail: {
    fontSize: 18,
  },
  classParticipationContainer: {},
  classParticipantSectionTitle: {
    fontSize: 24,
  },
  classParticipationTitle: {
    fontSize: 24,
  },
  classSectionHeader: {},
  classSectionHeaderTitle: {
    paddingVertical: 10,
    fontSize: 36,
    fontWeight: "bold",
  },
  classParticipantSection: {
    paddingVertical: 20,
  },
  teamList: {},
  teamListContentContainer: {
    paddingHorizontal: 40,
  },
});

export default SignUpList;
