import { styled, css } from "styled-components/native";

interface RootProps {
  variant: "primary" | "secondary";
  pressed: boolean;
}

export const Root = styled.Pressable``;

export const Box = styled.View<RootProps>`
  ${({ theme, variant, pressed }) => css`
    padding: 16px 24px;
    border-radius: 6px;
    align-items: center;
    justify-content: center;
    width: 100%;

    ${variant === "primary" &&
    css`
      background-color: ${pressed
        ? theme.colors["primary-100"]
        : theme.colors["primary-200"]};
    `}

    ${variant === "secondary" &&
    css`
      background-color: ${pressed
        ? theme.colors["secondary-100"]
        : theme.colors["secondary-200"]};
    `}
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors["neutral-50"]};
    font-size: ${theme.fontSizes.medium};
    font-family: ${theme.typhography.primary.bold};
  `}
`;
