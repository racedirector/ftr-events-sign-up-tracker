import React from "react";
import { Text } from "@rneui/themed";

export interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  return <Text h1>Home Component</Text>;
};

export default Home;
