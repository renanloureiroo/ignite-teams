import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { GroupsScreen } from "@screens/Groups";
import { ThemeProvider } from "styled-components/native";
import { theme } from "@theme/index";
import { useFontsLoaded } from "./app/shared/hooks/useFontsLoaded";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaProvider } from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const { fontsLoaded, hideSplashScreen } = useFontsLoaded();

  if (!fontsLoaded) return null;

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <View style={styles.container} onLayout={hideSplashScreen}>
          <GroupsScreen />
          <StatusBar style="auto" />
        </View>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
