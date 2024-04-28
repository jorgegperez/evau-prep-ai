import { Text, TouchableHighlight, ActivityIndicator } from "react-native";
import { ContinueWrapper, HeaderText, Wrapper } from "./Dashboard.styles";
import { useMutateExercise } from "store";

export const Dashboard = () => {
  const { createExercise, isPending } = useMutateExercise();

  const handleCreateExercise = () => createExercise();

  return (
    <Wrapper>
      <HeaderText>Dashboard</HeaderText>
      <TouchableHighlight onPress={handleCreateExercise}>
        <ContinueWrapper>
          <Text>Continue</Text>
        </ContinueWrapper>
      </TouchableHighlight>
      {isPending && <ActivityIndicator size="large" color="#0000ff" />}
    </Wrapper>
  );
};
