import { theme } from "@/styles";
import styled from "styled-components/native";

export const Wrapper = styled.View`
  flex: 1;
  padding: 24px;
`;

export const HeaderText = styled.Text`
  font-size: ${theme.fontSizes.subheading}px;
  font-weight: ${theme.fontWeights.bold};
`;
