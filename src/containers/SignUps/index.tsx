import React, { useMemo } from "react";
import { View } from "react-native";
import { Text, makeStyles } from "@rneui/themed";
import {
  ClassParticipationCountHeader,
  ClassParticipationCountHeaderItemProps,
} from "@/components/ClassParticipationCountHeader";
import useGetSignUpsByClass from "@/hooks/useGetSignUps";

const colorForClass = (className: string) => {
  switch (className) {
    case "GT3":
      return "#fce8b2";
    case "GT4":
      return "#a4c2f4";
    case "TCR":
      return "#ea9999";
    default:
      return "#666";
  }
};

export interface SignUpListProps {}

export const SignUpList: React.FC<SignUpListProps> = () => {
  const styles = useStyles(makeStyles);
  const { data = {} } = useGetSignUpsByClass();

  const headerCounts: ClassParticipationCountHeaderItemProps[] = useMemo(() => {
    return Object.entries(data).map(([name, count]) => ({
      name,
      count,
      color: colorForClass(name),
    }));
  }, [data]);

  return (
    <View style={styles.classParticipationContainer}>
      <Text style={styles.classParticipationTitle}>Sign ups by class</Text>
      <ClassParticipationCountHeader counts={headerCounts} />
    </View>
  );
};

const useStyles = makeStyles((theme) => ({
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
  classParticipationContainer: {
    backgroundColor: theme.colors.background,
  },
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
}));

export default SignUpList;
