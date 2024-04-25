import { theme } from "@/styles";
import styled from "styled-components/native";

export const Wrapper = styled.View`
  flex: 1;
  padding: 24px;
  justify-content: space-between;
`;

export const CorrectExerciseButton = styled.TouchableOpacity`
  background-color: ${theme.colors.primary};
  border: 1px solid ${theme.colors.primary};
  padding: 8px 16px;
  border-radius: 4px;
  align-items: center;
  margin-right: 16px;
  margin-bottom: 48px;
  align-self: flex-end;
`;

export const BlueText = styled.Text`
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.header}px;
  font-weight: ${theme.fontWeights.bold};
`;
