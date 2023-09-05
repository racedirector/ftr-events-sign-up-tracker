import React, { PropsWithChildren } from "react";
import { ThemeProvider } from "@rneui/themed";
import { CookiesProvider } from "react-cookie";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { HeaderNavigationBar } from "@/components/HeaderNavigationBar";
import SignUps from "@/containers/SignUps";

/**
 * All of theses providers and components are separated in case they
 * need to utilize each other's provided hooks in order to handle theming,
 * state, cookies, etc.
 */

const DataProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => (
  <CookiesProvider>{children}</CookiesProvider>
);

const UIProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => (
  <SafeAreaProvider>
    <ThemeProvider>{children}</ThemeProvider>
  </SafeAreaProvider>
);

const AppProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => (
  <UIProvider>
    <DataProvider>{children}</DataProvider>
  </UIProvider>
);

const AppUI: React.FC = () => (
  <>
    <HeaderNavigationBar />
    <SignUps />
  </>
);

export const App = () => {
  return (
    <AppProvider>
      <AppUI />
    </AppProvider>
  );
};

export default App;
