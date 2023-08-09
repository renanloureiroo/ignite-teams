import { useSafeAreaInsets } from "react-native-safe-area-context";

export const useSafeArea = () => {
  const { top, bottom, left, right } = useSafeAreaInsets();

  return {
    top,
    bottom,
    left,
    right,
  };
};
