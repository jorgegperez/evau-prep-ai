import { StyleSheet } from "react-native";
import { theme } from "../../styles";
import styled from "styled-components/native";

export const Wrapper = styled.View`
  padding: 20px;
  background-color: ${theme.colors.background};
  flex: 1;
`;

export const HeaderText = styled.Text`
  font-size: ${theme.fontSizes.subheading}px;
  font-weight: ${theme.fontWeights.bold};
  margin-bottom: 10px;
`;

export const ContinueWrapper = styled.View`
  padding: 10px;
  border: 1px solid ${theme.colors.primary};
  border-radius: 4px;
  align-items: center;
  width: 100%;
  cursor: pointer;

  &:active {
    background-color: ${theme.colors.secondary};
  }
`;
