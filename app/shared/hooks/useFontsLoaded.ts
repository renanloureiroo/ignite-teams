import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";

import * as SplashScreen from "expo-splash-screen";

export const useFontsLoaded = () => {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return {
    fontsLoaded,
    hideSplashScreen: SplashScreen.hideAsync,
  };
};
