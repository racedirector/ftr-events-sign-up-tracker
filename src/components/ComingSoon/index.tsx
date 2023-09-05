import React from "react";
import { Text, View } from "react-native";
import { makeStyles } from "@rneui/themed";
import strings from "@/constants/strings";

export interface ComingSoonProps {
  title?: string;
  detail?: string;
}

export const ComingSoon: React.FC<ComingSoonProps> = ({
  title = strings.t("comingSoon.title"),
  detail = strings.t("comingSoon.detail"),
}) => {
  const styles = useStyles(makeStyles);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.detail}>{detail}</Text>
    </View>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.colors.background,
    padding: 28,
  },
  title: {
    // color: theme.colors.text,
    fontWeight: "bold",
    fontSize: 48,
  },
  detail: {
    // color: theme.colors.text,
  },
}));

export default ComingSoon;
