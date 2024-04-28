import { useMutateExercise } from "store";
import { BlueText, CorrectExerciseButton, Wrapper } from "./styles";
import { WordOrderingExercise } from "@/components";
import { ActivityIndicator } from "@ant-design/react-native";

export const LearningPage = () => {
  const { createExercise, isPending, exercise } = useMutateExercise();

  const handleNextExercise = () => createExercise();

  const handleCheckExercise = () => {};

  return (
    <Wrapper>
      <WordOrderingExercise />
      <CorrectExerciseButton onPress={handleNextExercise} activeOpacity={0.8}>
        <BlueText>Next</BlueText>
        {isPending && <ActivityIndicator size="small" color="white" />}
      </CorrectExerciseButton>
    </Wrapper>
  );
};
