import React from "react";
import { Text } from "@rneui/themed";

export interface AboutProps {}

export const About: React.FC<AboutProps> = () => {
  return <Text h1>About Component</Text>;
};

export default About;
