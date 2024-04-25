import { Text } from "react-native";
import { ContinueWrapper, HeaderText, Wrapper } from "./Dashboard.styles";
import { Link } from "react-router-native";
import { StyledLink } from "../StyledLink";

export const Dashboard = () => {
  return (
    <Wrapper>
      <HeaderText>Dashboard</HeaderText>
      <StyledLink to="/learn">
        <ContinueWrapper>
          <Text>Continue</Text>
        </ContinueWrapper>
      </StyledLink>
    </Wrapper>
  );
};
