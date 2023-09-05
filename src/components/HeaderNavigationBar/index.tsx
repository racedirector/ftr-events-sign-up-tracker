import React from "react";
import { View } from "react-native";
import { Text, makeStyles } from "@rneui/themed";
import strings from "@/constants/strings";

export interface HeaderNavigationBarProps {}

export const HeaderNavigationBar: React.FC<HeaderNavigationBarProps> = () => {
  const styles = useStyles(makeStyles);

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <Text h3>{strings.t("header.title")}</Text>
        </View>

        <View style={styles.detailsContainer}>
          <View style={styles.navigationContainer}>
            <a href="https://forms.gle/4jVnK6a13AP1YvSXA">
              {strings.t("header.register")}
            </a>
            <a href="https://discord.gg/gYuW9Gk8yA">
              {strings.t("header.socials.discord")}
            </a>
            {/* <Text h4>{strings.t("header.navigation.about")}</Text>
            <Text h4>{strings.t("header.navigation.schedule")}</Text>
            <Text h4>{strings.t("header.navigation.register")}</Text>
            <Text h4>{strings.t("header.navigation.sponsors")}</Text> */}
          </View>

          {/* <View style={styles.socialContainer}>
            <SocialIcon
              type="instagram"
              iconSize={20}
              title={strings.t("header.socials.instagram")}
            />
            <SocialIcon
              type="twitter"
              iconSize={20}
              title={strings.t("header.socials.twitter")}
            />
          </View> */}

          {/* <Button title={strings.t("header.authentication.signIn")} /> */}
        </View>
      </View>
    </View>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.colors.background,
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15,
    marginVertical: 20,
  },
  titleContainer: {
    justifyContent: "center",
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    columnGap: 20,
  },
  socialContainer: {
    flexDirection: "row",
    columnGap: 10,
  },
  navigationContainer: {
    flexDirection: "row",
    columnGap: 30,
  },
}));

export default HeaderNavigationBar;
