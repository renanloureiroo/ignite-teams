import { TextInput } from "react-native";
import { css, styled } from "styled-components/native";

interface RootProps {
  status: "error" | "focused" | "default";
}

export const Root = styled.Pressable<RootProps>`
  ${({ theme, status }) => css`
    background-color: ${theme.colors["neutral-700"]};
    border-radius: 6px;
    padding: 16px;
    border-width: 1px;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    border-color: ${status === "error"
      ? theme.colors["secondary-200"]
      : status === "focused"
      ? theme.colors["primary-100"]
      : "transparent"};
  `}
`;

export const Field = styled(TextInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.colors["neutral-400"],
}))`
  ${({ theme }) => css`
    color: ${theme.colors["neutral-100"]};
    font-size: ${theme.fontSizes["medium"]};
    vertical-align: middle;
    font-family: ${theme.typhography.primary.regular};
  `}
`;
