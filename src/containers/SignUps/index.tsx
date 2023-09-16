import React, { useMemo } from "react";
import { View } from "react-native";
import { Text, makeStyles, useTheme, Colors } from "@rneui/themed";
import { ClassParticipationCountHeader } from "@/components/ClassParticipationCountHeader";
import useGetSignups from "@/hooks/useGetSignUpsMaster";

const colorForClass = (className: string, colors: Colors) => {
  switch (className) {
    case "LMP3":
      return colors.lmp3Pro;
    case "GT3":
      return colors.gt3Pro;
    case "GT3 AM":
      return colors.gt3Am;
    case "GT4":
      return colors.gt4Pro;
    default:
      return "#666";
  }
};

const textColorForClass = (className: string, colors: Colors) => {
  switch (className) {
    case "LMP3":
      return colors.white;
    default:
      return colors.text;
  }
};

const useSignUpListData = () => {
  const {
    theme: { colors },
  } = useTheme();
  const { data: { signUpCounts: signUps = {} } = {} } = useGetSignups();

  const headerData = useMemo(() => {
    return Object.keys(signUps).map((name) => {
      const { count } = signUps[name];
      return {
        name,
        count,
        color: colorForClass(name, colors),
        textColor: textColorForClass(name, colors),
      };
    });
  }, [colors, signUps]);

  return {
    headerData,
  };
};

export interface SignUpListProps {}

export const SignUpList: React.FC<SignUpListProps> = () => {
  const styles = useStyles(makeStyles);
  const { headerData } = useSignUpListData();

  return (
    <View style={styles.classParticipationContainer}>
      <Text style={styles.classParticipationTitle}>Sign ups by class</Text>
      <ClassParticipationCountHeader counts={headerData} />
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
