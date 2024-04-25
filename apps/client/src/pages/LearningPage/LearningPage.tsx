import { BlueText, CorrectExerciseButton, Wrapper } from "./styles";
import { WordOrderingExercise } from "@/components";

export const LearningPage = () => {
  return (
    <Wrapper>
      <WordOrderingExercise />
      <CorrectExerciseButton activeOpacity={0.8}>
        <BlueText>Next</BlueText>
      </CorrectExerciseButton>
    </Wrapper>
  );
};
