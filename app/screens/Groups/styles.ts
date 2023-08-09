import { FlatList, TouchableOpacity } from "react-native";
import { css, styled } from "styled-components/native";
import { TurmaType } from ".";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors["primary-100"]};
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 32px;
`;

export const Header = styled.View`
  justify-content: center;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes["xlarge"]};
    color: ${theme.colors["neutral-100"]};
    font-family: ${theme.typhography.primary.bold};
    margin-top: 24px;
  `}
`;

export const HeaderSubtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes["medium"]};
    color: ${theme.colors["neutral-300"]};
    font-family: ${theme.typhography.primary.regular};
    margin-top: 8px;
  `}
`;

export const Content = styled.View`
  flex: 1;
  margin-top: 32px;
`;

export const Turmas = styled(FlatList as typeof FlatList<TurmaType>)``;

export const Separator = styled.View`
  height: 16px;
`;

export const TurmaContainer = styled(TouchableOpacity).attrs({
  activeOpacity: 0.7,
})`
  ${({ theme }) => css`
    border-radius: 8px;
    background-color: ${theme.colors["neutral-400"]};
    padding: 24px 16px;
  `}
`;

export const TurmaTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes["medium"]};
    color: ${theme.colors["neutral-100"]};
    font-family: ${theme.typhography.primary.regular};
  `}
`;

export const ButtonWrapper = styled.View`
  margin: 16px 0px;
`;
