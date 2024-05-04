import styled from "styled-components/native";
import { theme } from "../../styles";

export const Wrapper = styled.View`
  flex: 1;
  gap: 24px;
`;

export const HeaderText = styled.Text`
  font-size: ${theme.fontSizes.subheading}px;
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.primary};
`;

export const ExerciseStatement = styled.View`
  width: 100%;
  padding: 16px;
  border: 1px solid ${theme.colors.primary};
  border-radius: 4px;
`;

export const WordsWrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  min-height: 40px;
`;

export const WordWrapper = styled.View`
  padding: 8px;
  border: 1px solid ${theme.colors.primary}70;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
`;

export const SelectedWord = styled.View`
  padding: 8px;
  border: 1px solid ${theme.colors.secondary};
  border-radius: 4px;
  cursor: pointer;
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
  display: flex;
  flex-direction: row;
  gap: 4px;
`;

export const BlueText = styled.Text`
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.header}px;
  font-weight: ${theme.fontWeights.bold};
`;
