import { styled } from "styled-components/native";
import { SafeAreasType } from ".";

import { useSafeArea } from "@shared/hooks/useSafeArea";
import { ScrollView, ScrollViewProps } from "react-native";

interface RootProps {
  safeAreas?: SafeAreasType[];
  safes: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
}

type RootScrollProps = RootProps & ScrollViewProps;

export const RootFixed = styled.View<RootProps>`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.colors["neutral-600"]};

  padding-top: ${({ safes }) => safes.top ?? 0}px;
  padding-bottom: ${({ safes }) => safes.bottom ?? 0}px;
  padding-left: ${({ safes }) => safes.left + 20 ?? 20}px;
  padding-right: ${({ safes }) => safes.right + 20 ?? 20}px;
`;

export const RootScroll = styled(ScrollView).attrs<RootScrollProps>(
  ({ safeAreas, safes }) => ({
    contentContainerStyle: {
      paddingTop: safeAreas?.includes("top") ? safes.top : 0,
      paddingBottom: safeAreas?.includes("bottom") ? safes.bottom : 0,
      paddingLeft: safeAreas?.includes("left") ? safes.left + 20 : 20,
      paddingRight: safeAreas?.includes("right") ? safes.right + 20 : 20,
    },
  })
)`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.colors["neutral-600"]};
`;
