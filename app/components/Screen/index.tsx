import { FC } from "react";
import * as Styled from "./styles";
import { useSafeArea } from "@shared/hooks/useSafeArea";
import {
  ScrollViewProps,
  ViewProps,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

export type SafeAreasType = "bottom" | "top" | "left" | "right";

type ScreenExtendsProps = ScrollViewProps | ViewProps;

type ScreenProps = ScreenExtendsProps & {
  type?: "fixed" | "scroll";
  safeAreas?: SafeAreasType[];
  children: React.ReactNode;
};

export const Screen: FC<ScreenProps> = (props) => {
  const { type = "fixed", safeAreas, ...rest } = props;
  const safes = useSafeArea();

  const Comp = type === "fixed" ? Styled.RootFixed : Styled.RootScroll;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
      >
        <Comp safes={safes} safeAreas={safeAreas} {...rest}>
          {props.children}
        </Comp>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
