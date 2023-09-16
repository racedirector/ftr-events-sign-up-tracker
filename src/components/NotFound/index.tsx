import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "@rneui/themed";
import { Link } from "expo-router";
import strings from "@/constants/strings";

export interface NotFoundProps {}

export const NotFoundScreen: React.FC<NotFoundProps> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{strings.t("notFound.subttitle")}</Text>

      <Link href="/" style={styles.link}>
        <Text style={styles.linkText}>{strings.t("notFound.button")}</Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});

export default NotFoundScreen;
