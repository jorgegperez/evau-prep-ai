import { Wrapper } from "./styles";
import { WordOrderingExercise } from "@/components";
import { ActivityIndicator } from "@ant-design/react-native";

export const LearningPage = () => {
  return (
    <Wrapper>
      <WordOrderingExercise />
    </Wrapper>
  );
};
